import Head from "next/head";
//import React, { useState, useEffect } from "react";

type HeadProps = {
  title: string;
  description: string;
  author?: string;
  imageUrl?: string;
  slug?: string;
  keywords?: string[];
  robots?: "all" | "noindex" | "nofollow" | "noarchive" | undefined;
  type?: "website" | "article" | "profile" | undefined;
};

const useHead = (props: HeadProps) => {
  const fullUrl = "https://rizzy-gamma.vercel.app/";
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords?.join(", ")}></meta>
      {props.author && <meta name="author" content={props.author}></meta>}
      {props.slug && (
        <link rel="canonical" href={`${fullUrl}${props.slug}`}></link>
      )}
      {props.robots && <meta name="robots" content={props.robots}></meta>}

      {/*================ Open graph metatags ================*/}
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      {props.imageUrl && <meta property="og:image" content={props.imageUrl} />}
      {props.slug && (
        <meta property="og:url" content={`${fullUrl}${props.slug}`} />
      )}
      {props.type && <meta property="og:type" content={props.type}></meta>}
      <meta property="og:site_name" content="Site Name"></meta>

      {/*================ Twitter metatags ================*/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      {props.imageUrl && <meta name="twitter:image" content={props.imageUrl} />}
      <meta name="twitter:site" content="@site_handle"></meta>
      <meta name="twitter:creator" content="@creator_handle"></meta>

      {/* ================ LinkedIn Meta Tags ================ */}
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      {props.imageUrl && <meta property="og:image" content={props.imageUrl} />}
      <meta property="og:url" content={`${fullUrl}${props.slug}`} />
      <meta property="og:type" content={props.type || "article"} />
      <meta property="og:locale" content="en_US" />

      {/* ================ Telegram Meta Tags ================ */}
      <meta name="telegram:title" content={props.title} />
      <meta name="telegram:description" content={props.description} />
      {props.imageUrl && (
        <meta name="telegram:image" content={props.imageUrl} />
      )}
      <meta name="telegram:card" content="summary_large_image" />

      {/* ================ Discord Meta Tags ================ */}
      <meta name="theme-color" content="#7289da" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      {props.imageUrl && <meta property="og:image" content={props.imageUrl} />}
      <meta property="og:type" content={props.type || "website"} />
      {props.slug && (
        <meta property="og:url" content={`${fullUrl}${props.slug}`} />
      )}

      {/* ================ Instagram Meta Tags (uses OpenGraph) ================ */}
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      {props.imageUrl && <meta property="og:image" content={props.imageUrl} />}
      <meta property="og:url" content={`${fullUrl}${props.slug}`} />
      <meta property="og:type" content="instapp:photo" />
    </Head>
  );
};

export default useHead;
