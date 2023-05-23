import type Tag from "./Tag";

type MDPost = {
  frontmatter: {
    // content
    title: string;
    description: string;
    hero: string;
    pubDate: string;
    tags: Tag[];

    // credits
    authors: string[];
    editors: string;
    transcribers: string;
  };
  url: string;
}

export default MDPost;