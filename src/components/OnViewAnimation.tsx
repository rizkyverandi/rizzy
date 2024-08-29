import { motion } from "framer-motion";
import Link from "next/link";

const OnViewAnimation = ({
  children,
  headerText,
  className,
  redirectURL,
}: {
  children: React.ReactNode;
  headerText?: string;
  className?: string;
  redirectURL?: string;
}) => {
  const anim = {
    initial: { y: 48, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { ease: "easeInOut", duration: 0.75 },
    viewport: { once: true },
  };

  return (
    <>
      <motion.div className="flex items-center justify-between">
        {headerText && (
          <motion.h2 {...anim} className="font-bold text-6xl">
            {headerText}
          </motion.h2>
        )}
        {redirectURL && (
          <motion.div {...anim}>
            <Link href={redirectURL} className="hover-link">
              See all
            </Link>
          </motion.div>
        )}
      </motion.div>
      <motion.div {...anim} className={className}>
        {children}
      </motion.div>
    </>
  );
};

export default OnViewAnimation;
