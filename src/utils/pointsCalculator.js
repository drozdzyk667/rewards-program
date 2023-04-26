import { POINTS_THRESHOLD1, POINTS_THRESHOLD2 } from '../helpers/constants';

export const calculateRewardPoints = (amount) => {
    let points = 0;
  
    if (amount > POINTS_THRESHOLD2) {
      points += (amount - POINTS_THRESHOLD2) * 2;
      amount = POINTS_THRESHOLD2;
    }
  
    if (amount > POINTS_THRESHOLD1) {
      points += amount - POINTS_THRESHOLD1;
    }
  
    return points;
  };
  
  export const filterTransactionsByMonth = (transactions, month) => {
    const filteredTransactions = transactions.filter((transaction) => {
      const transactionMonth = new Date(transaction.date).getMonth();
      return transactionMonth === month;
    });
  
    return filteredTransactions;
  };
  