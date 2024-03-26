// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState, useEffect } from "react";

export default function App() {
  const [input, setInput] = useState(1);
  const [output, setOutput] = useState("");
  const [inputCurrency, setInputCurrency] = useState("EUR");
  const [outputCurrency, setOutputCurrency] = useState("USD");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchOutput() {
      setIsLoading(true);

      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${input}&from=${inputCurrency}&to=${outputCurrency}`
      );

      const data = await res.json();
      setOutput(data.rates[outputCurrency]);
      setIsLoading(false);
    }
    if (inputCurrency === outputCurrency) {
      setOutput(input);
      return;
    }
    fetchOutput();
  }, [input, inputCurrency, outputCurrency]);

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isLoading}
        type="number"
      />
      <select
        value={inputCurrency}
        onChange={(e) => setInputCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={outputCurrency}
        onChange={(e) => setOutputCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {output} {outputCurrency}{" "}
      </p>
    </div>
  );
}
