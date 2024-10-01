import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import BlinkingText from "@/components/BlinkingText";
import Paragraph from "@/components/Paragraph";
import { getPostMeta } from "@/libs/getPosts";
import { TagsType } from "@/types/tags";
import OnViewAnimation from "@/components/OnViewAnimation";
import { BlogCard } from "@/components/Card";
import Pagination from "@/components/Pagination";
import { useState } from "react";
//TODO: Add next/head for seo tags 

const index = ({ posts }: { posts: TagsType[] }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  let currentPosts;

  if (posts != null) {
    currentPosts = posts.slice(firstPostIndex, lastPostIndex);
  }

  return (
    <>
      <SectionWrapper>
        <Container className="py-20">
          <div className="flex flex-col gap-y-5">
            <h1 className="flex text-6xl font-bold">
              Blogs <BlinkingText text="." />
            </h1>
            <Paragraph>
              Articles about foods, travel, web development, music, and more.
            </Paragraph>
            <OnViewAnimation>
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 md:gap-y-6 md:space-y-0 space-y-6">
                {currentPosts &&
                  currentPosts.map((data, index) => {
                    return (
                      <BlogCard
                        title={data.title}
                        date={data.date}
                        id={data.id}
                        description={data.description}
                        tag={data.tag}
                        imgUrl={data.imgUrl}
                        publisher={data.publisher}
                        readingTime={data.readingTime}
                        key={index}
                        headerTag="h2"
                      />
                    );
                  })}
              </div>
              <Pagination
                totalPages={Math.ceil(posts.length / postsPerPage)}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
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
