import Link from "next/link";

type Article = {
  title: string;
  date: Date;
};

const data: Article[] = [
  {
    title: "Introducing React",
    date: new Date("17-Jan-2001"),
  },
  {
    title: "The Power of Nextjs",
    date: new Date("17-Jan-2001"),
  },
  {
    title: "What is GraphQL",
    date: new Date("17-Jan-2001"),
  },
];

const List = () => {
  return (
    <ul className="flex flex-col gap-3 flex-grow">
      {data.map((value, index) => {
        return (
          <li key={index} className="py-1 border-b-[1px] border-gray-500">
            <Link className="flex flex-row justify-between" href={"/"} aria-label={`Article about ${value.title} published on ${value.date.toDateString()}`}>
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
