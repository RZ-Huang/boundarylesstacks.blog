import { CONFIG_CLIENT } from '@/config/client';

import type { Metadata } from '@/types/common';
import type { ValueUnion } from '@/types/utils';

// can't import getDefaultOpenGraphImagePath here, circular dependency

const { SITE_URL, SITE_DESCRIPTION, SITE_TITLE } = CONFIG_CLIENT;

// todo: make default og image with png logo

/** Must be url from public folder. */
export const defaultOgImage = `${SITE_URL}/images/default/default-open-graph-image.jpg`;

export const titleSeparator = '-';

export const DEFAULT_METADATA: Required<Metadata> = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  image: defaultOgImage,
} as const;

/**
 * Metadata for all pages that aren't defined in markdown.
 * Add it here for every new page.
 * Reused for ogImage api route.
 */
export const PAGE_METADATA = {
  '/lists/home': {
    title: 'Home',
  },
  // list pages
  // must have 'list' prefix to omit type arg
  'lists/post': {
    title: 'Post',
    description: 'Post',
  },
  'lists/post/tags': {
    title: 'Tags',
  },
  'lists/post/tags/tag': {
    title: 'Tag',
  },
  // 'src/pages/post/tags/[tag]/[...page].astro' // dynamic tag param
  'lists/post/explore': {
    title: 'Explore',
  },
  'lists/post/categories': {
    title: 'Categories',
  },
  'lists/post/categories/category': {
    title: 'Category',
  },
  // src/pages/post/categories/[category]/[...page].astro
  'lists/projects': {
    title: 'Projects',
    description: 'Projects',
  },
  'lists/links': {
    title: 'Links',
  },
} as const;

export type PageMetadataKey = keyof typeof PAGE_METADATA;

export const OG_IMAGE_PREFIXES = {
  OG_HOME: 'home',
  OG_POST: 'post',
  OG_PROJECTS: 'projects',
  OG_PAGES: 'pages',
  OG_LISTS: 'lists',
} as const;

export type OgImagePrefixType = ValueUnion<typeof OG_IMAGE_PREFIXES>;
