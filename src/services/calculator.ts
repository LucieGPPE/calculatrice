let history: string[] = [];

export function calculate(expression: string): string {
  try {
    const sanitizedExpression: string = expression.replace(
      /\b0+([0-9]+)/g,
      '$1',
    );
    const result: string = eval(sanitizedExpression);
    history.push(`${sanitizedExpression} = ${result}`);
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
