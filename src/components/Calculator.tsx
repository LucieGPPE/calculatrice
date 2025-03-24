import { useState } from 'react';
import { Button } from '@/components/ui/button.tsx';
import { Card, CardContent } from '@/components/ui/card.tsx';
import { calculate, clearHistory, getHistory } from '@/services/calculator.ts';
import { FaTrash } from 'react-icons/fa';

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

  return (
    <div className="flex w-5xl justify-around  p-6">
      <Card className="w-full max-w-sm bg-violet-950 rounded-lg shadow-lg">
        <CardContent>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-violet-900 p-4 rounded-lg text-white text-right mb-4 text-xl w-full"
            placeholder="0"
          />
          <div className="grid grid-cols-4 gap-2">
            {['7', '8', '9', '/'].map((val) => (
              <Button
                key={val}
                onClick={() => handleClick(val)}
                className="p-4 text-xl bg-violet-800 text-white rounded-lg"
              >
                {val}
              </Button>
            ))}
            {['4', '5', '6', '*'].map((val) => (
              <Button
                key={val}
                onClick={() => handleClick(val)}
                className="p-4 text-xl bg-violet-800 text-white rounded-lg"
              >
                {val}
              </Button>
            ))}
            {['1', '2', '3', '-'].map((val) => (
              <Button
                key={val}
                onClick={() => handleClick(val)}
                className="p-4 text-xl bg-violet-800 text-white rounded-lg"
              >
                {val}
              </Button>
            ))}
            {['0', '.', '=', '+'].map((val) => (
              <Button
                key={val}
                onClick={() =>
                  val === '=' ? handleCalculate() : handleClick(val)
                }
                className="p-4 text-xl bg-violet-800 text-white rounded-lg"
              >
                {val}
              </Button>
            ))}
            <Button
              onClick={() => setInput('')}
              className="col-span-2 p-4 text-xl bg-fuchsia-400 text-white rounded-lg"
            >
              Clear
            </Button>
            <Button
              onClick={() => setInput(input.slice(0, -1))}
              className="p-4 text-xl bg-purple-400 text-white rounded-lg"
            >
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="w-full max-w-sm">
        <Card className="bg-violet-950 rounded-lg shadow-lg">
          <CardContent>
            <div className="flex justify-between items-center text-white text-xl mb-2">
              <span>History:</span>
              <FaTrash
                onClick={handleClearHistory}
                className="cursor-pointer text-red-500 hover:text-red-700"
                size={20}
              />
            </div>
            <div className="bg-violet-800 p-4 rounded-lg text-white text-sm max-h-40 overflow-y-auto">
              {history.length ? (
                history.map((item, index) => <div key={index}>{item}</div>)
              ) : (
                <div>No history yet</div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CalculatorApp;
