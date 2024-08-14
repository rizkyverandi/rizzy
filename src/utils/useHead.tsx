import Head from "next/head";

type HeadProps = {
  title: string;
  desc: string;
};

const useHead = (props: HeadProps) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.desc} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.desc} />
    </Head>
  );
};

export default useHead;
