import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevState) => prevState + 1);
  };
  const countDown = () => {
    setCount((prevState) => prevState - 1);
  };
  useEffect(() => {
    console.log(count);
    return () => {
      console.log("カウント計算しなおす");
    };
  }, [count]);
  return (
    <>
      <p>カウント数：{count}</p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
    </>
  );
};

export default Counter;
