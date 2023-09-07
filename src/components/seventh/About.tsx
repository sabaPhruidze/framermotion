import { motion } from "framer-motion";
function About() {
  return (
    <motion.div
      style={{
        color: "green",
        fontSize: "30px",
        padding: "20px",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 2,
      }}
    >
      home Page for Transition
    </motion.div>
  );
}

export default About;
