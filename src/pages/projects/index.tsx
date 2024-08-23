import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import BlinkingText from "@/components/BlinkingText";
import Paragraph from "@/components/Paragraph";
import useHead from "@/utils/useHead";
import { ProjectType } from "@/types/project";
import Card from "@/components/Card";
import { loadProjects } from "@/libs/project";

const index = ({ project }: { project: ProjectType[] }) => {
  const Head = () =>
    useHead({
      title: "Projects | Rizz-y Personal Website",
      description: "This is Rizz-y personal website.",
    });
  return (
    <>
      <Head />
      <SectionWrapper>
        <Container className="py-20 text-cta-text">
          <div className="flex flex-col gap-y-5">
            <h1 className="flex text-6xl font-bold">
              Projects
              <BlinkingText text="." />
            </h1>
            <Paragraph>
              Some projects that I have completed and am currently working on.
            </Paragraph>
            <div className="grid grid-flow-row md:grid-cols-3 grid-row-1 gap-6">
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
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
};

export async function getStaticProps() {
  const project = await loadProjects();
  return { props: { project } };
}

export default index;
