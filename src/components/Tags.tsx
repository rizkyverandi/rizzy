const Tags = ({ tags }: { tags: string }) => {
  return (
    <a
      className="p-2 text-sm bg-card rounded-2xl border border-gray-500 "
      href={`/tags/${tags}`}
    >
      {tags}
    </a>
  );
};

export default Tags;
