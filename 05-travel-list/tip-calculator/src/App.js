import { useState } from "react";

function App() {
  return <TipCalculator></TipCalculator>;
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tipYou, setTipYou] = useState(10);
  const [tipFriend, setTipFriend] = useState(10);

  const tipRate = (tipYou + tipFriend) / 2;
  const tip = bill * (tipRate / 100);
  const pay = `You pay $${bill + tip} ( $${bill} + $${tip} tip )`;

  function handleReset() {
    setBill(0);
    setTipYou(10);
    setTipFriend(10);
  }
  return (
    <div>
      <BillInput bill={bill} onInput={setBill}></BillInput>
      <SelectTip tip={tipYou} onSelectedTip={setTipYou}>
        <span>How much did you like the service</span>
      </SelectTip>
      <SelectTip tip={tipFriend} onSelectedTip={setTipFriend}>
        <span>How much did your friend like the service</span>
      </SelectTip>
      <Output pay={pay}></Output>
      <Reset onReset={handleReset}></Reset>
    </div>
  );
}

function BillInput({ onInput, bill }) {
  return (
    <>
      <span>How much was the bill</span>
      <input value={bill} onChange={(e) => onInput(Number(e.target.value))} />
    </>
  );
}

function SelectTip({ children, tip, onSelectedTip }) {
  return (
    <div>
      {children}
      <select
        value={tip}
        onChange={(e) => onSelectedTip(Number(e.target.value))}
      >
        <option value="0">Sehr schlecht ( 0% ) </option>
        <option value="10">Gut ( 10 % )</option>
        <option value="20">Sehr gut ( 20 % ) </option>
      </select>
    </div>
  );
}

function Output({ pay }) {
  return <div>{pay}</div>;
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;
