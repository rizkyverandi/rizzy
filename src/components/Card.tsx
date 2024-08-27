import { ProjectType } from "@/types/project";
import { FaExternalLinkAlt } from "react-icons/fa";
import Utils from "@/utils/utils";
import { memo } from "react";

const Card = (props: Partial<ProjectType>) => {
  Utils.logComponent("Card");

  return (
    <figure className="border border-gray-500 rounded-3xl bg-card p-6 flex flex-col gap-2 justify-between">
      <div>
        <time className="text-xs">{props.year}</time>
        <h3 className="text-base">{props.title}</h3>
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
