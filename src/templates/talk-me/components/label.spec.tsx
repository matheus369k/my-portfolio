'use client';

import { render } from '@testing-library/react';
import { Label } from './label';
import type { FieldError } from 'react-hook-form';

describe('<Label />', () => {
	it('should render component with correct text', () => {
		const { getByTestId } = render(<Label data-testid='TestLabel'>Test</Label>);

		const labelElement = getByTestId('TestLabel');
		expect(labelElement).toBeVisible();
	});

	it('should render with correct props', () => {
		const { getByTestId } = render(
			<Label data-testid='TestLabel' htmlFor='test'>
				Test
			</Label>,
		);

		const labelElement = getByTestId('TestLabel');
		expect(labelElement).toHaveAttribute('for', 'test');
		expect(labelElement).toHaveTextContent('Test');
	});

	it('should not render error element when there is not error', () => {
		const { queryByRole } = render(<Label data-testid='TestLabel'>Test</Label>);

		const errorElement = queryByRole('paragraph');
        expect(errorElement).not.toBeInTheDocument();
	});

    it('should render error element when there is error', () => {
        const { getByRole } = render(
            <Label data-testid='TestLabel' errors={{ message: 'Error message' } as FieldError}>
                Test
            </Label>
        );

        const errorElement = getByRole('paragraph');
        expect(errorElement).toHaveTextContent('Error message');
    })
});
