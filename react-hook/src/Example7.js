import React, { useState, useMemo } from "react";
function Example7() {
  const [xiaohong, setXiaohong] = useState("小红在待客状态");
  const [zhiling, setZhiling] = useState("志玲在待客状态");
  return (
    <>
      <button
        onClick={() => {
          setXiaohong(new Date().getTime());
        }}
      >
        小红
      </button>
      <button
        onClick={() => {
          setZhiling(new Date().getTime() + "志玲向我们走来");
        }}
      >
        志玲
      </button>
      <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
    </>
  );
}
function ChildComponent({ name, children }) {
  // props.children
  // 使用自定义组件的时候，可以在其中嵌套 JSX 结构。嵌套的结构在组件内部都可以通过 props.children 获取到.
  // props.children其实是个数组，React.js 就是把我们嵌套的 JSX 元素一个个都放到数组当中，然后通过 props.children 传给了 自定义的组件。
  //children的意思是父组件往该组件标签里内插入的内容
  function changeXiaohong() {
    console.log("她来了，她来了，小红向我们走来");
    return name + ",小红向我们走来了";
  }
  const actionXiaohong = useMemo(() => changeXiaohong(name), [name]); //当name发生变化的时候执行
  return (
    <>
      <div>{actionXiaohong}</div>
      <div>{children}</div>
    </>
  );
}
export default Example7;
