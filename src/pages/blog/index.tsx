import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import BlinkingText from "@/components/BlinkingText";
import Paragraph from "@/components/Paragraph";
import useHead from "@/utils/useHead";
import { ArticleProps } from "@/types/article";

const data: ArticleProps[] = [
  {
    title: "Introducing React",
    date: "17-Jan-2001",
    url: "https://nextjs.org",
  },
  {
    title: "The Power of Nextjs",
    date: "17-Jan-2001",
    url: "/",
  },
  {
    title: "What is GraphQL",
    date: "17-Jan-2001",
    url: "/",
  },
];

const index = () => {
  const Head = () =>
    useHead({
      title: "Articles | Rizz-y Personal Website",
      description: "This is Rizz-y personal website.",
    });
  return (
    <>
      <Head />
      <SectionWrapper>
        <Container className="py-20">
          <div className="flex flex-col gap-14">
            <h1 className="flex text-6xl font-bold">
              Articles <BlinkingText text="." />
            </h1>
            <Paragraph>
              Articles about lifestyle, web development, music, and references.
            </Paragraph>
            {/* <OnViewAnimation headerText="2022">
              <List />
            </OnViewAnimation>
            <OnViewAnimation headerText="2021">
              <List />
            </OnViewAnimation>
            <OnViewAnimation headerText="2020">
              <List />
            </OnViewAnimation> */}
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default index;
