export interface PersonalInfo {
  name: string;
  nickname: string;
  role: string;
  email: string;
  description: string;
  siteUrl: string;
  linkedIn: string;
  blogUrl: string;
  resumePath: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
  bullets: string[];
  revealDelay?: number;
}

export interface SkillProficiency {
  label: string;
  fillWidth: number;
}

export interface SkillCardData {
  category: 'languages' | 'libraries' | 'tools';
  icon: string;
  heading: string;
  description: string;
  proficiencies: SkillProficiency[];
  tags: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
  icon: string;
  external: boolean;
}

export type ProjectMediaType = 'image' | 'audio' | 'none';

export interface ProjectItem {
  title: string;
  categories: string[];
  mediaType: ProjectMediaType;
  imageSrc?: string;
  audioSrc?: string;
  description: string;
  links: ProjectLink[];
  techStack: string[];
}

export interface BlogFeature {
  icon: string;
  label: string;
}

export interface BlogData {
  title: string;
  statusText: string;
  description: string;
  features: BlogFeature[];
  visitUrl: string;
  techBadges: string[];
}
