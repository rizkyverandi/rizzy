import Head from "next/head";

type HeadProps = {
  title: string;
  description: string;
  imageUrl?: string;
  slug?: string;
  keywords?: string[];
  robots?: "all" | "noindex" | "nofollow" | "noarchive" | undefined;
};

const useHead = (props: HeadProps) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords?.join(", ")}></meta>
      <meta name="author" content="Author Name"></meta>
      <link rel="canonical" href="https://example.com/page-url"></link>
      {props.robots && <meta name="robots" content={props.robots}></meta>}

      {/*================ Open graph metatags ================*/}
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      {props.imageUrl && <meta property="og:image" content={props.imageUrl} />}
      {props.slug && (
        <meta property="og:url" content={`https://example.com/${props.slug}`} />
      )}
      <meta property="og:type" content="website"></meta>
      <meta property="og:site_name" content="Site Name"></meta>

      {/*================ Twitter metatags ================*/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      {props.imageUrl && <meta name="twitter:image" content={props.imageUrl} />}
      <meta name="twitter:site" content="@site_handle"></meta>
      <meta name="twitter:creator" content="@creator_handle"></meta>
    </Head>
  );
};

export default useHead;
