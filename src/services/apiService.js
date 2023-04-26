import { generateCustomerTransactions } from '../utils/mockData';
import { MOCK_API_RESPONSE_TIME, MIN_AMOUNT_OF_USERS } from '../helpers/constants'

export const fetchData = async (amount) => {
  try {
    if (typeof amount !== 'number' || amount < MIN_AMOUNT_OF_USERS) {
      throw new Error('Amount must be a positive number higher than 2');
    }

    const customers = Array.from({ length: amount }, (_, index) => {
      const id = index + 1;
      const name = `User ${id}`;
      const transactions = generateCustomerTransactions(id).sort((a, b) => new Date(a.date) - new Date(b.date));

      return {
        id,
        name,
        transactions,
      };
    });

    return await new Promise((resolve) => {
      setTimeout(() => resolve(customers), MOCK_API_RESPONSE_TIME);
    });
  } catch (error) {
    console.error(error);
    return [];
  }
};