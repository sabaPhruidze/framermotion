import { motion } from "framer-motion";

function Six() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>React Scroll Animation with framer motion</h2>
      <Box />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

function Box() {
  return (
    <motion.div
      style={{
        margin: "200px 0px",
        width: "100px",
        height: "100px",
        backgroundColor: "blue",
      }}
      initial={{ opacity: 0, scale: 0, y: "200px" }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    ></motion.div>
  );
}
export default Six;
