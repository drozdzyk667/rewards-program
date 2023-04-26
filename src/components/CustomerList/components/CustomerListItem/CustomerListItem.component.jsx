import PropTypes from 'prop-types';
import { Table, TableHead, TableRow, TableCell, TableBody, Box } from '@mui/material';
import { arrayOfMonths } from '../../../../helpers/constants';
import { UserTransactions } from './components/UserTransactions/UserTransactions.component';

import classes from './CustomerListItem.module.css';

export const CustomerListItem = (props) => {
    const { customer } = props;

    return (
        <Box>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={5} className={classes.tableCellHeader}>
                            <Box className={classes.customerName}>{customer.name}</Box>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        {arrayOfMonths.map((month) => <TableCell key={month} align="right" className={classes.tableCellBorderRight}>{`Month ${month + 1}`}</TableCell>)}
                        <TableCell className={classes.tableCellHeader}>
                            <strong>Total</strong>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {customer.pointsByMonth.map((points) => <TableCell key={`${customer.id}-${points}-${Math.random()}`} align="right" className={classes.tableCellBorderRight}>{points}</TableCell>)}
                        <TableCell className={classes.tableCellHeader}>
                            <Box className={classes.tableTotal}>
                                <strong>{customer.pointsByMonth.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</strong>
                            </Box>
                        </TableCell>
                    </TableRow>
                    <TableRow className={classes.tableRow}>
                        <TableCell colSpan={5}>
                            <Box className={classes.label}>Specific transactions</Box>
                            <UserTransactions transactions={customer.transactions} />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    );
};

CustomerListItem.propTypes = {
    customer: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        pointsByMonth: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
        transactions: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                amount: PropTypes.number.isRequired,
                date: PropTypes.string.isRequired,
            })).isRequired
    }),
};