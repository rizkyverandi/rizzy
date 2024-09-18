import { FileTreeType, MetaTags, TagsType } from "@/types/tags";
import grayMatter from "gray-matter";
import remarkParse from "remark-parse"; // Markdown parser
import remark2rehype from "remark-rehype"; // Convert remark to rehype
import rehypeStringify from "rehype-stringify"; // Convert rehype to HTML
import rehypePrism from "rehype-prism-plus"; // Syntax highlighting for rehype
import rehypeSlug from "rehype-slug"; // Add IDs to headings
import rehypeAutolinkHeadings from "rehype-autolink-headings"; // Autolink headings
import rehypeHighlight from "rehype-highlight"; // Highlight code snippets
import remarkGfm from "remark-gfm"; // Adds support for GitHub-flavored Markdown (tables, strikethrough, task lists, etc.)
import { unified } from "unified";
import { HTTP_GITHUB_HEADERS } from "@/constants";
import remarkEmbedder from "@remark-embedder/core";

export const getPostMeta = async (): Promise<TagsType[] | undefined> => {
  const res = await fetch(
    "https://api.github.com/repos/rizkyverandi/blogposts/git/trees/main?recursive=1",
    {
      headers: HTTP_GITHUB_HEADERS,
    }
  );

  if (!res.ok) return undefined;

  const repoFileTree: FileTreeType = await res.json();
  const repoArrays = repoFileTree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"));

  const posts: TagsType[] = [];

  for (const file of repoArrays) {
    const post = await getPostByName(file);
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getPostByName = async (
  fileName: string
): Promise<MetaTags | undefined> => {
  const res = await fetch(
    `https://raw.githubusercontent.com/rizkyverandi/blogposts/main/${fileName}`,
    {
      headers: HTTP_GITHUB_HEADERS,
    }
  );

  if (!res.ok) return undefined;

  const rawMdx = await res.text();

  if (rawMdx === "404: Not Found") return undefined;

  const matter = grayMatter(rawMdx);

  const processedContent = await mdToHtml(matter.content);

  const id = fileName.replace(/\.mdx$/, "");

  const blogPostObj: MetaTags = {
    meta: {
      id,
      title: matter.data.title, //frontmatter.title,
      date: matter.data.date, //frontmatter.date,
      tags: matter.data.tags, //frontmatter.tags,
      description: matter.data.description || "",
    },
    content: processedContent,
  };

  return blogPostObj;
};

const YoutubeTransformer = {
  name: "YoutubeTransformer",
  // shouldTransform can also be async
  shouldTransform(url: string) {
    const { host, pathname } = new URL(url);

    return ["youtube.com", "www.youtube.com"].includes(host);
  },
  // getHTML can also be async
  getHTML(url: string) {
    const iframeUrl = url.replace("watch?v=", "/embed/");

    return `<iframe width="100%" height="500" src=${iframeUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  },
};


const mdToHtml = async (markdown: string) => {
  const file = await unified()
    .use(remarkEmbedder, {
      transformers: [YoutubeTransformer],
    })
    .use(remarkParse) // Use a Markdown parser
    .use(remarkGfm)
    .use(remark2rehype) // Convert Markdown to HTML
    .use(rehypeSlug) // Add IDs to headings
    .use(rehypeAutolinkHeadings) // Autolink headings
    .use(rehypeHighlight) // Syntax highlighting for rehype
    .use(rehypePrism) // Add Prism.js syntax highlighting
    .use(rehypeStringify) // Convert HTML to string
    .process(markdown);
  return file.toString();
};
