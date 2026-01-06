import { useEffect, useState } from "react";
import Display from "./Display";
import Button from "./Button";
import { calculate } from "../utils/calculate";

const buttons = [
  "AC",
  "DEL",
  "/",
  "*",
  "7",
  "8",
  "9",
  "-",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "=",
  "0",
  ".",
];

const Calculator = () => {
  const [value, setValue] = useState("");

  const handleClick = (btn) => {
    if (btn === "AC") return setValue("");
    if (btn === "DEL") return setValue(value.slice(0, -1));
    if (btn === "=") return setValue(calculate(value));
    setValue(value + btn);
  };

  //  Keyboard Support
  useEffect(() => {
    const handleKey = (e) => {
      if (/[\d+\-*/.]/.test(e.key)) setValue((v) => v + e.key);
      if (e.key === "Enter") setValue(calculate(value));
      if (e.key === "Backspace") setValue((v) => v.slice(0, -1));
      if (e.key === "Escape") setValue("");
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [value]);

  return (
    <div className="calculator">
      <Display value={value} />
      <div className="grid">
        {buttons.map((btn) => (
          <Button key={btn} text={btn} onClick={() => handleClick(btn)} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
