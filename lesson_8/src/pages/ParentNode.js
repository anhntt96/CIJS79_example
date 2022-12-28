import { useState } from "react";
import Demo01 from "./Demo01";
import Clock from "./Clock";
const ParentNode = () => {
  const [displayDemo, setDisplayDemo] = useState(true);

  return (
    <div className="container">
        <h1>Demo 01</h1>
      <button
        onClick={() => {
          setDisplayDemo(!displayDemo);
        }}
      >
        Update display
      </button>
      <div className="mt-5">{displayDemo && <Demo01 />}</div>
    </div>
  );
};

export default ParentNode;
