import type { APIContext } from 'astro';
import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context: APIContext) {
  return rss({
    title: 'alexbrufsky',
    description: 'This is an attempt to visit every work-friendly coffee shop in NYC.',
    site: context.site!,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')) as any,
    customData: `<language>en-us</language>`,
  });
}
