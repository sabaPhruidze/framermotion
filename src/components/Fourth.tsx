import { motion } from "framer-motion";
import { useState } from "react";
function Fourth() {
  const [showCard, setShowCard] = useState<boolean>(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "grey",
      }}
    >
      <motion.div
        style={{
          backgroundColor: "white",
          padding: "3rem 2rem",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          cursor: "pointer",
        }}
        whileHover={{
          scale: 1.2,
        }}
        transition={{
          layout: {
            duration: 1,
            type: "spring",
          },
        }}
        layout
        onClick={() => setShowCard(!showCard)}
      >
        <motion.h3>Hover or Click</motion.h3>
        {showCard && (
          <motion.p
            style={{ width: 600 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            When the button is clicked, the isLoading state will be set to true,
            which will trigger the layout animation. The button will then fade
            out while it is loading. Layout animations can be used to make your
            UI more visually appealing and engaging. They can also be used to
            provide feedback to users about what is happening in your app
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
export default Fourth;
