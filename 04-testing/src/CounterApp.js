import React, { useState } from "react";
import PropTypes from "prop-types";
//clickevent:

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const increaseValue = (e) => {
    // setCounter(counter + 1);
    setCounter((c) => c + 1);
  };
  const resetValue = (e) => {
    // setCounter(0);
    setCounter((c) => value);
  };
  const decreaseValue = (e) => {
    // setCounter(counter - 1);
    setCounter((c) => c - 1);
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={increaseValue}>+1</button>
      <button onClick={resetValue}>reset</button>
      <button onClick={decreaseValue}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  value: 10,
};

export default CounterApp;
