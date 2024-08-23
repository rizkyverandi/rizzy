import ErrorPage from "@/components/ErrorPage";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ErrorBoundary errorComponent={ErrorPage}>
        <Component {...pageProps} />
      </ErrorBoundary>
    </Layout>
  );
}
