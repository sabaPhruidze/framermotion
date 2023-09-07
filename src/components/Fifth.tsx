import { motion, useScroll } from "framer-motion";
function Fifth() {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          backgroundColor: "blue",
          transformOrigin: "0%",
        }}
      ></motion.div>
      <h2>Scroll Demo</h2>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
    </div>
  );
}

export default Fifth;
