import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setNum1,
  setNum2,
  add,
  subtract,
  multiply,
  divide,
} from "../../store/calculatorSlice";
import "./calculator.css";

function Calculator() {
  const { num1, num2, result } = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  const handleNum1Change = (e) => {
    const value = e.target.value;
    dispatch(setNum1(value === "" ? "" : Number(value)));
  };

  const handleNum2Change = (e) => {
    const value = e.target.value;
    dispatch(setNum2(value === "" ? "" : Number(value)));
  };

  const handleOperation = (operation) => {
    switch (operation) {
      case "+":
        dispatch(add());
        break;
      case "-":
        dispatch(subtract());
        break;
      case "*":
        dispatch(multiply());
        break;
      case "/":
        dispatch(divide());
        break;
      default:
        break;
    }
  };

  const roundedResult = Number.isInteger(result) ? result : result.toFixed(1);

  return (
    <div className="calculator">
      <div className="input-container">
        <input type="number" value={num1} onChange={handleNum1Change} />
      </div>
      <div className="input-container">
        <input type="number" value={num2} onChange={handleNum2Change} />
      </div>
      <div className="button-container">
        <button onClick={() => handleOperation("+")}>+</button>
        <button onClick={() => handleOperation("-")}>-</button>
        <button onClick={() => handleOperation("*")}>*</button>
        <button onClick={() => handleOperation("/")}>/</button>
      </div>
      <div>
      <h3>Результат: {roundedResult}</h3></div>
    </div>
  );
}

export default Calculator;
