import { motion } from "framer-motion";

const OnViewAnimation = ({
  children,
  headerText,
  className,
}: {
  children: React.ReactNode;
  headerText: string;
  className?: string;
}) => {
  return (
    <>
      <motion.h2
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        viewport={{once: true}}
        className="font-bold text-6xl"
      >
        {headerText}
      </motion.h2>
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className={className}
      >
        {children}
      </motion.div>
    </>
  );
};

export default OnViewAnimation;
