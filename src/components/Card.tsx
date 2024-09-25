import { ProjectType } from "@/types/project";
import { FaExternalLinkAlt } from "react-icons/fa";
import Utils from "@/utils/utils";
import { memo } from "react";
import { ArticleBlogProps } from "@/types/article";
import Image from "next/image";
import Paragraph from "./Paragraph";
import Tags from "./Tags";
import Link from "next/link";

const Card = ({
  props,
  headerTag,
}: {
  props: Partial<ProjectType>;
  headerTag: "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  Utils.logComponent("Card");

  const HeaderTag = headerTag; // Dynamic header tag

  return (
    <figure className="border border-gray-500 rounded-3xl bg-card p-6 flex flex-col gap-2 justify-between">
      <div>
        <time className="text-xs">{props.year}</time>
        <HeaderTag className="text-base">{props.title}</HeaderTag>
        <figcaption className="text-copy-secondary text-sm">
          {props.desc}
        </figcaption>
      </div>
      <div className="flex flex-row gap-2 pt-4">
        {props.url && (
          <a
            className="text-copy-secondary px-4 py-2 bg-card rounded-xl border border-gray-500 flex items-center"
            href={`${props.url}`}
            target="_blank"
            aria-label={`Find out more about ${props.title} project.`}
            rel="norefferer"
          >
            <FaExternalLinkAlt size={12} />
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

export const BlogCard = ({
  props,
  headerTag,
}: {
  props: Partial<ArticleBlogProps>;
  headerTag: "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  const HeaderTag = headerTag; // Dynamic header tag
  return (
    <figure className=" rounded-3xl flex flex-col gap-y-2 justify-between">
      <div className="flex flex-col gap-1">
        <Image
          src={"https://fastly.picsum.photos/id/496/500/500.jpg?hmac=KxPC_ARSFICclZtKZwZVr9g9VMXx9xE-fl0Oj-PE4sg"}
          alt="beaches pictures"
          width={450}
          height={300}
          style={{ width: "100%", height: "250px" }}
          className="rounded-xl flex-shrink-0 mb-3 object-fill"
        />
        <span className="flex gap-x-2 items-center">
          <Tags tags={"Technology"} /> <span className="text-cta-text">•</span>
          <time className="text-sm text-copy-secondary font-medium">
            {new Date(props.date!).toDateString().split(" ").slice(1).join(" ")}
          </time>
        </span>
        <Link href={`/blog/#}`} prefetch={false}>
        <HeaderTag className="md:text-xl font-semibold text-base line-clamp-2 hover:underline">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eveniet
          aut fuga sapiente magnam quo veritatis exercitationem obcaecati rerum,
          vitae corrupti mollitia vel quasi odio architecto, ex officiis ab
          accusantium.
        </HeaderTag>
        </Link>
        <figcaption className="text-copy-secondary text-sm line-clamp-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum
          eveniet, aliquid harum sunt dolore magni deserunt nesciunt
          necessitatibus nam dolorem. Aliquid reiciendis excepturi illum nobis
          ipsam. Et, repellendus necessitatibus!
        </figcaption>
      </div>
      <div className="flex flex-row gap-2 pt-4 items-center text-copy-secondary">
        <Link
          href={`/author/test`}
          prefetch={false}
          className="text-xs hover:underline flex gap-x-2 items-center"
        >
          <Image
            src={"https://picsum.photos/500/500"}
            alt="beaches pictures"
            width={0}
            height={0}
            style={{ width: "20px", height: "20px", objectFit: "cover" }}
            className="rounded-full flex-shrink-0"
          />
          Auhtor
        </Link>
        •<p className="text-xs">5 min read</p>
      </div>
    </figure>
  );
};

export default memo(Card);
