import { ProjectType } from "@/types/project";
import { FaExternalLinkAlt } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Utils from "@/utils/utils";
import { memo } from "react";
import Image from "next/image";
import Tags from "./Tags";
import Link from "next/link";
import { TagsType } from "@/types/tags";

const MemoCard = ({
  props,
  headerTag,
}: {
  props: Partial<ProjectType>;
  headerTag: "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  Utils.logComponent("Card");

  const HeaderTag = `${headerTag}` as keyof JSX.IntrinsicElements; // Dynamically setting header tag

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

const BlogCard = ({
  id,
  title,
  description,
  date,
  tag,
  imgUrl,
  publisher,
  readingTime,
  headerTag,
}: Partial<TagsType> & { headerTag: "h2" | "h3" | "h4" | "h5" | "h6" }) => {
  const HeaderTag = `${headerTag}` as keyof JSX.IntrinsicElements; // Dynamically setting header tag
  return (
    <figure className=" rounded-3xl flex flex-col gap-y-2 justify-between">
      <div className="flex flex-col gap-1">
        <Image
          src={imgUrl || ""}
          alt={title || ""}
          width={450}
          height={300}
          style={{ width: "100%", height: "250px" }}
          className="rounded-xl flex-shrink-0 mb-3 object-fill"
        />
        <span className="flex gap-x-2 items-center">
          <Tags tags={tag || "None"} /> <span className="text-cta-text">•</span>
          <time className="text-sm text-copy-secondary font-medium">
            {new Date(date!).toDateString().split(" ").slice(1).join(" ")}
          </time>
        </span>
        <Link href={`/blog/${id}`} prefetch={false}>
          <HeaderTag className="md:text-xl font-semibold text-base line-clamp-2 hover:underline">
            {title || "Untitled"}
          </HeaderTag>
        </Link>
        <figcaption className="text-copy-secondary text-sm line-clamp-3">
          {description}
        </figcaption>
      </div>
      <div className="flex flex-row gap-2 pt-4 items-center text-copy-secondary">
        <Link
          href={`/author/${publisher?.replace(" ", "-").toLowerCase()}`} // TODO : FIX THIS LINK TO DYNAMIC //
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
          {publisher}
        </Link>
        •<p className="text-xs">{readingTime} min read</p>
      </div>
    </figure>
  );
};

const RelatedCard = ({
  imgUrl,
  title,
  id,
  arrowDirection = "left",
}: {
  imgUrl: string;
  title: string;
  id: string;
  arrowDirection: "left" | "right";
}) => {
  return (
    <figure className="flex flex-col gap-y-2 justify-between max-h-[200px]">
      <div className="flex flex-row gap-2">
        <Image
          src={imgUrl || ""}
          alt={title || ""}
          width={100}
          height={80}
          className="rounded-xl flex-shrink-0 mb-3 object-cover"
        />
        <figcaption className="flex flex-col gap-3 mt-3 mb-2">
          <Tags tags={"None"} className="md:text-sm text-[10px] leading-3" />
          <Link href={`/blog/${id}`} prefetch={false}>
            <h3 className="md:text-base text-xs max-h-max min-w-min font-semibold hover:underline">
              <span className="line-clamp-3 break-words">
                {title || "Untitled"}
              </span>
              {/*TODO: add tag and delete the additional text after its done*/}
            </h3>
          </Link>
        </figcaption>
      </div>

      <Link
        href={`/blog/${id}`}
        className={`flex gap-x-2 hover:underline underline-offset-4 text-copy-secondary items-center ${
          arrowDirection === "right" ? "flex justify-end" : ""
        }`}
      >
        {arrowDirection === "right" && (
          <>
            Next
            <HiChevronRight size={20} />
          </>
        )}
        {arrowDirection === "left" && (
          <>
            <HiChevronLeft size={20} />
            Previous
          </>
        )}
      </Link>
    </figure>
  );
};

const Card = memo(MemoCard);

export { Card, BlogCard, RelatedCard };
