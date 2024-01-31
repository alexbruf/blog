export interface IMarkdownFrontmatter {
	title: string;
	pubDate: string;
	description?: string;
	author?: string;
	image?: {url: string, alt?: string};
	tags: string[];
	location?: string[];
}


export interface ISEO {
	title?: string;
	description?: string;
	image?: string;
	type?: 'website' | 'article';
	article?: IMarkdownFrontmatter;
}
