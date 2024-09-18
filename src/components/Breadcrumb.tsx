import Link from "next/link";
import { useRouter } from "next/router";
import Container from "./Container";
const Breadcrumb = () => {
  const { asPath } = useRouter();

  const pathArray = asPath.split("/").filter((path) => path);
  console.log(pathArray)

  return (
    <Container className="pt-10">
      <div id="breadcrumb">
        <ul className="flex text-sm text-cta-text underline-offset-4">
          <li>
            <Link href="/" className="underline">
              Home
            </Link>
          </li>

          {pathArray.map((path, index) => {
            const href = "/" + pathArray.slice(0, index + 1).join("/");

            return (
              <li key={index} className="flex items-center">
                <span className="mx-2">/</span>
                <Link href={href} className="underline capitalize">
                  {decodeURIComponent(path)}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default Breadcrumb;
