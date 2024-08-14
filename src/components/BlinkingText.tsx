import { motion } from "framer-motion";

const BlinkingText = ({ text }: { text: string }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 0] }}
      transition={{
        duration: 1, // Duration of one blink cycle
        repeat: Infinity, // Repeat the animation indefinitely
        repeatType: "loop", // Repeat the animation in a loop
        ease: "linear", // Easing function
      }}
    >
      <p>{text}</p>
    </motion.div>
  );
};

export default BlinkingText;
