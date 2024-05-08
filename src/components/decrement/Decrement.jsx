import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc, selectCounter } from "../../context/counterSlice";

const Decrement = () => {
  const disabled = useSelector(selectCounter);

  const dispatch = useDispatch();
  const [InputValue, setInputValue] = useState("");

  const InputChange = (e) => setInputValue(e.target.value);

  const Decrement = () => {
    dispatch(inc(InputValue ? parseInt(-InputValue) : -1));
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Decrement"
        value={InputValue}
        onChange={InputChange}
      />
      <button disabled={disabled <= 1} onClick={Decrement}>
        -
      </button>
    </div>
  );
};

export default Decrement;
