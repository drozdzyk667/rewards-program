import { render, screen } from '@testing-library/react';
import { UserTransactions } from '../UserTransactions.component';

describe('UserTransactions', () => {
  it('should render a table with the correct data', () => {
    const transactions = [
      { id: 1, date: '2022-01-01', amount: 100 },
      { id: 2, date: '2022-01-15', amount: 50 },
      { id: 3, date: '2022-02-01', amount: 75 },
      { id: 4, date: '2022-03-01', amount: 125 },
    ];

    render(<UserTransactions transactions={transactions} />);

    expect(screen.getAllByTestId('table')).toBeTruthy();
    expect(screen.getAllByTestId('row', { name: /date amount/i })).toBeTruthy();
    expect(screen.getAllByTestId('row', { name: /january 2022/i })).toBeTruthy();
    expect(screen.getAllByTestId('row', { name: /february 2022/i })).toBeTruthy();
    expect(screen.getAllByTestId('row', { name: /march 2022/i })).toBeTruthy();

    expect(screen.getAllByTestId('date-cell', { name: /01\/01\/2022/i })).toBeTruthy();
    expect(screen.getAllByTestId('transaction-cell', { name: /\$100.00/i })).toBeTruthy();

    expect(screen.getAllByTestId('date-cell', { name: /01\/15\/2022/i })).toBeTruthy();
    expect(screen.getAllByTestId('transaction-cell', { name: /\$50.00/i })).toBeTruthy();

    expect(screen.getAllByTestId('date-cell', { name: /02\/01\/2022/i })).toBeTruthy();
    expect(screen.getAllByTestId('transaction-cell', { name: /\$75.00/i })).toBeTruthy();

    expect(screen.getAllByTestId('date-cell', { name: /03\/01\/2022/i })).toBeTruthy();
    expect(screen.getAllByTestId('transaction-cell', { name: /\$125.00/i })).toBeTruthy();
  });
});