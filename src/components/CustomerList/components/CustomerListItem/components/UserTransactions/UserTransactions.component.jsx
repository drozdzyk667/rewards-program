import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const UserTransactions = (props) => {
    const { transactions } = props;

    const groupedTransactions = useCallback(() => transactions.reduce((groups, transaction) => {
        const month = `Month ${new Date(transaction.date).getMonth() + 1}`;
        groups[month] = groups[month] || [];
        groups[month].push(transaction);
        return groups;
    }, {}), [transactions]);

    const sortedTransactions = useCallback(() => Object.fromEntries(Object.entries(groupedTransactions()).sort((a, b) => {
        const aDate = new Date(a[0]);
        const bDate = new Date(b[0]);
        return aDate - bDate;
    })), [groupedTransactions]);

    return (
        <>
            {Object.entries(sortedTransactions()).map(([month, transactions]) => (
                <Accordion key={month}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} id={month}>
                        <Typography>{month}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Table data-testid='table'>
                            <TableHead>
                                <TableRow data-testid='row'>
                                    <TableCell>Date</TableCell>
                                    <TableCell align="right">Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {transactions.map((transaction) => (
                                    <TableRow key={`${Math.random()} - ${transaction.id}`}>
                                        <TableCell data-testid='date-cell'>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                                        <TableCell data-testid='transaction-cell' align="right">${transaction.amount.toFixed(2)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </AccordionDetails>
                </Accordion>
            ))}
        </>
    );
};

UserTransactions.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            date: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
};