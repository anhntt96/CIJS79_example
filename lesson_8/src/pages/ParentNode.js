import { useState } from "react";
import App from "../App";
import Clock from "./Clock";
const ParentNode = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div className="container">
      <button onClick={ () => setDisplay(false)} className="btn btn-success">Hide</button>
      {display && <Clock />}
    </div>
  );
};

export default ParentNode;
