import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import Card from "@/components/Card";
import Paragraph from "@/components/Paragraph";
import BlinkingText from "@/components/BlinkingText";
import List from "@/components/List";
import OnViewAnimation from "@/components/OnViewAnimation";
import Logger from "@/utils/logger";
import { loadProjects, loadArticles } from "@/libs";
import { ProjectType } from "@/types/project";
import { ArticleProps, ArticleType } from "@/types/article";

export default function Home({
  project,
  article,
}: {
  project: ProjectType[];
  article: ArticleType[];
}) {
  Logger.logComponent("Home");
  return (
    <>
      <SectionWrapper>
        <Container className="py-20">
          <div className="grid grid-flow-row lg:grid-rows-1 grid-rows-2 lg:grid-cols-6 gap-14">
            {/* <div className="container w-full block object-fill">
              <Image
                className="m-auto"
                alt="This image is represent Rizz-y as 8-bit avatar"
                src={Avatar}
                width={640}
                height={70}
                layout="responsive"
              />
            </div> */}
            <div className="lg:col-start-1 lg:row-start-1 lg:col-span-4 row-span-4 flex flex-col gap-y-5">
              <h1 className="text-7xl font-bold flex flex-wrap">
                {`>_`}Hello world! <BlinkingText text="." />
              </h1>
              <Paragraph>
                I&apos;m a software developer who makes open-source projects and
                writes about code and life. On this site, you can check out all
                the technical articles I&apos;ve written, read some of my
                personal notes, or learn more about me.
              </Paragraph>
            </div>
          </div>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container className="py-20 text-cta-text">
          <div className="flex flex-col gap-y-5">
            <OnViewAnimation headerText="Articles" redirectURL="/blog">
              {article[article.length - 1].articles
                .slice(0, 5) // limit array if more than 5
                .map((val: Partial<ArticleProps>, index: number) => {
                  return (
                    <List
                      title={val.title!}
                      date={val.date!}
                      url={val.url!}
                      key={index}
                    />
                  );
                })}
            </OnViewAnimation>
          </div>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container className="py-20 text-cta-text">
          <div className="flex flex-col gap-y-5">
            <OnViewAnimation
              headerText="Projects"
              className="grid grid-flow-row sm:grid-cols-3 grid-row-1 gap-6"
              redirectURL="/projects"
            >
              {project.map((val: Partial<ProjectType>) => {
                return (
                  <Card
                    key={val.id}
                    title={val.title}
                    desc={val.desc}
                    year={val.year}
                    url={val.url}
                  />
                );
              })}
            </OnViewAnimation>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}

export async function getStaticProps() {
  const project = await loadProjects();
  const article = await loadArticles();
  return { props: { project, article } };
}
