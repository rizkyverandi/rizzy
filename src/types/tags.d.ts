import { ArticleBlogProps } from "./article";
export type TagsType = {
  id: string;
  title: string;
  date: string;
  description: string;
  keyword: string[];
  tag: string;
  imgUrl: string;
  publisher: string;
  readingTime: number;
  intro: string;
  introDesc: string;
  recommendation: {
    title: string;
    url: string;
  };
  next?: Pick<TagsType, "title" | "id" | "imgUrl"> | null;
  prev?: Pick<TagsType, "title" | "id" | "imgUrl"> | null;
};

export type MetaTags = {
  meta: TagsType;
  content: string;
};

export type FileTreeType = {
  tree: [
    {
      path: string;
    }
  ];
};
