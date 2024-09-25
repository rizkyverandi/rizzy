import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import BlinkingText from "@/components/BlinkingText";
import Paragraph from "@/components/Paragraph";
import useHead from "@/utils/useHead";
import List from "@/components/List";
import { getPostMeta } from "@/libs/getPosts";
import { TagsType } from "@/types/tags";
import OnViewAnimation from "@/components/OnViewAnimation";
import { BlogCard } from "@/components/Card";

const index = ({ posts }: { posts: TagsType[] }) => {
  const Head = () =>
    useHead({
      title: "Blogs | Rizzy Personal Website",
      description:
        "Stay updated with the latest insights, lifestyle, web development, music, and references through Rizzy blog. Dive into expert articles, how-tos, and thought that help you stay ahead. Join the conversation today.",
    });
  return (
    <>
      <Head />
      <SectionWrapper>
        <Container className="py-20">
          <div className="flex flex-col gap-y-5">
            <h1 className="flex text-6xl font-bold">
              Blogs <BlinkingText text="." />
            </h1>
            <Paragraph>
              Articles about lifestyle, web development, music, and references.
            </Paragraph>
            <OnViewAnimation>
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 md:gap-y-6 md:space-y-0 space-y-6">
                <BlogCard props={posts[0]} headerTag="h2" />
                <BlogCard props={posts[0]} headerTag="h2" />
                <BlogCard props={posts[0]} headerTag="h2" />
                <BlogCard props={posts[0]} headerTag="h2" />
                <BlogCard props={posts[0]} headerTag="h2" />
                <BlogCard props={posts[0]} headerTag="h2" />
              </div>
            </OnViewAnimation>
            <OnViewAnimation>
              {posts.map((data, index) => {
                return (
                  <List
                    title={data.title}
                    date={data.date}
                    url={`/blog/${data.id}`}
                    key={index}
                  />
                );
              })}
            </OnViewAnimation>
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
