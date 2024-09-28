import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import { Card } from "@/components/Card";
import Paragraph from "@/components/Paragraph";
import BlinkingText from "@/components/BlinkingText";
import List from "@/components/List";
import OnViewAnimation from "@/components/OnViewAnimation";
import Logger from "@/utils/utils";
import { loadProjects } from "@/libs";
import { ProjectType } from "@/types/project";
import { Avatar } from "@/assets";
import Image from "next/image";
import { getPostMeta } from "@/libs/getPosts";
import { TagsType } from "@/types/tags";

export default function Home({
  project,
  posts,
}: {
  project: ProjectType[];
  posts: TagsType[];
}) {
  Logger.logComponent("Home");
  return (
    <>
      <SectionWrapper>
        <Container className="py-20">
          <div className="grid grid-flow-row lg:grid-rows-1 grid-rows-2 lg:grid-cols-6 md:gap-14">
            <div className="container w-full block object-fill md:hidden">
              <Image
                className="m-auto"
                alt="This image is represent Rizz-y as 8-bit avatar"
                src={Avatar}
                width={640}
                height={70}
                layout="responsive"
              />
            </div>
            <div className="lg:col-start-1 lg:row-start-1 lg:col-span-4 row-span-4 flex flex-col gap-y-5">
              <h1 className="text-6xl font-bold md:flex flex-wrap hidden">
                {`>_`}Hello World! <BlinkingText text="." />
              </h1>
              <Paragraph>
                I&apos;m a passionate web developer with a love for crafting
                elegant, responsive websites that deliver exceptional user
                experiences. But there&apos;s another rhythm in my life—music
                production. Just as I code to create seamless digital
                experiences, I produce music to create immersive soundscapes.
                Let&apos;s create something amazing together—whether it&apos;s
                in the world of code or the world of sound.
              </Paragraph>
            </div>
          </div>
        </Container>
      </SectionWrapper>
      {posts && (
        <SectionWrapper>
          <Container className="py-20 text-cta-text">
            <div className="flex flex-col gap-y-5">
              <OnViewAnimation headerText="Articles" redirectURL="/blog">
                {posts
                  .slice(0, 5) // limit array if more than 5
                  .map((val: TagsType, index: number) => {
                    return (
                      <List
                        title={val.title}
                        date={val.date}
                        url={`/blog/${val.id}`}
                        key={index}
                      />
                    );
                  })}
              </OnViewAnimation>
            </div>
          </Container>
        </SectionWrapper>
      )}
      <SectionWrapper>
        <Container className="py-20 text-cta-text">
          <div className="flex flex-col gap-y-5">
            <OnViewAnimation
              headerText="Projects"
              className="grid grid-flow-row sm:grid-cols-3 grid-row-1 gap-6"
              redirectURL="/projects"
            >
              {project.slice(0, 3).map((val: Partial<ProjectType>) => {
                return <Card key={val.id} props={val} headerTag="h3" />;
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
  const posts = await getPostMeta();
  return { props: { project, posts } };
}
