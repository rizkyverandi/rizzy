import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import BlinkingText from "@/components/BlinkingText";
import Paragraph from "@/components/Paragraph";
import useHead from "@/utils/useHead";
import List from "@/components/List";
import { getPostMeta } from "@/libs/getPosts";
import { TagsType } from "@/types/tags";

const index = ({ posts }: { posts: TagsType[] }) => {
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
          <div className="flex flex-col gap-y-5">
            <h1 className="flex text-6xl font-bold">
              Articles <BlinkingText text="." />
            </h1>
            <Paragraph>
              Articles about lifestyle, web development, music, and references.
            </Paragraph>
            {posts.map((data, index) => {
              return (
                <List
                  title={data.title}
                  date={data.date}
                  url={data.id}
                  key={index}
                />
              );
            })}
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
};

export async function getStaticProps() {
  const posts = await getPostMeta();
  return { props: { posts } };
}

export default index;
