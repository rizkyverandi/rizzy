import { Quicksand } from "next/font/google";
import { ReactLenis } from "lenis/react";
import dynamic from "next/dynamic";
import { GlobalProvider } from "@/contexts";
import Navbar from "./Navbar";
import Footer from "./Footer";

//const inter = Pixelify_Sans({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });

// Dynamically import the component
const Loader = dynamic(() => import("./Loader"));

const Layout = ({ children }: { children: React.ReactNode }) => {
  // const [loadSecond, setLoadSecond] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoadSecond(true);
  //   }, 1000); // Load the second component after 1 second
  // }, []);

  return (
    <>
      <GlobalProvider>
        <Loader className={`p-4 z-10 ${quicksand.className}`} />
        <ReactLenis root>
          <Navbar className={`${quicksand.className}`} />
          <main className={`${quicksand.className} p-4 text-cta-text relative z-0`}>
            {children}
          </main>
          <Footer className={quicksand.className} />
          {/* {loadSecond && <Navbar className={`${inter.className}`} />}
          
          {loadSecond && (
            <main
              className={`${inter.className} p-4 text-cta-text relative z-0`}
            >
              {children}
            </main>
          )}
          {loadSecond && <Footer className={inter.className} />} */}
        </ReactLenis>
      </GlobalProvider>
    </>
  );
};

export default Layout;
