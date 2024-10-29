import { getPostByName, getPostMeta } from "@/libs/getPosts";
import React from "react";
import { MetaTags, TagsType } from "@/types/tags";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import "highlight.js/styles/github-dark.css";
import "prismjs";
import "prismjs/components/prism-typescript"; // Import TypeScript language definition
import "prismjs/themes/prism-tomorrow.css";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import TableOfContent from "@/components/TableOfContent";
import Intro from "@/components/Intro";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { RelatedCard } from "@/components/Card";
import { DOMAIN } from "@/constants";
import CustomHead from "@/utils/CustomHead";

type Props = {
  params: {
    slug: string;
  };
};

const index = ({ post, meta }: { post: MetaTags; meta: TagsType[] }) => {
  const linkedArticles = meta.find(
    (meta: TagsType) => meta.id === post.meta.id
  );

  if (!post) {
    return <div>Loading...</div>; // Show a loading state while fetching
  }
  return (
    <>
      <CustomHead
        {...{
          title: post.meta.title,
          description: post.meta.description,
          imageUrl: post.meta.imgUrl,
          slug: post.meta.id,
          keywords: post.meta.keywords,
          type: "article",
          author: post.meta.publisher,
          robots: "follow, index",
          locale: "id_ID",
          canonicalUrl: `${DOMAIN}/blog/${post.meta.id}`,
        }}
      />
      <article>
        <SectionWrapper>
          <Breadcrumb />
          <Container className="space-y-5">
            <header className="relative h-[250px] w-[100%] rounded-[12px] md:h-[350px]">
              <section className=" absolute bottom-0 z-[10] flex w-[100%] flex-col gap-[5px] p-[22px] text-neutral-0 md:w-[75%] md:gap-[10px] md:p-[25px]">
                <section className="text-[14px] leading-[20px] flex gap-x-2 items-center text-[rgb(187,187,187)]">
                  <Link
                    className={`text-white text-sm underline-offset-4 hover:underline font-semibold`}
                    href={`/tags/${post.meta.tag}`}
                  >
                    {post.meta.tag}
                  </Link>
                  <span className="text-white">•</span>
                  <time className="text-sm font-semibold text-white">
                    {new Date(post.meta.date)
                      .toDateString()
                      .split(" ")
                      .slice(1)
                      .join(" ")}
                  </time>
                </section>
                <h1 className="md:text-xl md:leading-[38px] font-semibold text-base line-clamp-2 text-white">
                  {post.meta.title}
                </h1>
                <section className="text-[14px] leading-[20px]">
                  <div className="flex flex-row gap-2 pt-4 items-center text-white">
                    {/* <Link
                      href={`/author/test`}
                      prefetch={false}
                      className="text-xs hover:underline flex gap-x-2 items-center"
                    > */}
                    <div className="text-xs flex gap-x-2 items-center">
                      <Image
                        src={"https://picsum.photos/500/500"}
                        alt={`Illustratuion that represent this ${post.meta.title} article.`}
                        width={0}
                        height={0}
                        style={{
                          width: "20px",
                          height: "20px",
                          objectFit: "cover",
                        }}
                        className="rounded-full flex-shrink-0 shadow-md shadow-cta-text-secondary/25"
                      />
                      {post.meta.publisher}
                    </div>
                    {/* </Link> */}
                    <span>•</span>
                    <p className="text-xs m-0">
                      {post.meta.readingTime} min read
                    </p>
                  </div>
                </section>
              </section>
              <Image
                src={post.meta.imgUrl}
                alt={`Picture that represent this ${post.meta.title} article.`}
                width={400}
                height={250}
                className="h-[250px] w-[100%] rounded-[12px] object-cover md:h-[350px] aspect-video"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden rounded-[12px] bg-gradient-to-t from-[rgba(24,24,24)]/[0.7] to-transparent"></div>
            </header>
            <section className="flex flex-col gap-5">
              <Intro
                intro={post.meta.intro}
                introDesc={post.meta.introDesc}
                recommendation={post.meta.recommendation}
              />
              {post.meta.tableContent.length > 0 && (
                <TableOfContent data={post.meta.tableContent} />
              )}
            </section>
            <section
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="markdown-content"
            ></section>
            <section className="flex flex-col gap-3">
              <div>
                <strong className="text-md">Share this article :</strong>
              </div>
              <div className="flex gap-3">
                <FacebookShareButton
                  url={`${DOMAIN}/blog/${post.meta.id}`}
                  children={<FacebookIcon size={32} round />}
                />
                <TwitterShareButton
                  url={`${DOMAIN}/blog/${post.meta.id}`}
                  children={<TwitterIcon size={32} round />}
                />
                <WhatsappShareButton
                  url={`${DOMAIN}/blog/${post.meta.id}`}
                  children={<WhatsappIcon size={32} round />}
                />
                <TelegramShareButton
                  url={`${DOMAIN}/blog/${post.meta.id}`}
                  children={<TelegramIcon size={32} round />}
                />
                <LinkedinShareButton
                  url={`${DOMAIN}/blog/${post.meta.id}`}
                  children={<LinkedinIcon size={32} round />}
                />
              </div>
            </section>
            <section className="grid grid-cols-2 gap-x-3 md:pt-8 pt-4">
              {!linkedArticles?.prev && <div></div>}
              {linkedArticles?.prev && (
                <RelatedCard
                  tag={linkedArticles.tag}
                  key={linkedArticles?.prev?.id}
                  imgUrl={linkedArticles?.prev?.imgUrl}
                  title={linkedArticles?.prev?.title}
                  id={linkedArticles?.prev?.id}
                  arrowDirection="left"
                />
              )}
              {!linkedArticles?.next && <div></div>}
              {linkedArticles?.next && (
                <RelatedCard
                  tag={linkedArticles.tag}
                  key={linkedArticles?.next?.id}
                  imgUrl={linkedArticles?.next?.imgUrl}
                  title={linkedArticles?.next?.title}
                  id={linkedArticles?.next?.id}
                  arrowDirection="right"
                />
              )}
            </section>
          </Container>
        </SectionWrapper>
      </article>
    </>
  );
};

export async function getStaticProps({ params: { slug } }: Props) {
  const post = await getPostByName(`${slug}.mdx`);
  const meta = await getPostMeta();

  if (!post || !meta) {
    return {
      notFound: true, // Return a 404 page if the post is not found
    };
  }

  return { props: { post, meta } };
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
