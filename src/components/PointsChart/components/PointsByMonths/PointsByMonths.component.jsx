import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { DEFAULT_CHART_HEIGHT, DEFAULT_CHART_WIDTH } from '../../../../helpers/constants';
import Box from '@mui/material/Box';

export const PointsByMonths = (props) => {
    const { initialData } = props;

    return (
        <Box data-testid="points-by-months-chart">
            <BarChart
                width={DEFAULT_CHART_WIDTH}
                height={DEFAULT_CHART_HEIGHT}
                data={initialData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Points', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Month 1" fill="#8884d8" />
                <Bar dataKey="Month 2" fill="#82ca9d" />
                <Bar dataKey="Month 3" fill="#ffc658" />
            </BarChart>
        </Box>
    )
}

PointsByMonths.propTypes = {
    initialData: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            'Month 1': PropTypes.number.isRequired,
            'Month 2': PropTypes.number.isRequired,
            'Month 3': PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
};