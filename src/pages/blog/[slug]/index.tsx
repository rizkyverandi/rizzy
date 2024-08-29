import { getPostByName, getPostMeta } from "@/libs/getPosts";
import React from "react";
import { MetaTags, TagsType } from "@/types/tags";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import "highlight.js/styles/github-dark.css";
import "prismjs";
import "prismjs/components/prism-typescript"; // Import TypeScript language definition
import "prismjs/themes/prism-tomorrow.css";
import useHead from "@/utils/useHead";
import Tags from "@/components/Tags";

type Props = {
  params: {
    slug: string;
  };
};

const index = ({ post }: { post: MetaTags }) => {
  const Head = () =>
    useHead({
      title: `${post.meta.title} | Rizz-y Personal Website`,
      description: post.meta.description,
      keywords: post.meta.tags,
      author: "Rizky Verandi",
      slug: post.meta.id,
    });

  return (
    <>
      <Head />
      <article>
        <SectionWrapper>
          <Container className="markdown-content">
            <h1>{post.meta.title}</h1>
            <p>{new Date(post.meta.date).toDateString()}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            <div className="flex flex-row gap-x-4">
              {post.meta.tags.map((tag, index) => {
                return <Tags key={index} tags={tag} />;
              })}
            </div>
          </Container>
        </SectionWrapper>
      </article>
    </>
  );
};

export async function getStaticProps({ params: { slug } }: Props) {
  const post = await getPostByName(`${slug}.mdx`);

  if (!post) {
    return {
      notFound: true, // Return a 404 page if the post is not found
    };
  }

  return { props: { post } };
}

export const getStaticPaths = async () => {
  const slugs = await getPostMeta(); // Fetch or generate a list of slugs

  if (!slugs) {
    return {
      notFound: true, // Return a 404 page if the post is not found
    };
  }

  return {
    paths: slugs.map((slug: TagsType) => ({
      params: { slug: slug.id },
    })),
    fallback: false, // Set to 'blocking' or 'true' if you want to generate pages on-demand
  };
};

export default index;
