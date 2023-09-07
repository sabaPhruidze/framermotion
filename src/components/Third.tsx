import { motion } from "framer-motion";

function Third() {
  return (
    <div style={{ height: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>
        Draggable Object with framer motion
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "200px",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "120px",
        }}
      >
        <div>
          <p>No constraint</p>
          <motion.div
            style={{
              width: 100,
              height: 100,
              backgroundColor: "blue",
            }}
            drag
          />
        </div>
        <div>
          <p>Y only constraint</p>
          <motion.div
            style={{
              width: 100,
              height: 100,
              backgroundColor: "blue",
            }}
            drag="y"
          />
        </div>
        <div>
          <p>Drag constraints</p>
          <motion.div
            style={{
              width: 100,
              height: 100,
              backgroundColor: "blue",
            }}
            drag
            dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Third;
