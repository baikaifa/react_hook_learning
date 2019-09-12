import React, { useState,useEffect } from "react";

const App = (props)=> {
  const [count, setCount] = useState(0);
  
  useEffect(()=>{
    document.title=`you clicked ${count} times`;
  })
  //在以下两个情况调用useEffect
//   componentDidMount(){
//     document.title=`you clicked ${this.StaticRange.count} times`
// }

// componentDidUpdate(){
//   document.title=`you clicked ${this.StaticRange.count} times`
// }


  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}>
          CLick me
      </button>
    </div>
  );  
};

export default App;