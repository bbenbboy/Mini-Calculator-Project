import "./style.css";
import { useState } from "react";

function App() {
  return (
    <>
      <Body />
    </>
  );
}
function Body() {
  // to set and print the input value
  const [inputValue, setInputValue] = useState("");

  // to print out the result from the input
  const [result, setResult] = useState("");

  function appendToInput(value) {
    setInputValue(inputValue + value);
  }

  function calculate() {
    const calculation = eval(inputValue);
    setInputValue("");
    setResult(calculation);
  }

  function reset() {
    setInputValue("");
    setResult("");
  }

  return (
    <section>
      <h1>Calculator</h1>
      <div className="input-container">
        <input
          type="text"
          id="input"
          className="result"
          value={inputValue ? inputValue : result}
          readOnly
        />
      </div>
      <div className="buttons-container">
        <button onClick={() => appendToInput("1")} className="btn">
          1
        </button>
        <button onClick={() => appendToInput("2")} className="btn">
          2
        </button>
        <button onClick={() => appendToInput("3")} className="btn">
          3
        </button>
        <button onClick={() => appendToInput("+")} className="operator">
          +
        </button>

        <button onClick={() => appendToInput("4")} className="btn">
          4
        </button>
        <button onClick={() => appendToInput("5")} className="btn">
          5
        </button>
        <button onClick={() => appendToInput("6")} className="btn">
          6
        </button>
        <button onClick={() => appendToInput("-")} className="operator">
          -
        </button>

        <button onClick={() => appendToInput("7")} className="btn">
          7
        </button>
        <button onClick={() => appendToInput("8")} className="btn">
          8
        </button>
        <button onClick={() => appendToInput("9")} className="btn">
          9
        </button>
        <button onClick={() => appendToInput("*")} className="operator">
          x
        </button>

        <button onClick={() => appendToInput("0")} className="btn">
          0
        </button>
        <button onClick={() => appendToInput(".")} className="btn">
          .
        </button>
        <button onClick={() => appendToInput("/")} lass="operator">
          %
        </button>
        <button onClick={calculate}>=</button>
        <button onClick={reset} className="reset btn">
          RESET
        </button>
      </div>
    </section>
  );
}

export default App;
