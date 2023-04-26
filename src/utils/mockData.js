import { faker } from '@faker-js/faker';

export const generateCustomerTransactions = (customerId) => {
  const transactions = Array.from({ length: faker.datatype.number({ min: 5, max: 10 }) }, () => {
    const amount = faker.datatype.number({ min: 20, max: 200 });
    const date = faker.date.between('2023-01-01', '2023-03-31');

    return {
      customerId,
      amount,
      date: date.toISOString().split('T')[0],
    };
  });

  return transactions;
};

export const mockCustomers = [{
  id: 1, name: 'Customer 1', pointsByMonth: [10, 20, 30],
  transactions: [{ id: 1, amount: 10, date: '2022-01-01' }, { id: 2, amount: 20, date: '2022-02-01' }, { id: 3, amount: 30, date: '2022-03-01' },],
},
{
  id: 2,
  name: 'Customer 2',
  pointsByMonth: [5, 10, 15],
  transactions: [
    { id: 4, amount: 5, date: '2022-01-01' },
    { id: 5, amount: 10, date: '2022-02-01' },
    { id: 6, amount: 15, date: '2022-03-01' },
  ],
},
];