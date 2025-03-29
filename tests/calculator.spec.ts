import { expect, test } from '@playwright/test';

test.describe('Main page', () => {
  test.beforeEach(async ({ page }) => {
    console.log(`Running ${test.info().title}`);
    await page.goto('http://localhost:5173/');
  });

  test('should display caclulator', async ({ page }) => {
    await expect(page).toHaveTitle('Calculator');
    await expect(page.getByTestId('calculator-card')).toBeVisible();
  });

  test('should display history', async ({ page }) => {
    await expect(page).toHaveTitle('Calculator');
    await expect(page.getByTestId('history-card')).toBeVisible();
  });

  test('should calculate a simple operation', async ({ page }) => {
    await expect(page).toHaveTitle('Calculator');
    const calculator = page.getByTestId('calculator-card');
    await addAOperation(calculator);
    await expect(page.getByTestId('result')).toHaveValue('3');
  });

  test('should clear the operation input', async ({ page }) => {
    await expect(page).toHaveTitle('Calculator');
    const calculator = page.getByTestId('calculator-card');
    await addAOperation(calculator);
    await calculator.getByTestId('clear').click();
    await expect(page.getByTestId('result')).toHaveValue('');
  });

  test('should delete the last input', async ({ page }) => {
    const calculator = page.getByTestId('calculator-card');
    await calculator.getByRole('button', { name: '1' }).click();
    await calculator.getByRole('button', { name: '2' }).click();
    await calculator.getByTestId('delete').click();
    await expect(page.getByTestId('result')).toHaveValue('1');
  });

  test('should show operations in the history', async ({ page }) => {
    const history = page.getByTestId('history-card');
    const calculator = page.getByTestId('calculator-card');
    await addAOperation(calculator);
    await expect(history.getByTestId('history-result')).toHaveText('1+2 = 3');
  });

  test('should delete all history', async ({ page }) => {
    const history = page.getByTestId('history-card');
    const calculator = page.getByTestId('calculator-card');
    await addAOperation(calculator);
    await history.getByTestId('clear-history').click();
    await expect(history.getByTestId('history-result')).toHaveText(
      'No history yet',
    );
  });
});

const addAOperation = async (calculator) => {
  await calculator.getByRole('button', { name: '1' }).click();
  await calculator.getByRole('button', { name: '+' }).click();
  await calculator.getByRole('button', { name: '2' }).click();
  await calculator.getByRole('button', { name: '=' }).click();
};
