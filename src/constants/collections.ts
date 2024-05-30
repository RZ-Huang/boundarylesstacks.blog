import DefaultPostHeroImage from '@/assets/images/default/default-post-hero-image.jpg';
import DefaultProjectHeroImage from '@/assets/images/default/default-project-hero-image.jpg';

export const COLLECTIONS = {
  POST: 'post',
  PROJECT: 'project',
} as const;

export const TAGS = [
  'next.js',
  'react',
  'astro',
  'node.js',
  'javascript',
  'css',
  'python',
  'devops',
  'self-hosting',
] as const;

/** adjust this later */
export const CATEGORIES = [
  {
    name: 'tutorials',
    icon: 'mdi:teach',
  },
  {
    name: 'tips-and-tricks',
    icon: 'mdi:lightbulb-outline',
  },
  {
    name: 'news',
    icon: 'mdi:announcement-outline',
  },
  {
    name: 'showcases',
    icon: 'mdi:presentation',
  },
  {
    name: 'video',
    icon: 'mdi:video-outline',
  },
  {
    name: 'tools',
    icon: 'mdi:tools',
  },
  {
    name: 'resources',
    icon: 'mdi:book-open-variant-outline',
  },
] as const;

// todo: use imported images here
export const DEFAULTS_POST = {
  NO_HERO: false,
  HERO_IMAGE: DefaultPostHeroImage,
  HERO_ALT: 'Hero image',
  DRAFT: false,
  CATEGORY: CATEGORIES[0].name,
  TOC: true,
} as const;

export const DEFAULTS_PROJECT = {
  NO_HERO: false,
  HERO_IMAGE: DefaultProjectHeroImage,
  HERO_ALT: 'Hero image',
  DRAFT: false,
  CATEGORY: CATEGORIES[0].name,
  TOC: true,
} as const;
