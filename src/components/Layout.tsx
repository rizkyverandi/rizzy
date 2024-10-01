import { Quicksand } from "next/font/google";
import { ReactLenis } from "lenis/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Head from "next/head";
import { GlobalProvider } from "@/contexts";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Avatar from "@/assets/avatar.png";

//const inter = Pixelify_Sans({ subsets: ["latin"] });
const inter = Quicksand({ subsets: ["latin"] });

// Dynamically import the component
const Loader = dynamic(() => import("./Loader"));

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [loadSecond, setLoadSecond] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoadSecond(true);
    }, 1000); // Load the second component after 1 second
  }, []);

  return (
    <>
      <GlobalProvider>
        <Loader className={`p-4 z-10 ${inter.className}`} />
        <ReactLenis root>
          <Head>
            <title>Rizzy Personal Website</title>
            <meta
              name="description"
              content={`Welcome to Rizzy's personal website. Explore my journey, projects, and insights in software development and music production. Discover what drives my passion for programming and music creation, and get to know the person behind the name."`}
            />
            <meta
              name="keywords"
              content="personal, website, portfolio, skills"
            />
            {/* Open Graph meta tags for social sharing */}
            <meta property="og:title" content="Rizzy Personal Website" />
            <meta
              property="og:description"
              content="Learn more about me, skills, and what i do."
            />
            <meta property="og:image" content={Avatar.src} />
            <meta property="og:url" content="https://rizzy-gamma.vercel.app/" />
            <meta property="og:type" content="website" />
          </Head>
          {loadSecond && <Navbar className={`${inter.className}`} />}
          {loadSecond && (
            <main
              className={`${inter.className} p-4 text-cta-text relative z-0`}
            >
              {children}
            </main>
          )}
          {loadSecond && <Footer className={inter.className} />}
        </ReactLenis>
      </GlobalProvider>
    </>
  );
};

export default Layout;
