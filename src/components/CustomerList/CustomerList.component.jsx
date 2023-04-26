import PropTypes from 'prop-types';
import { TableContainer, Box, Typography } from '@mui/material';
import { CustomerListItem } from './components/CustomerListItem/CustomerListItem.component';

import classes from './CustomerList.module.css';

export const CustomerList = (props) => {
  const { customers } = props;

  return (
    <Box className={classes.rootContainer}>
      <Typography variant='h5'>Customers Detailed Points List</Typography>
      <TableContainer component={Box} className={classes.tableContainer}>
        {customers.map((customer) => <CustomerListItem key={customer.id} customer={customer} />)}
      </TableContainer>
    </Box>
  );
};

CustomerList.propTypes = {
  customers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      pointsByMonth: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      transactions: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          amount: PropTypes.number.isRequired,
          date: PropTypes.string.isRequired,
        })).isRequired
    })
  ).isRequired,
};