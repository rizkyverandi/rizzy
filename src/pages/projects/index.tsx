import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import BlinkingText from "@/components/BlinkingText";
import Paragraph from "@/components/Paragraph";
import Card from "@/components/Card";

const index = () => {
  return (
    <SectionWrapper>
      <Container className="py-20 text-cta-text">
        <div className="flex flex-col gap-y-5">
          <h1 className="flex text-6xl font-bold">
            Projects
            <BlinkingText text="." />
          </h1>
          <Paragraph>
            I&apos;m a software engineer who graduated in 2022 from Binus
            University. I also enjoy making music; my stage name is EnkuMusic. I
            love playing video games and hanging out on Discord with friends to
            unwind after a day of work. It&apos;s how I relax. Right now, I want
            to take a break from my music career and focus on my career as a
            software developer. I like both, but unfortunately, I have to choose
            between them. Are there jobs with that combine both of these
            careers? I&apos;m sure there are, but they&apos;re quite rare.
            However, I might not update my website very often, but if I find
            some free time, I&apos;ll try to update it. Feel free to contact me
            via email, LinkedIn, or social media. Cheers!
          </Paragraph>
          <div className="grid grid-flow-row md:grid-cols-3 grid-row-1 gap-6">
            {/* <Card />
            <Card />
            <Card /> */}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default index;
