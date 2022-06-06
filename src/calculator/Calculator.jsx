import React from "react";
import CalculatorButton from "../button/CalculatorButton";
import { CountDisplay } from "../countDisplay/CountDisplay";
import "./Calculator.css";

const Calculator = () => {
  return (
    <div className="calculator">
      <CountDisplay />
      <div className="buttonGroup">
        <CalculatorButton char={"7"} color={"dark"} />
        <CalculatorButton char={"8"} color={"dark"} />
        <CalculatorButton char={"9"} color={"dark"} />
        <CalculatorButton char={"/"} color={"orange"} />
        <CalculatorButton char={"4"} color={"dark"} />
        <CalculatorButton char={"5"} color={"dark"} />
        <CalculatorButton char={"6"} color={"dark"} />
        <CalculatorButton char={"X"} color={"orange"} />
        <CalculatorButton char={"1"} color={"dark"} />
        <CalculatorButton char={"2"} color={"dark"} />
        <CalculatorButton char={"3"} color={"dark"} />
        <CalculatorButton char={"-"} color={"orange"} />
        <CalculatorButton char={"0"} color={"dark"} />
        <CalculatorButton char={"="} color={"orange"} />
        <CalculatorButton char={"AC"} color={"orange"} />
        <CalculatorButton char={"+"} color={"orange"} />
      </div>
    </div>
  );
};

export default Calculator;
