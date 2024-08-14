"use client";
import { Pixelify_Sans } from "next/font/google";
import { ReactLenis } from "lenis/react";
import dynamic from "next/dynamic";


type Properties = {
  children: React.ReactNode;
};

const inter = Pixelify_Sans({ subsets: ["latin"] });

// Dynamically import the component
const Navbar = dynamic(() => import("./Navbar"));
const Footer = dynamic(() => import("./Footer"));

const Layout = (props: Properties) => {
  //const lenis = useLenis()

  return (
    <>
      <ReactLenis root>
        <Navbar className={inter.className} />
        <main className={`${inter.className} p-4 text-cta-text`}>
          {props.children}
        </main>
        <Footer className={inter.className} />
      </ReactLenis>
    </>
  );
};

export default Layout;
