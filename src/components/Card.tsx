import { ProjectType } from "@/types/project";
import { FaExternalLinkAlt } from "react-icons/fa";
import Utils from "@/utils/utils";
import { memo } from "react";

const Card = ({
  props,
  headerTag,
}: {
  props: Partial<ProjectType>;
  headerTag: "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  Utils.logComponent("Card");

  const TagName = headerTag; // Dynamic header tag

  return (
    <figure className="border border-gray-500 rounded-3xl bg-card p-6 flex flex-col gap-2 justify-between">
      <div>
        <time className="text-xs">{props.year}</time>
        <TagName className="text-base">{props.title}</TagName>
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

export default memo(Card);
