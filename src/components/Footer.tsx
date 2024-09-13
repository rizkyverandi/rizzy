import Link from "next/link";
import { FaGithubAlt, FaRegCopyright } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={`p-4 w-full ${className} text-cta-text`}>
      <nav className="wrapper container flex justify-between">
        <div className="flex md:flex-row flex-col items-center md:justify-between justify-center m-auto w-full">
          <ul className="flex flex-row gap-6 ">
            <li>
              <Link
                href={"https://nextjs.org/"}
                target="_blank"
                aria-label="Go to About page"
                prefetch={false}
              >
                <span className="flex gap-2 items-center">
                  <RiNextjsFill /> Nextjs
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={"https://github.com/rizkyverandi"}
                target="_blank"
                aria-label="Go to About page"
                prefetch={false}
              >
                <span className="flex gap-2 items-center ">
                  <FaGithubAlt /> Github
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={"https://vercel.com/"}
                target="_blank"
                aria-label="Go to About page"
                prefetch={false}
              >
                <span className="flex gap-2 items-center ">
                  <SiVercel /> Vercel
                </span>
              </Link>
            </li>
          </ul>
          <span className="flex flex-row items-center gap-2">
            Copyright
            <FaRegCopyright /> Rizky Verandi 2024
          </span>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
