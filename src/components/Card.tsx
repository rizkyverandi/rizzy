import { CardType } from "@/types/card";
import { FaExternalLinkAlt } from "react-icons/fa";
const Card = ({ title, desc, url, articleUrl, demoUrl, year }: CardType) => {
  return (
    <figure className="border border-gray-500 rounded-3xl bg-card p-6 flex flex-col gap-2">
      <time>{year}</time>
      <h3 className="text-lg">{title}</h3>
      <figcaption className="text-copy-secondary">{desc}</figcaption>
      <div className="flex flex-row gap-2 ">
        {url && (
          <a
            className="text-copy-secondary px-4 py-2 bg-card rounded-xl border border-gray-500 flex items-center"
            href={`${url}`}
            target="_blank"
            rel="norefferer"
          >
            <FaExternalLinkAlt size={13}/>
          </a>
        )}
        {/* {articleUrl && (
          <a
            href={`${articleUrl}`}
            target="_blank"
            rel="norefferer"
            className="px-3 py-1 bg-card rounded-xl border border-gray-500 "
          >
            Article
          </a>
        )} */}
      </div>
    </figure>
  );
};

export default Card;
