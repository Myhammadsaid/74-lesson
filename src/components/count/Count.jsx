import React from "react";
import { useSelector } from "react-redux";

const Count = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1 className="count">{count}</h1>
    </div>
  );
};

export default Count;
