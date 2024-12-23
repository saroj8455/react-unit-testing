import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { describe, expect, it, test } from 'vitest';

describe('App', () => {
	it('renders the App component', () => {
		render(<App />);
		// screen.debug(); // prints out the jsx in the App component unto the command line
	});
	it('render vite logo', () => {
		render(<App />);
		// Check for heading
		const heading = screen.getByText(/Vite \+ React/i);
		expect(heading).toBeInTheDocument();
		// Check if vite logo rendered
		const viteLogo = screen.getByAltText('Vite logo new');
		// screen.debug();
		expect(viteLogo).toBeInTheDocument();
	});
	test('increments count when button is clicked', () => {
		render(<App />);

		const button = screen.getByRole('button', { name: /count is 0/i });
		const countDisplay = screen.getByText(/count is 0/i);
		expect(countDisplay).toHaveTextContent('count is 0');
		// Simulate button click and check updated text
		fireEvent.click(button);
		expect(button).toHaveTextContent(/count is 1/i);
		fireEvent.click(button);
		expect(button).toHaveTextContent(/count is 2/i);
	});
});
