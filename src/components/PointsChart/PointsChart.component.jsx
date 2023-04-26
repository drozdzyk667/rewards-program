import { useCallback, useState } from 'react';
import Button from "@mui/material/Button";
import PropTypes from 'prop-types';
import { TotalPointsChart } from './components/TotalPointsChart/TotalPointsChart.component';
import { PointsByMonths } from './components/PointsByMonths/PointsByMonths.component';
import Box from '@mui/material/Box';
import classes from './PointsChart.module.css';

export const PointsChart = (props) => {
    const { customers } = props;

    const [showTotalPoints, setShowTotalPoints] = useState(false);

    const toggleChart = () => {
        setShowTotalPoints((prevState) => !prevState);
    };

    const initialData = useCallback(() => customers.map((customer) => ({
        name: customer.name,
        'Month 1': customer.pointsByMonth[0],
        'Month 2': customer.pointsByMonth[1],
        'Month 3': customer.pointsByMonth[2],
    })), [customers]);

    return (
        <Box className={classes.chartContainer}>
            <Button variant='contained' onClick={toggleChart}>
                {showTotalPoints ? 'Show Monthly Points' : 'Show Total Points'}
            </Button>
            {showTotalPoints ? (
                <TotalPointsChart initialData={initialData()} />
            ) : (
                <PointsByMonths initialData={initialData()} />
            )}
        </Box>
    );
};

PointsChart.propTypes = {
    customers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            transactions: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    date: PropTypes.string.isRequired,
                    amount: PropTypes.number.isRequired,
                }).isRequired
            ).isRequired,
            pointsByMonth: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
        }).isRequired
    ).isRequired,
};