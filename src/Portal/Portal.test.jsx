import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import Portal from './Portal';

describe('Portal', () => {
    test('renders header correctly', () => {
        render(
            <MemoryRouter>
                <Portal/>
            </MemoryRouter>
        );
        const headerElement = screen.getByText('News Portal');
        expect(headerElement).toBeInTheDocument();
    });

    test('renders ISRO tab correctly', () => {
        render(
            <MemoryRouter>
                <Portal/>
            </MemoryRouter>
        );
        const isroTabElement = screen.getByText('ISRO');
        expect(isroTabElement).toBeInTheDocument();
    });

    test('renders UPI tab correctly', () => {
        render(
            <MemoryRouter>
                <Portal/>
            </MemoryRouter>
        );
        const upiTabElement = screen.getByText('UPI');
        expect(upiTabElement).toBeInTheDocument();
    });

    test('navigates to ISRO content when ISRO tab is clicked', () => {
        render(
            <MemoryRouter initialEntries={['/isro']}>
                <Portal/>
            </MemoryRouter>
        );
        const isroContentElement = screen.getByText('ISRO News');
        expect(isroContentElement).toBeInTheDocument();
    });

    test('navigates to UPI content when UPI tab is clicked', () => {
        render(
            <MemoryRouter initialEntries={['/upi']}>
                <Portal/>
            </MemoryRouter>
        );
        const upiContentElement = screen.getByText('UPI News');
        expect(upiContentElement).toBeInTheDocument();
    });
});
