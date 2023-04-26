import { useState, useEffect, useCallback } from 'react';
import { fetchData } from './services/apiService';
import { CustomerList } from './components/CustomerList/CustomerList.component';
import { PointsChart } from './components/PointsChart/PointsChart.component';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { filterTransactionsByMonth, calculateRewardPoints } from './utils/pointsCalculator';
import { arrayOfMonths } from './helpers/constants';
import classes from './App.module.css';
import { UserSlider } from './components/UserSlider/UserSlider.component';
import { DEFAULT_AMOUNT_OF_USERS } from './helpers/constants';
import Alert from '@mui/material/Alert';
import { Header } from './components/Header/Header.component';

export const App = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(DEFAULT_AMOUNT_OF_USERS);
  const [isFetchError, setIsFetchError] = useState(false);

  const handleChangeUsers = useCallback((_event, newValue) => {
    setUsers(newValue);
  }, []);

  const fetchAndCalculatePoints = useCallback(async () => {
    try {
      const fetchedCustomers = await fetchData(users);

      const updatedCustomers = fetchedCustomers.map((customer) => {
        const pointsByMonth = arrayOfMonths.map((month) => {
          const filteredTransactions = filterTransactionsByMonth(customer.transactions, month);
          const points = filteredTransactions.map((transaction) => calculateRewardPoints(transaction.amount));
          return points.reduce((acc, curr) => acc + curr, 0);
        });

        return {
          ...customer,
          pointsByMonth,
        };
      });

      setCustomers(updatedCustomers);
      setLoading(false);

    } catch (error) {
      console.error(error);
      setIsFetchError(true);
    }
  }, [users]);

  useEffect(() => {
    fetchAndCalculatePoints();
  }, [fetchAndCalculatePoints]);

  if (loading) {
    return (
      <Box className={classes.rootContainer}>
        <CircularProgress />
      </Box>
    )
  }

  if (isFetchError) {
    return (
      <Alert severity="error">App has failed fetching data</Alert>
    )
  }

  return (
    <Box className={classes.rootContainer}>
      <Header />
      <UserSlider onChangeUsers={handleChangeUsers} users={users} />
      <PointsChart customers={customers} />
      <CustomerList customers={customers} />
    </Box>
  );
};