let history: string[] = [];

export function calculate(expression: string): string {
  try {
    const result = eval(expression);
    history.push(`${expression} = ${result}`);
    return result;
  } catch (e) {
    console.error(`Invalid expression : ${e}`);
    return 'Invalid expression';
  }
}

export function getHistory(): string[] {
  return history;
}

export function clearHistory(): void {
  history = [];
}
