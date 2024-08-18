import { motion } from "framer-motion";

const HoverText = ({ beforeText, afterText }: {beforeText: string, afterText: string }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      whileHover={{ opacity: 0 }}
      style={{ display: "inline-block" }}
    >
      <motion.span
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0 }}
        style={{ display: "inline-block" }}
      >
        {beforeText}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{ display: "inline-block", marginLeft: "5px" }}
      >
        {afterText}
      </motion.span>
    </motion.div>
  );
};

export default HoverText;
