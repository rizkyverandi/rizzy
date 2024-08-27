export type TagsType = {
  id: string;
  title: string;
  date: string;
  tags: string[];
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
