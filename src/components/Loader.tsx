import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import splitChars from "@/utils/splitChars";

const Loader = ({ className }: { className: string }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let interval = null;
    interval = setTimeout(() => {
      setLoading((prevLoading) => !prevLoading);
    }, 5000);
    return () => {
      clearTimeout(interval);
    };
  }, []);

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

  const text =
    "Hey, I am glad you are here!, Thank you for visiting my personal website";
  const textWithNbsp = text.replace(/ /g, "\u00A0");
  const splittedChar = splitChars(textWithNbsp);

  return (
    <motion.div
      className={`h-full bg-background w-full flex items-center justify-center text-cta-text ${
        loading ? "fixed" : "hidden"
      } ${className}`}
    >
        <motion.p
          initial="hidden"
          whileInView={"reveal"}
          transition={{ staggerChildren: 0.04 }}
          className="bg-background text-center overflow-hidden relative block"
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
