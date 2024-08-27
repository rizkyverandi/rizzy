import { getPostByName, getPostMeta } from "@/libs/getPosts";
import React from "react";
import { MetaTags, TagsType } from "@/types/tags";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import "highlight.js/styles/github-dark.css";
import "prismjs";
import "prismjs/components/prism-typescript"; // Import TypeScript language definition
import "prismjs/themes/prism-tomorrow.css";

type Props = {
  params: {
    slug: string;
  };
};

const index = ({ post }: { post: MetaTags }) => {
  return (
    <article>
      <SectionWrapper>
        <Container className="md:py-20 markdown-content">
          <h1>{post.meta.title}</h1>
          <p>{new Date(post.meta.date).toDateString()}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </Container>
      </SectionWrapper>
    </article>
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
