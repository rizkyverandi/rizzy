import Head from "next/head";

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
      <meta name="description" content={props.description} key="description" />
      {props.keywords && (
        <meta
          name="keywords"
          content={props.keywords.join(", ")}
          key="keywords"
        />
      )}
      <meta name="author" content="Rizky Verandi" key="author" />
      <link
        rel="canonical"
        href={"https://rizzy-gamma.vercel.app/blog/" + props.slug + "/"}
        key="canonical"
      />

      {/* ================ Open Graph (Discord, Facebook, LinkedIn, etc.) Meta Tags ================ */}
      <meta property="og:title" content={props.title} key="og-title" />
      <meta
        property="og:description"
        content={props.description}
        key="og-description"
      />
      <meta property="og:image" content={props.imageUrl} key="og-image" />
      <meta
        property="og:url"
        content={"https://rizzy-gamma.vercel.app/blog/" + props.slug + "/"}
        key="og-url"
      />
      <meta property="og:type" content="article" key="og-type" />
      <meta property="og:site_name" content="Rizzy's Blog" key="og-site-name" />
      {/* ================ Additional Open Graph (Discord) Meta Tags ================ */}
      <meta name="theme-color" content="#7289da" key="og-theme-color" />
      {/* ================ Additional Open Graph (LinkedIn) Meta Tags ================ */}
      <meta property="og:locale" content="en_US" key="og-locale" />
      {/* ================ Additional Open Graph (Instagram) Meta Tags ================ */}
      {/* <meta property="og:type" content="instapp:photo" /> */}

      {/* Twitter Meta Tags */}
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter-card"
      />
      <meta name="twitter:title" content={props.title} key="twitter-title" />
      <meta
        name="twitter:description"
        content={props.description}
        key="twitter-description"
      />
      <meta name="twitter:image" content={props.imageUrl} key="twitter-image" />
      <meta name="twitter:site" content="@your_site" key="twitter-site" />
      <meta
        name="twitter:creator"
        content="@your_handle"
        key="twitter-creator"
      />

      {/* ================ Telegram Meta Tags ================ */}
      <meta name="telegram:title" content={props.title} key="telegram-title" />
      <meta
        name="telegram:description"
        content={props.description}
        key="telegram-description"
      />
      <meta
        name="telegram:image"
        content={props.imageUrl}
        key="telegram-image"
      />
      <meta
        name="telegram:card"
        content="summary_large_image"
        key="telegram-card"
      />
    </Head>
  );
};

export default useHead;
