import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { DEFAULT_CHART_HEIGHT, DEFAULT_CHART_WIDTH } from '../../../../helpers/constants';
import Box from '@mui/material/Box';

export const TotalPointsChart = (props) => {
    const { initialData } = props;

    return (
        <Box data-testid="total-points-chart">
            <BarChart
                width={DEFAULT_CHART_WIDTH}
                height={DEFAULT_CHART_HEIGHT}
                data={initialData.map((d) => ({
                    ...d,
                    'Total Points': d['Month 1'] + d['Month 2'] + d['Month 3'],
                }))}
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
                <Bar dataKey="Total Points" fill="#8884d8" />
            </BarChart>
        </Box>
    )
}

TotalPointsChart.propTypes = {
    initialData: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            'Month 1': PropTypes.number.isRequired,
            'Month 2': PropTypes.number.isRequired,
            'Month 3': PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
};