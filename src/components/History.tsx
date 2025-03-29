import { Card, CardContent } from '@/components/ui/card.tsx';
import { FaTrash } from 'react-icons/fa';

const History = ({
  history,
  handleClearHistory,
  handleSelectHistory,
}: {
  history: string[];
  handleClearHistory: () => void;
  handleSelectHistory: (operation: string) => void;
}) => {
  return (
    <div className="w-full max-w-sm" data-testid="history-card">
      <Card className="bg-violet-950 rounded-lg shadow-lg">
        <CardContent>
          <div className="flex justify-between items-center text-white text-xl mb-2">
            <span>History:</span>
            <FaTrash
              onClick={handleClearHistory}
              className="cursor-pointer text-red-500 hover:text-red-700"
              size={20}
              data-testid="clear-history"
            />
          </div>
          <div
            className="bg-violet-800 p-4 rounded-lg text-white text-sm max-h-40 overflow-y-auto"
            data-testid="history-result"
          >
            {history.length ? (
              history.map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer hover:bg-violet-700 p-1 rounded"
                  onClick={() => handleSelectHistory(item)}
                  data-testid={`history-item-${index}`}
                >
                  {item}
                </div>
              ))
            ) : (
              <div>No history yet</div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default History;
