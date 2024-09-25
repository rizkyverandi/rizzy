import { TagsType } from "@/types/tags";

const Intro = ({intro, introDesc, recommendation} : Partial<TagsType>) => {
  return (
    <div className="intro flex gap-3 flex-col">
      <em>
        <strong className="font-bold">{intro}</strong>
      </em>
      <p>{introDesc}</p>

      <strong className="text-md">
        Baca Juga:
        <em>
          <span>&nbsp;</span>
          <a
            className="hover-link underline"
            href={recommendation?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {recommendation?.title}
          </a>
        </em>
      </strong>
    </div>
  );
};

export default Intro;
