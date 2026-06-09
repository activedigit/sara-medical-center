import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE } from '~/config/site';

export async function GET(context: APIContext) {
  const posts = (await getCollection('news', (p) => p.data.lang === 'he' && !p.data.draft))
    .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
  return rss({
    title: SITE.name.he,
    description: 'חדשות והודעות מרכז שארה הרפואי',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.excerpt,
      link: `${import.meta.env.BASE_URL}he/news/${post.slug.replace(/^he\//, '')}/`,
    })),
    customData: '<language>he</language>',
  });
}
