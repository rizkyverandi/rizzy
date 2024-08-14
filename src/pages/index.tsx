import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import Card from "@/components/Card";
import Paragraph from "@/components/Paragraph";
import BlinkingText from "@/components/BlinkingText";
import List from "@/components/List";
import OnViewAnimation from "@/components/OnViewAnimation";
import useHead from "@/utils/useHead";

export default function Home() {
  const Head = () => useHead({ title: "Rizz-y Personal Website", desc: "this is my homepage" });

  return (
    <>
      <Head />
      <SectionWrapper>
        <Container className="py-20">
          <div className="grid grid-flow-row lg:grid-rows-1 grid-rows-2 lg:grid-cols-6 gap-14">
            {/* <div className="container w-full block object-fill">
              <Image
                className="m-auto"
                alt="This image is represent Rizz-y as 8-bit avatar"
                src={Avatar}
                width={640}
                height={70}
                layout="responsive"
              />
            </div> */}
            <div className="lg:col-start-1 lg:row-start-1 lg:col-span-4 row-span-4 flex flex-col gap-y-5">
              <h1 className="text-7xl font-bold flex flex-wrap">
                {`>_`}Hello world! <BlinkingText text="." />
              </h1>
              <Paragraph>
                I'm a software developer who makes open-source projects and
                writes about code and life. On this site, you can check out all
                the technical articles I've written, read some of my personal
                notes, or learn more about me.
              </Paragraph>
            </div>
          </div>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container className="py-20 text-cta-text">
          <div className="flex flex-col gap-y-5">
            <OnViewAnimation headerText="Articles">
              <List />
            </OnViewAnimation>
            {/* <h2 className="font-bold text-6xl">Articles</h2>
            <div className="flex flex-row">
             <List />
            </div> */}
          </div>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container className="py-20 text-cta-text">
          <div className="flex flex-col gap-y-5">
            <OnViewAnimation
              headerText="Projects"
              className="grid grid-flow-row md:grid-cols-3 grid-row-1 gap-6"
            >
              <Card />
              <Card />
              <Card />
            </OnViewAnimation>
            {/* <h2 className="font-bold text-6xl">Projects</h2>
            <div className="grid grid-flow-row md:grid-cols-3 grid-row-1 gap-6">
              <Card />
              <Card />
              <Card />
            </div> */}
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
