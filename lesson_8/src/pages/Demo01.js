import { useEffect, useState } from "react";

const Demo01 = () => {
  // callback: your side effect function
  // dependencies: or deps, Only execute callback when dependencies changes.
  // function useEffect( callback, dependencies) {}
  const [count, setCount] = useState(0);

//   useEffect(() => {
//     // executed after render component
//     console.log("executing useEffect 01 - no deps");
//     console.log("================================");
//     return () => {
//       // Executed when component unmount or next render
//       console.log("clean up useEffect 01 - no deps");
//       console.log("================================");
//     };
//   });

  useEffect(() => {
    document.title = "Hello"
    console.log("executing useEffect 01 - deps = []");
    console.log("================================");
    return () => {
      console.log("clearn up useEffect 01 - deps = []");
      console.log("================================");
    };
  }, []);

  console.log("rendering");
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

    </div>
  );
};



export default Demo01;
