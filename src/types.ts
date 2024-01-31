import type { CollectionEntry } from "astro:content";

export type IMarkdownFrontmatter  = CollectionEntry<'posts'>['data'];

export interface ISEO {
	title?: string;
	description?: string;
	image?: string;
	type?: 'website' | 'article';
	article?: IMarkdownFrontmatter;
}
