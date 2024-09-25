import Link from "next/link";

const Tags = ({ tags, className }: { tags: string, className?: string }) => {
  return (
    <Link
      className={`${className} text-copy-secondary text-sm underline-offset-4 hover:underline font-medium`}
      href={`/tags/${tags}`}
    >
      {tags}
    </Link>
  );
};

export default Tags;
