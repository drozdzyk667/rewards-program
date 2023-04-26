import { render, screen } from '@testing-library/react';
import { CustomerList } from '../CustomerList.component';
import { mockCustomers } from '../../../utils/mockData';

describe('CustomerList', () => {
    it('should render a table for each customer', () => {
        render(<CustomerList customers={mockCustomers} />);

        expect(screen.getAllByRole('table')).toHaveLength(2);
    });

    it('should render the customer name in the table header', () => {
        render(<CustomerList customers={mockCustomers} />);

        expect(screen.getByText('Customer 1')).toBeTruthy();
        expect(screen.getByText('Customer 2')).toBeTruthy();
    });

    it('should render the points by month for each customer', () => {
        render(<CustomerList customers={mockCustomers} />);

        expect(screen.getAllByText('Month 1')).toBeTruthy();
        expect(screen.getAllByText('Month 2')).toBeTruthy();
        expect(screen.getAllByText('Month 3')).toBeTruthy();

        expect(screen.getAllByText('10')).toBeTruthy();
        expect(screen.getAllByText('20')).toBeTruthy();
        expect(screen.getAllByText('30')).toBeTruthy();
        expect(screen.getAllByText('5')).toBeTruthy();
        expect(screen.getAllByText('10')).toBeTruthy();
        expect(screen.getAllByText('15')).toBeTruthy();
    });

    it('should render the total points for each customer', () => {
        render(<CustomerList customers={mockCustomers} />);

        expect(screen.getAllByText('30')).toBeTruthy();
    });

    it('should render the specific transactions for each customer', () => {
        render(<CustomerList customers={mockCustomers} />);

        expect(screen.getAllByText('Specific transactions')).toBeTruthy();

        expect(screen.getAllByText('$10.00')).toBeTruthy();
        expect(screen.getByText('$20.00')).toBeTruthy();
        expect(screen.getByText('$30.00')).toBeTruthy();
        expect(screen.getByText('$5.00')).toBeTruthy();
    });
});