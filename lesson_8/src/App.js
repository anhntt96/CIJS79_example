import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // callback: function
  // deps: array or empty
  // // function useEffect(callback, dependencies): void;

  // MOUNTING: lần đầu tiên hiển thị
  // rendering
  // callback

  // UPDATING: state update
  // rendering
  // clean up
  // callback

  // UNMOUNTING: xoá component
  // clean up

  // useEffect(() => {
  //   console.log("callback with no deps");
  //   console.log("======================");
  //   // 
  //   return () => {
  //     // clean up:
  //     // unmount
  //     // re-render
  //     console.log("clean up: useEffect with no deps");
  //     console.log("======================");
  //   };
  // });

  // useEffect with deps = []
  // MOUNTING: lần đầu tiên hiển thị
  // rendering
  // callback

  // UPDATING: state update
  // do nothing

  // UNMOUNTING: xoá component
  // clean up



  // useEffect(() => {
  //   console.log("callback with deps = []");
  //   console.log("======================");
  //   // 
  //   return () => {
  //     // clean up:
  //     // unmount
  //     // re-render
  //     console.log("clean up: useEffect with deps = []");
  //     console.log("======================");
  //   };
  // },[]);


  // useEffect with deps = []
  // MOUNTING: lần đầu tiên hiển thị
  // rendering
  // callback

  // UPDATING: state update
  // only run when state `count` change

  // UNMOUNTING: xoá component
  // clean up


  // Tổng kết: 
  // MOUNTING: lần đầu tiên hiển thị
  // rendering
  // callback

  // UPDATING: phụ thuộc vào deps
  // deps:
  //    empty: luôn chạy khi update.
  //    []: không chạy.
  //    [dep1, deps2]: chạy khi deps thay đổi (được update)
  // clean up -> callback

  // UNMOUNTING: xoá component
  // clean up

   useEffect(() => {

    // callback
    console.log("callback with deps = [count]");
    console.log("======================");
    
    return () => {
      // clean up:
      // unmount
      // re-render
      console.log("clean up: useEffect with deps = [count]");
      console.log("======================");
    };
  },[count]);

  // rendering...
  console.log("rendering...");
  return (
    <div className="App container mt-5">
      <button className="btn btn-success"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <h2>{count}</h2>
    </div>
  );
}

export default App;
