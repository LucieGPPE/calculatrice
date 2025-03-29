import { Button } from '@/components/ui/button.tsx';
import { Card, CardContent } from '@/components/ui/card.tsx';

const Calculator = ({
  input,
  setInput,
  handleClick,
  handleCalculate,
}: {
  input: string;
  setInput: (input: string) => void;
  handleClick: (val: string) => void;
  handleCalculate: () => void;
}) => {
  return (
    <Card
      className="w-full max-w-sm bg-violet-950 rounded-lg shadow-lg"
      data-testid="calculator-card"
    >
      <CardContent>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-violet-900 p-4 rounded-lg text-white text-right mb-4 text-xl w-full"
          placeholder="0"
          data-testid="result"
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
            data-testid="clear"
          >
            Clear
          </Button>
          <Button
            onClick={() => setInput(input.slice(0, -1))}
            className="p-4 text-xl bg-purple-400 text-white rounded-lg"
            data-testid="delete"
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Calculator;
