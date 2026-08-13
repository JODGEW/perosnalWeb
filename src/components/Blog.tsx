import { ArrowUpRight, Brain, Network, Settings } from 'lucide-react';
import { blogData } from '@/data/blog';
import SectionHead from './SectionHead';
import ScrollReveal from './ScrollReveal';

const topicIcons: Record<string, React.ComponentType> = {
  Brain,
  Network,
  Settings,
};

export default function Blog() {
  const { latestPost } = blogData;

  return (
    <section className="section" id="blogs">
      <SectionHead num="05" title="Writing" aside={blogData.visitLabel} />

      <ScrollReveal>
        <div className="writing-grid">
          <div className="writing-main">
            <div className="post-meta">
              <span className="live-dot" aria-hidden="true" />
              <span className="label">Latest post</span>
              {latestPost.dateText && (
                <span className="date">{latestPost.dateText}</span>
              )}
            </div>

            <a
              href={latestPost.url}
              className="post-title"
              target="_blank"
              rel="noopener noreferrer"
            >
              {latestPost.title}
              <ArrowUpRight />
            </a>

            <p className="writing-desc">{blogData.description}</p>
          </div>

          <div className="writing-side">
            {blogData.topics.map((topic) => {
              const Icon = topicIcons[topic.icon];
              return (
                <div key={topic.label} className="topic-row">
                  {Icon && <Icon />}
                  <span>{topic.label}</span>
                </div>
              );
            })}

            <a
              href={blogData.visitUrl}
              className="btn btn-solid"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the blog
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
