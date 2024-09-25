export type ArticleType = {
  year: string;
  articles: ArticleProps[];
};

export type ArticleProps = {
  title: string;
  date: string;
  url: string;
};

export interface ArticleBlogProps extends ArticleProps {
  tag: string;
  publisher: string;
  readingTime: number;
  publisherImgUrl: string;
  desc: string;
}
