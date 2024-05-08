import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "../../context/counterSlice";
const Reset = () => {
  const dispatch = useDispatch();
  return (
    <div className="reset-box">
      <button className="reset" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
};

export default Reset;
