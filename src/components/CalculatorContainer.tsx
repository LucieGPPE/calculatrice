import { useState } from 'react';
import { calculate, clearHistory, getHistory } from '@/services/calculator.ts';
import History from '@/components/History.tsx';
import Calculator from '@/components/Calculator.tsx';

const CalculatorApp = () => {
  const [input, setInput] = useState<string>('');
  const [history, setHistory] = useState<string[]>(getHistory());

  const handleClick = (val: string) => {
    setInput(input + val);
  };

  const handleCalculate = () => {
    setInput(calculate(input));
    setHistory(getHistory());
  };

  const handleClearHistory = () => {
    clearHistory();
    setHistory([]);
  };

  const handleSelectHistory = (operation: string) => {
    setInput(operation.split('=')[1].trim());
  };

  return (
    <div className="flex w-5xl justify-around  p-6">
      <Calculator
        input={input}
        setInput={setInput}
        handleClick={handleClick}
        handleCalculate={handleCalculate}
      />
      <History
        history={history}
        handleClearHistory={handleClearHistory}
        handleSelectHistory={handleSelectHistory}
      />
    </div>
  );
};

export default CalculatorApp;
