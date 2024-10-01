import ErrorPage from "@/components/ErrorPage";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Rizzy Personal Website</title>
        <meta
          name="description"
          content={`Welcome to Rizzy's personal website. Explore my journey, projects, and insights in software development and music production. Discover what drives my passion for programming and music creation, and get to know the person behind the name."`}
          key="description"
        />
        <meta
          name="keywords"
          content="personal, website, portfolio, skills"
          key="keywords"
        />
        {/* Open Graph meta tags for social sharing */}
        <meta
          property="og:title"
          content="Rizzy Personal Website"
          key="og-title"
        />
        <meta
          property="og:url"
          content="https://rizzy-gamma.vercel.app/"
          key="og-url"
        />
        <meta property="og:type" content="website" key="og-type" />
      </Head>
      <ErrorBoundary errorComponent={ErrorPage}>
        <Component {...pageProps} />
      </ErrorBoundary>
    </Layout>
  );
}
