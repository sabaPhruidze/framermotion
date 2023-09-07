import { motion } from "framer-motion";

function First() {
  return (
    <div style={{ height: "100vh" }}>
      <motion.div
        style={{ marginTop: 500 }}
        initial={{ x: 50 }}
        animate={{ x: [0, 50, 150] }}
        transition={{
          duration: 3,
        }}
        whileHover={{ scale: 1.3, rotate: 360, opacity: 0.4 }}
      >
        it is H1 for animation framer motion.
      </motion.div>
    </div>
  );
}

export default First;
