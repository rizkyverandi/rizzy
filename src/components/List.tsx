import Link from "next/link";
import { ArticleProps } from "@/types/article";

const List = ({ title, date, url }: ArticleProps, key: number) => {
  return (
    <ul className="flex flex-col gap-3 flex-grow">
      <li key={key} className="py-1 border-b-[1px] border-gray-500">
        <Link
          className="hover:text-pink-500 hover:underline flex flex-row justify-between"
          href={url}
          aria-label={`Article about ${title} published on ${date}`}
        >
          <p>{title}</p>
          <p>{date}</p>
        </Link>
      </li>
    </ul>
  );
};

export default List;
