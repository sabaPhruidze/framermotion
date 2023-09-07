import { motion } from "framer-motion";
function Home() {
  return (
    <motion.div
      style={{
        color: "blue",
        fontSize: "30px",
        padding: "20px",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 5,
      }}
    >
      home Page for Transition
    </motion.div>
  );
}

export default Home;
