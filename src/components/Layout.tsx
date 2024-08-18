import { Pixelify_Sans } from "next/font/google";
import { ReactLenis } from "lenis/react";
import dynamic from "next/dynamic";
import Loader from "./Loader";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Pixelify_Sans({ subsets: ["latin"] });

// Dynamically import the component
const Navbar = dynamic(() => import("./Navbar"));
const Footer = dynamic(() => import("./Footer"));

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider>
        <ReactLenis root>
          <Loader className={`z-10 ${inter.className}`} />
          <Navbar className={`${inter.className}`} />
          <main className={`${inter.className} p-4 text-cta-text relative z-0`}>
            {children}
          </main>
          <Footer className={inter.className} />
        </ReactLenis>
      </ThemeProvider>
    </>
  );
};

export default Layout;
