import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import BlinkingText from "@/components/BlinkingText";
import Paragraph from "@/components/Paragraph";
import useHead from "@/utils/useHead";
import { ProjectType } from "@/types/project";
import { Card } from "@/components/Card";
import { loadProjects } from "@/libs/project";
import OnViewAnimation from "@/components/OnViewAnimation";

const index = ({ project }: { project: ProjectType[] }) => {
  const Head = () =>
    useHead({
      title: "Projects | Rizzy Personal Website",
      description:
        "Explore some innovative projects at Rizzy's repository. Get insights into our latest work and the impact Rizzy's made.",
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

            <OnViewAnimation>
              <div className="grid grid-flow-row md:grid-cols-3 grid-row-1 gap-6">
                {project.map((val: Partial<ProjectType>) => {
                  return <Card key={val.id} props={val} headerTag="h2" />;
                })}
              </div>
            </OnViewAnimation>
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
