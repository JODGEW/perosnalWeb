export interface PersonalInfo {
  name: string;
  nickname: string;
  role: string;
  location: string;
  email: string;
  lede: string;
  siteUrl: string;
  linkedIn: string;
  blogUrl: string;
  resumePath: string;
  portraitPath: string;
}

export interface HeroFact {
  key: string;
  value: string;
}

export interface Stat {
  value: string;
  label: string;
  source: string;
}

export interface AboutRow {
  label: string;
  value: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
  bullets: string[];
}

export interface StackRow {
  label: string;
  items: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  external: boolean;
}

export type ProjectMediaType = 'image' | 'audio';

export interface ProjectItem {
  title: string;
  /** Short editorial category shown above the title, e.g. "Live product". */
  kind: string;
  mediaType: ProjectMediaType;
  imageSrc?: string;
  /**
   * How the card image sits in its 5:3 frame. Defaults to 'contain' (whole
   * screenshot visible); 'cover' crops to the top edge, for tall assets like a
   * full paper page that would otherwise shrink to an illegible sliver.
   */
  imageFit?: 'contain' | 'cover';
  /** Larger asset opened by the lightbox, when it differs from the card image. */
  expandSrc?: string;
  audioSrc?: string;
  description: string;
  links: ProjectLink[];
  techStack: string[];
}

export interface BlogTopic {
  icon: string;
  label: string;
}

export interface BlogLatestPost {
  title: string;
  dateText: string;
  statusText: string;
  url: string;
}

export interface BlogData {
  latestPost: BlogLatestPost;
  description: string;
  topics: BlogTopic[];
  visitUrl: string;
  visitLabel: string;
}
