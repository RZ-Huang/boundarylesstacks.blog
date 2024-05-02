import { createMarkdownProcessor } from '@astrojs/markdown-remark';

import { Feed } from 'feed';

import Config from '../config';
import { getAllPosts } from './post';

import type { Item } from 'feed';

const { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } = Config;

const author = {
  name: 'Paul Armstrong',
  email: 'me@paularmstrong.dev',
  link: `${SITE_URL}/about`,
};
const copyright = (date: Date) =>
  `&copy;${date.getFullYear()} Paul Armstrong. All rights reserved.`;

export const feed = new Feed({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  id: SITE_URL,
  link: SITE_URL,
  language: 'en',
  image: `${SITE_URL}/img/favicon-32x32.png`,
  favicon: `${SITE_URL}/favicon.ico`,
  copyright: copyright(new Date()),
  updated: new Date(),
  feedLinks: {
    json: `${SITE_URL}/feed.json`,
    rss: `${SITE_URL}/feed.xml`,
  },
  author,
});

const sortedRawPosts = await getAllPosts();

const { render: renderMarkdown } = await createMarkdownProcessor({});

for (const post of sortedRawPosts) {
  const match = post.slug.match(/^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})-(?<slug>.+)/);
  if (!match || !post.slug || post.data.draft) {
    continue;
  }
  const slug = Object.values(match.groups!).join('/');

  const url = `${SITE_URL}/blog/${slug}/`;
  const { code: description } = await renderMarkdown(
    `${post.data.description || ''}\n\n[Continue reading…](${url})`
  );
  const { code: content } = await renderMarkdown(post.body);

  const item: Item = {
    title: post.data.title,
    description,
    id: url,
    link: url,
    date: post.data.pubDate,
    published: post.data.pubDate,
    author: [author],
    copyright: copyright(post.data.pubDate),
    content,
  };
  if (post.data.heroImage?.src) {
    item.image = `${SITE_URL}${post.data.heroImage.src}`;
  }

  feed.addItem(item);
}
