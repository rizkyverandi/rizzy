import Link from "next/link";
import { ArticleType } from "@/types/article";

const data: ArticleType[] = [
  {
    title: "Introducing React",
    date: new Date("17-Jan-2001"),
    url: "https://nextjs.org",
  },
  {
    title: "The Power of Nextjs",
    date: new Date("17-Jan-2001"),
    url: "/",
  },
  {
    title: "What is GraphQL",
    date: new Date("17-Jan-2001"),
    url: "/",
  },
];

const List = () => {
  return (
    <ul className="flex flex-col gap-3 flex-grow">
      {data.map((value, index) => {
        return (
          <li key={index} className=" py-1 border-b-[1px] border-gray-500">
            <Link
              className="hover:text-pink-500 hover:underline flex flex-row justify-between"
              href={value.url}
              aria-label={`Article about ${
                value.title
              } published on ${value.date.toDateString()}`}
            >
              <p>{value.title}</p>
              <p>{value.date.toDateString()}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
