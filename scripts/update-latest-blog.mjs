import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const BLOG_URL = process.env.BLOG_URL ?? 'https://blog.wenhaohe.com';
const POSTS_API_URL = process.env.BLOG_POSTS_API_URL ?? `${BLOG_URL}/api/posts`;
const OUTPUT_FILE = path.join(process.cwd(), 'src/data/generated/latestBlog.ts');
const FALLBACK_LATEST_BLOG = {
  title: 'Layoffs Aren’t Random. Companies Just Can’t Measure Real Value',
  dateText: '4/2/2026',
  statusText: 'Recent: Layoffs Aren’t Random. Companies Just Can’t Measure Real Value (4/2/2026)',
  url: 'https://blog.wenhaohe.com/#post/layoffs-arent-random-companies-just-cant-measure-real-value',
};

function pickPosts(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.posts)) return payload.posts;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
}

function getPostDate(post) {
  return post.publishedAt ?? post.createdAt ?? post.date ?? post.updatedAt ?? '';
}

function formatShortDate(dateValue) {
  if (!dateValue) return '';

  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return '';

  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

function latestPostFrom(posts) {
  return posts
    .filter((post) => typeof post?.title === 'string' && post.title.trim())
    .sort((left, right) => {
      const leftTime = new Date(getPostDate(left)).getTime();
      const rightTime = new Date(getPostDate(right)).getTime();
      return (Number.isNaN(rightTime) ? 0 : rightTime) - (Number.isNaN(leftTime) ? 0 : leftTime);
    })[0];
}

function statusTextFor(post) {
  const dateText = formatShortDate(getPostDate(post));
  return dateText ? `Recent: ${post.title} (${dateText})` : `Recent: ${post.title}`;
}

function latestBlogFor(post) {
  return {
    title: post.title,
    dateText: formatShortDate(getPostDate(post)),
    statusText: statusTextFor(post),
    url: urlFor(post),
  };
}

function urlFor(post) {
  if (typeof post.url === 'string' && post.url) return post.url;
  if (typeof post.slug === 'string' && post.slug) return `${BLOG_URL}/#post/${post.slug}`;
  return BLOG_URL;
}

async function writeLatestBlog({ title, dateText, statusText, url, source }) {
  await mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  await writeFile(
    OUTPUT_FILE,
    `export const latestBlog = ${JSON.stringify({
      title,
      dateText,
      statusText,
      url,
      source,
    }, null, 2)} as const;\n`,
  );
}

async function readExistingLatestBlog() {
  try {
    const existing = await readFile(OUTPUT_FILE, 'utf8');
    const readField = (field) => {
      const match = existing.match(new RegExp(`"${field}":\\s*"((?:[^"\\\\]|\\\\.)*)"`));
      return match ? JSON.parse(`"${match[1]}"`) : undefined;
    };

    return {
      title: readField('title') ?? FALLBACK_LATEST_BLOG.title,
      dateText: readField('dateText') ?? FALLBACK_LATEST_BLOG.dateText,
      statusText: readField('statusText') ?? FALLBACK_LATEST_BLOG.statusText,
      url: readField('url') ?? FALLBACK_LATEST_BLOG.url,
    };
  } catch {
    return FALLBACK_LATEST_BLOG;
  }
}

try {
  const response = await fetch(POSTS_API_URL, {
    headers: { accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`${POSTS_API_URL} responded with ${response.status}`);
  }

  const payload = await response.json();
  const latestPost = latestPostFrom(pickPosts(payload));

  if (!latestPost) {
    throw new Error(`${POSTS_API_URL} did not return any posts with titles`);
  }

  await writeLatestBlog({
    ...latestBlogFor(latestPost),
    source: POSTS_API_URL,
  });

  console.log(`Updated latest blog title: ${latestPost.title}`);
} catch (error) {
  const latestBlog = await readExistingLatestBlog();
  await writeLatestBlog({
    ...latestBlog,
    source: 'fallback',
  });

  console.warn(`Keeping existing latest blog title. ${error.message}`);
}
