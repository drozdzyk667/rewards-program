import { render, fireEvent, screen } from '@testing-library/react';
import { PointsChart } from '../PointsChart.component';
import { mockCustomers } from '../../../utils/mockData';

test('PointsChart toggles between TotalPointsChart and PointsByMonths on button click', () => {
  render(<PointsChart customers={mockCustomers} />);
  
  expect(screen.queryByTestId('total-points-chart')).toBeNull();
  expect(screen.getAllByTestId('points-by-months-chart')).toBeTruthy();

  fireEvent.click(screen.getByRole('button'));

  expect(screen.getAllByTestId('total-points-chart')).toBeTruthy();
  expect(screen.queryByTestId('points-by-months-chart')).toBeNull();
});
