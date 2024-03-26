import { useState } from "react";

function App() {
 return (
  <>
   <Counter></Counter>
  </>
 );
}

function Counter() {
 const [step, setStep] = useState(1);
 const [count, setCount] = useState(0);

 function handleReset() {
  setStep(1);
  setCount(0);
 }

 return (
  <>
   <div className="controller step">
    <input
     onChange={(e) => setStep(Number(e.target.value))}
     value={step}
     type="range"
     id=""
     min="0"
     max="10"
    />
    <p>Step: {step}</p>
   </div>
   <div className="controller count">
    <button onClick={() => setCount((c) => c - step)}>-</button>
    <input
     type="text"
     value={count}
     onChange={(e) => setCount(Number(e.target.value))}
    />
    <button onClick={() => setCount((c) => c + step)}>+</button>
   </div>

   <DateCalculation count={count}></DateCalculation>
   {count !== 0 || step !== 1 ? (
    <button onClick={handleReset}>RESET</button>
   ) : null}
  </>
 );
}

function DateCalculation({ count }) {
 const date = new Date();
 date.setDate(date.getDate() + count);
 return (
  <div>
   <span>
    {count} day{count > 1 || count < -1 ? "s" : ""}{" "}
   </span>
   <span>{count > 0 ? "from" : "before"} today </span>
   <span>{date.toDateString()}</span>
  </div>
 );
}

export default App;
