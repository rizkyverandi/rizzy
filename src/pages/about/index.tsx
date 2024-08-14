import Container from "@/components/Container";
import Paragraph from "@/components/Paragraph";
import SectionWrapper from "@/components/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper>
      <Container className="py-20">
        <div className="flex flex-col gap-14">
          <h2 className="text-6xl font-bold">About</h2>
          <Paragraph>
            I'm a software engineer who graduated in 2022 from Binus University.
            I also enjoy making music; my stage name is EnkuMusic. I love
            playing video games and hanging out on Discord with friends to
            unwind after a day of work. It's how I relax. Right now, I want to
            take a break from my music career and focus on my career as a
            software developer. I like both, but unfortunately, I have to choose
            between them. Are there jobs with that combine both of these
            careers? I'm sure there are, but they're quite rare. However, I might not
            update my website very often, but if I find some free time, I'll try
            to update it. Feel free to contact me via email, LinkedIn, or social
            media. Cheers!
          </Paragraph>

          <h2 className="text-6xl font-bold">Tools</h2>
          <ul className="text-xl text-copy-secondary flex flex-col leading-9">
            <li className="font-semibold flex gap-2">Text Editor: <p className="underline">Visual Studio Code</p></li>
            <li className="font-semibold flex gap-2">Framework: <p className="underline">Nextjs</p></li>
            <li className="font-semibold flex gap-2">Libraries: <p className="underline">Framer motion</p>, <p className="underline">Lenis</p></li>
          </ul>

          <h2 className="text-6xl font-bold">Contact</h2>
          <ul className="text-xl text-copy-secondary flex flex-col leading-9">
            <li className="font-semibold flex gap-2">Email: <p className="underline">rizverandi@gmail.com</p></li>
            <li className="font-semibold flex gap-2 underline">Twitter</li>
            <li className="font-semibold flex gap-2 underline">LinkedIn</li>
          </ul>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default About;
