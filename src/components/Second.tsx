import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
export default function Second() {
  const [show, setShow] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ marginTop: "30px" }}>
        Framer motion toturial: exit and enter animation
      </h1>
      <AnimatePresence>
        {show && (
          <motion.div
            style={{ width: 100, height: 100, backgroundColor: "blue" }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: -100 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{
              duration: 1,
            }}
          />
        )}
      </AnimatePresence>
      <button
        onClick={() => {
          setShow(!show);
        }}
        style={{ padding: "12px 18px" }}
      >
        {show ? "remove Box" : "add box"}
      </button>
    </div>
  );
}
