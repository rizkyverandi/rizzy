import ErrorPage from "@/components/ErrorPage";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import useHead from "@/utils/useHead";
import Avatar from "@/assets/avatar.png";
import { DOMAIN } from "@/constants";

export default function App({ Component, pageProps }: AppProps) {
  const Head = () =>
    useHead({
      title: "Rizzy Personal Website",
      description:
        "Welcome to Rizzy's personal website. Explore my journey, projects, and insights in software development and music production. Discover what drives my passion for programming and music creation, and get to know the person behind the name.",
      imageUrl: Avatar.src,
      slug: "/",
      keywords: ["personal", "website", "portfolio", "skills"],
      type: "website",
      robots: "follow, index",
      locale: "id_ID",
      canonicalUrl: `${DOMAIN}`,
    });

  return (
    <Layout>
      <Head />
      <ErrorBoundary errorComponent={ErrorPage}>
        <Component {...pageProps} />
      </ErrorBoundary>
    </Layout>
  );
}
