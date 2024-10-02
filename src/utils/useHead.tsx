import Head from "next/head";

type HeadProps = {
  title: string;
  description: string;
  author?: string;
  imageUrl?: string;
  canonicalUrl?: string;
  slug?: string;
  keywords?: string[];
  robots?:
    | "all"
    | "noindex"
    | "nofollow"
    | "noarchive"
    | "follow"
    | "index"
    | string
    | undefined;
  type?: "website" | "article" | "profile" | undefined;
  locale?: "en_US" | "id_ID";
  phoneNumber?: string;
};

const useHead = (props: HeadProps) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} key="description" />
      <meta
        property="application-name"
        content="Rizzy"
        key="application-name"
      />
      {props.keywords && (
        <meta
          name="keywords"
          content={props.keywords.join(", ")}
          key="keywords"
        />
      )}
      {props.author && (
        <meta name="author" content={props.author} key="author" />
      )}
      <link
        rel="canonical"
        href={`${props.canonicalUrl}`}
        key="canonical"
      />

      {/* ================ Open Graph (Discord, Facebook, LinkedIn, etc.) Meta Tags ================ */}
      <meta property="og:title" content={props.title} key="og-title" />
      <meta property="og:deteminer" content="auto" key="og-determiner" />
      <meta property="og:deteminer" content="auto" key="og-determiner" />
      <meta
        property="og:country_name"
        content="Indonesia"
        key="og-country-name"
      />
      <meta
        property="og:description"
        content={props.description}
        key="og-description"
      />
      <meta property="og:image" content={props.imageUrl} key="og-image" />
      <meta property="og:image:width" content="1200" key="og-image-width" />
      <meta property="og:image:height" content="630" key="og-image-height" />
      <meta property="og:email" content="rizverandi@gmail.com" key="og-image" />
      {props.phoneNumber && (
        <meta
          property="og:phone_number"
          content={props.phoneNumber}
          key="og-image"
        />
      )}
      <meta
        property="og:url"
        content={"https://rizzy-gamma.vercel.app/blog/" + props.slug + "/"}
        key="og-url"
      />
      {props.type && (
        <meta property="og:type" content={props.type} key="og-type" />
      )}
      <meta
        property="og:site_name"
        content="Rizzy's Personal Website"
        key="og-site-name"
      />
      {/* ================ Additional Open Graph (Discord) Meta Tags ================ */}
      <meta name="theme-color" content="#7289da" key="og-theme-color" />
      {/* ================ Additional Open Graph (LinkedIn) Meta Tags ================ */}
      {props.locale && (
        <meta property="og:locale" content={props.locale} key="og-locale" />
      )}
      {/* ================ Additional Open Graph (Instagram) Meta Tags ================ */}
      {/* <meta property="og:type" content="instapp:photo" /> */}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary" key="twitter-card" />
      <meta name="twitter:title" content={props.title} key="twitter-title" />
      <meta
        name="twitter:description"
        content={props.description}
        key="twitter-description"
      />
      <meta name="twitter:image" content={props.imageUrl} key="twitter-image" />
      <meta
        property="twitter:image:width"
        content="1200"
        key="twitter-image-width"
      />
      <meta
        property="twitter:image:height"
        content="630"
        key="twitter-image-height"
      />
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
        property="telegram:image:width"
        content="1200"
        key="telegram-image-width"
      />
      <meta
        property="telegram:image:height"
        content="630"
        key="telegram-image-height"
      />
      <meta
        name="telegram:card"
        content="summary"
        key="telegram-card"
      />
    </Head>
  );
};

export default useHead;
