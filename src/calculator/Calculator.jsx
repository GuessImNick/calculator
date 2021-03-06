import React, { useState } from "react";
import CalculatorButton from "../button/CalculatorButton";
import { CountDisplay } from "../countDisplay/CountDisplay";
import "./Calculator.css";

const Calculator = () => {
  const [count, setCount] = useState("0");
  const [tempCount, setTempCount] = useState("");
  const [operator, setOperator] = useState("");
  const operatorArr = ["/", "*", "-", "+"];

  const clickHandler = (char) => {
    if (char === "AC") {
      setCount("0");
      setTempCount("");
      setOperator("");
    } else if (char === "=") {
      if (tempCount && operator) {
        if (operator === "/") {
          setCount((prev) => {
            return parseInt(prev) / parseInt(tempCount);
          });
        } else if (operator === "-") {
          setCount((prev) => {
            return parseInt(prev) - parseInt(tempCount);
          });
        } else if (operator === "+") {
          setCount((prev) => {
            return parseInt(prev) + parseInt(tempCount);
          });
        } else if (operator === "*") {
          setCount((prev) => {
            return parseInt(prev) * parseInt(tempCount);
          });
        }
        setTempCount("");
        setOperator("");
      }
    } else if (operatorArr.includes(char)) {
      setOperator(char);
      if (count === "0") {
        if (tempCount === "") {
          setCount("0");
          setTempCount("");
        } else {
          setCount(tempCount);
          setTempCount("");
        }
      } else if (operator) {
        if (tempCount) {
          if (operator === "/") {
            setCount((prev) => {
              return parseInt(prev) / parseInt(tempCount);
            });
          } else if (operator === "-") {
            setCount((prev) => {
              return parseInt(prev) - parseInt(tempCount);
            });
          } else if (operator === "+") {
            setCount((prev) => {
              return parseInt(prev) + parseInt(tempCount);
            });
          } else if (operator === "*") {
            setCount((prev) => {
              return parseInt(prev) * parseInt(tempCount);
            });
          }
          setTempCount("");
        }
      }
    } else {
      setTempCount((prev) => prev + char);
    }
  };

  return (
    <div className="calculator">
      <CountDisplay count={count} tempCount={tempCount} />
      <div className="buttonGroup">
        <CalculatorButton char={"7"} onClick={clickHandler} />
        <CalculatorButton char={"8"} onClick={clickHandler} />
        <CalculatorButton char={"9"} onClick={clickHandler} />
        <CalculatorButton
          char={"/"}
          onClick={clickHandler}
          operator={operator}
        />
        <CalculatorButton char={"4"} onClick={clickHandler} />
        <CalculatorButton char={"5"} onClick={clickHandler} />
        <CalculatorButton char={"6"} onClick={clickHandler} />
        <CalculatorButton
          char={"*"}
          onClick={clickHandler}
          operator={operator}
        />
        <CalculatorButton char={"1"} onClick={clickHandler} />
        <CalculatorButton char={"2"} onClick={clickHandler} />
        <CalculatorButton char={"3"} onClick={clickHandler} />
        <CalculatorButton
          char={"-"}
          onClick={clickHandler}
          operator={operator}
        />
        <CalculatorButton char={"0"} onClick={clickHandler} />
        <CalculatorButton char={"="} onClick={clickHandler} />
        <CalculatorButton char={"AC"} onClick={clickHandler} />
        <CalculatorButton
          char={"+"}
          onClick={clickHandler}
          operator={operator}
        />
      </div>
    </div>
  );
};

export default Calculator;
