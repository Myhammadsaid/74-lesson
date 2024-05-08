import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { inc } from "../../context/counterSlice";

const Increment = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const InputChange = (e) => setInputValue(e.target.value);

  const Increment = () => {
    dispatch(inc(inputValue ? parseInt(inputValue) : 1));
    setInputValue("");
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Increment"
        value={inputValue}
        onChange={InputChange}
      />
      <button onClick={Increment}>+</button>
    </div>
  );
};

export default Increment;
