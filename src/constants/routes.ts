/**
 * Folders - all urls with both leading and trailing '/'.
 * Files - without trailing '/'.
 */

export const ROUTES = {
  HOME: '/',
  POST: '/post/',
  PROJECTS: '/projects/',
  ABOUT: '/about/',
  RESUME: '/resume/',
  TAGS: '/post/tags/',
  CATEGORIES: '/post/categories/',
  EXPLORE: '/post/explore/',
  EXPLORE_TAGS: '/post/explore/tags/',
  EXPLORE_CATEGORIES: '/post/explore/categories/',
  DESIGN: '/design/',
  GALLERY: '/gallery/',
  LINKS: '/links/',
  /** maybe in future */
  DRAFTS: '/drafts/',
  _404: '/404/',
  _500: '/500/',
  STATIC: {
    IMAGES: '/images/',
    FAVICONS: '/images/favicons/',
    /** generated at build-time only */
    SITEMAP: '/sitemap-index.xml',
  },
  API: {
    OG_IMAGES: '/api/open-graph/',
    FEED_JSON: '/api/feed.json',
    FEED_RSS: '/api/feed.xml',
  },
} as const;
