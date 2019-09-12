import React, { useState, useEffect } from "react";

const App = props => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("rails365");
  useEffect(() => {
      console.log(`render ${count}`);
    document.title = `you clicked ${count} times`;
  },[count]);//当count变化的时候再执行里面的内容 当为空数组时候除了第一次就不再执行useEffect
  useEffect(() => {
    console.log("render name");
  });
  //在以下两个情况调用useEffect
  //   componentDidMount(){
  //     document.title=`you clicked ${this.StaticRange.count} times`
  // }

  // componentDidUpdate(){
  //   document.title=`you clicked ${this.StaticRange.count} times`
  // }

  return (
    <div>
      <div>
        <p>you clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>CLick me</button>
      </div>
      <button onClick={() => setName("")}>setName</button>
    </div>
  );
};

export default App;
