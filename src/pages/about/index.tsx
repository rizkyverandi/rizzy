import BlinkingText from "@/components/BlinkingText";
import Container from "@/components/Container";
import OnViewAnimation from "@/components/OnViewAnimation";
import Paragraph from "@/components/Paragraph";
import SectionWrapper from "@/components/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper>
      <Container className="py-20">
        <div className="flex flex-col gap-14">
          <h1 className="flex text-6xl font-bold">
            About <BlinkingText text="." />
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

          <OnViewAnimation headerText="Tools">
            <ul className="text-xl text-copy-secondary flex flex-col leading-9">
              <li className="font-semibold flex gap-2">
                Text Editor:{" "}
                <a
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  className="underline hover:text-blue-600"
                >
                  Visual Studio Code
                </a>
              </li>
              <li className="font-semibold flex gap-2">
                Framework:{" "}
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  className="underline hover:text-blue-600"
                >
                  Nextjs
                </a>
              </li>
              <li className="font-semibold flex gap-2">
                Libraries:{" "}
                <a
                  href="https://www.framer.com/motion/"
                  target="_blank"
                  className="underline hover:text-blue-600"
                >
                  Framer motion
                </a>
                ,{" "}
                <a
                  href="https://lenis.darkroom.engineering/"
                  target="_blank"
                  className="underline hover:text-blue-600"
                >
                  Lenis
                </a>
              </li>
            </ul>
          </OnViewAnimation>
          <OnViewAnimation headerText="Contact">
            <ul className="text-xl text-copy-secondary flex flex-col leading-9">
              <li className="font-semibold flex gap-2">
                Email:{" "}
                <a
                  href="mailto:rizverandi@gmail.com"
                  target="_blank"
                  className="underline hover:text-blue-600"
                >
                  rizverandi@gmail.com
                </a>
              </li>
              <li className="font-semibold flex gap-2 underline">
                <a
                  href="https://x.com/enkumusic"
                  target="_blank"
                  className="underline hover:text-blue-600"
                >
                  Twitter
                </a>
              </li>
              <li className="font-semibold flex gap-2 underline">
                {" "}
                <a
                  href="https://www.linkedin.com/in/rizkyverandi/"
                  target="_blank"
                  className="underline hover:text-blue-600"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </OnViewAnimation>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default About;
