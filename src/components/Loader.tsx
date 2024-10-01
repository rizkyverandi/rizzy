import { motion } from "framer-motion";
import Utils from "@/utils/utils";

import { useUserAgent } from "@/contexts";

const Loader = ({ className }: { className: string }) => {
  const { userAgent } = useUserAgent();

  const fadeAnimationVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    reveal: {
      opacity: 1,
      y: 0,
    },
  };

  const isMobile = Utils.isMobile(userAgent);

  let web = "personal website.";
  if (isMobile) {
    web = "web.";
  }
  let text = `Hey, I am glad you are here!, Thank you for visiting my ${web}`;
  const textWithNbsp = text.replace(/ /g, "\u00A0");
  const splittedChar = Utils.splitChars(textWithNbsp);

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: "-300vh" }}
      transition={{
        duration: 0.8,
        delay: 4,
        ease: [0.45, 0, 0.55, 1],
        opacity: {
          duration: 0.6, // Duration of the fade effect
          delay: 4, // Delay fade to start after the slide finishes
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      onAnimationComplete={() => {
        document.body.classList.remove("overflow-y-hidden");
      }}
      className={`h-full bg-background w-full flex items-center justify-center text-cta-text fixed border-b-gray-600 border-b-[1px] ${className}`}
    >
      <motion.p
        initial="hidden"
        whileInView={"reveal"}
        transition={{ staggerChildren: 0.04 }}
        className="text-center overflow-hidden relative whitespace-normal inline break-words text-sm md:text-base"
      >
        {splittedChar.map((char, index) => (
          <motion.span
            transition={{ duration: 0.05 }}
            key={index}
            variants={fadeAnimationVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>
    </motion.div>
  );
};

export default Loader;
