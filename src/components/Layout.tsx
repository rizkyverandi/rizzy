import { Pixelify_Sans, Quicksand } from "next/font/google";
import { ReactLenis } from "lenis/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import useHead from "@/utils/useHead";
import { GlobalProvider } from "@/contexts";

//const inter = Pixelify_Sans({ subsets: ["latin"] });
const inter = Quicksand({ subsets: ["latin"] })

// Dynamically import the component
const Loader = dynamic(() => import("./Loader"));
const Navbar = dynamic(() => import("./Navbar"));
const Footer = dynamic(() => import("./Footer"));

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [loadSecond, setLoadSecond] = useState(false);
  const Head = () =>
    useHead({
      title: "Rizz-y Personal Website",
      description: "This is Rizz-y personal website.",
    });

  useEffect(() => {
    setTimeout(() => {
      setLoadSecond(true);
    }, 1000); // Load the second component after 1 second
  }, []);

  return (
    <>
      <GlobalProvider>
        <ReactLenis root>
          <Head />
          <Loader className={`z-10 ${inter.className}`} />
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
