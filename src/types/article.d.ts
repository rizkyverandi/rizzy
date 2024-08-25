export type ArticleType = {
  year: string;
  articles: ArticleProps[];
};

export type ArticleProps = {
  title: string;
  date: string;
  url: string;
};
