import { PLAUSIBLE_DOMAIN, PLAUSIBLE_SCRIPT_URL, SITE_URL } from 'astro:env/client';

import { configClientSchema } from '@/schemas/config';
import { validateData } from '@/utils/validation';

import type { ConfigClientType } from '@/types/config';

const configClientData: ConfigClientType = {
  /** all urls without '/' */
  SITE_URL,
  SITE_TITLE: 'Boundarylesstacks',
  SITE_DESCRIPTION: 'I am RZ, web frontend developer',
  PLAUSIBLE_SCRIPT_URL,
  PLAUSIBLE_DOMAIN,
  PAGE_SIZE_POST_CARD: 10,
  PAGE_SIZE_POST_CARD_SMALL: 6,
  MORE_POSTS_COUNT: 3,
  DEFAULT_MODE: 'light',
  DEFAULT_THEME: 'default-light',
  AUTHOR_NAME: 'RZ Huang',
  AUTHOR_EMAIL: '94rzhuang@email.com',
  AUTHOR_GITHUB: 'https://github.com/rz-huang',
  AUTHOR_LINKEDIN: 'https://www.linkedin.com/in/rz-huang',
  REPO_URL: 'https://github.com/RZ-Huang/boundarylesstacks.blog',
};

export const CONFIG_CLIENT = validateData(configClientData, configClientSchema);
