import Link from "next/link";
import { MdOutlineDarkMode } from "react-icons/md";
import Image from "next/image";
import { Avatar, Avatar2 } from "@/assets";
import { useTheme } from "@/contexts";
import Utils from "@/utils/utils";

const Navbar = ({ className }: { className?: string }) => {
  Utils.logComponent("Navbar");
  const { toggleTheme } = useTheme();

  return (
    <header
      className={`${className} border-b-gray-600 border-b-[1px] shadow-lg p-4 w-full text-cta-text`}
    >
      <div className="wrapper container flex justify-between">
        <h1>
          <Link href="/">
            <Image
              className="m-auto"
              alt="This image is represent Rizz-y as 8-bit avatar"
              about="This is Rizz-y as 8-bit avatar"
              src={Avatar}
              width={30}
              height={30}
            />
          </Link>
        </h1>
        <nav>
          <ul className="flex flex-row gap-6">
            <li className="px-2">
              <Link
                className="hover-fx "
                href={"/about"}
                aria-label="Go to About page"
              >
                About
              </Link>
            </li>
            <li className="px-2">
              <Link
                className="hover-fx"
                href="/projects"
                aria-label="Go to Projects page"
              >
                Projects
              </Link>
            </li>
            <li className="px-2">
              <Link
                className="hover-fx"
                href="/blog"
                aria-label="Go to Articles page"
              >
                Articles
              </Link>
            </li>
            <li onClick={toggleTheme}>
              <button
                type="button"
                name="darkModeButton"
                id="darkModeBtn"
                aria-label="Dark mode button"
              >
                <MdOutlineDarkMode size={25} />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
