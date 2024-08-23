import { motion } from "framer-motion";
import Link from "next/link";

const OnViewAnimation = ({
  children,
  headerText,
  className,
  redirectURL,
}: {
  children: React.ReactNode;
  headerText: string;
  className?: string;
  redirectURL?: string;
}) => {
  return (
    <>
      <motion.div className="flex items-center justify-between">
        <motion.h2
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          viewport={{ once: true }}
          className="font-bold text-6xl"
        >
          {headerText}
        </motion.h2>
        {redirectURL && (
          <Link href={redirectURL} className="hover-link">
            See all
          </Link>
        )}
      </motion.div>
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className={className}
      >
        {children}
      </motion.div>
    </>
  );
};

export default OnViewAnimation;
