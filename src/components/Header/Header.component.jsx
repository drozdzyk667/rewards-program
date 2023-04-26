import Box from '@mui/material/Box';
import classes from './Header.module.css';
import { Typography } from '@mui/material';

export const Header = () => {

    return (
        <Box className={classes.headerContainer}>
            <h1>Rewards Program</h1>
            <h4 className={classes.subHeader}>Technical rules:</h4>
            <Typography variant='caption'>
                A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar
                spent between $50 and $100 in each transaction.
                (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
            </Typography>
        </Box>
    )
}