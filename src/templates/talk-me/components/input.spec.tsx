'use client';

import { render } from '@testing-library/react';
import { Input } from './input';
import type { FieldError } from 'react-hook-form';

const mockRegister = jest.fn();

jest.mock('react-hook-form', () => ({
	...jest.requireActual('react-hook-form'),
	useFormContext: jest.fn().mockReturnValue({
		register: (fieldName: string) => mockRegister(fieldName),
	}),
}));

describe('<Input />', () => {
	it('should render components', () => {
		const { getByTestId } = render(
			<Input data-testid='InputText' name='test' />,
		);

		const inputElement = getByTestId('InputText');
		expect(inputElement).toBeVisible();
	});

	it('should render input with correct props', () => {
		const { getByTestId } = render(
			<Input data-testid='InputText' name='test' placeholder='input text' />,
		);

		const inputElement = getByTestId('InputText');
		expect(inputElement).toHaveAttribute('placeholder', 'input text');
	});

	it('should call register with correct name of field', () => {
		render(
			<Input data-testid='InputText' name='test' />,
		)

		expect(mockRegister).toHaveBeenCalledWith('test');
	});

    it('should render with default border color when not receive error', ()=> {
        const { getByTestId } = render(
            <Input data-testid='InputText' name='test' />,
        );

        const inputElement = getByTestId('InputText');
        expect(inputElement).toHaveClass('border-zinc-700');
        expect(inputElement).not.toHaveClass('border-red-600');
    })

    it('should render with red border when receive error', ()=> {
        const { getByTestId } = render(
            <Input data-testid='InputText' name='test' errors={{message: 'error message'} as FieldError} />,
        );

        const inputElement = getByTestId('InputText');
        expect(inputElement).toHaveClass('border-red-600');
        expect(inputElement).not.toHaveClass('border-zinc-700');
    })
});
