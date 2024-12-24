'use client';

import { Title } from './title';
import { render } from '@testing-library/react';

describe('<Title />', () => {
	it('should render the title', () => {
		const { getByText } = render(<Title>Hello World</Title>);
		expect(getByText('Hello World')).toBeInTheDocument();
	});

	it('should render the title with a custom class', () => {
		const { getByText } = render(<Title className='test'>Hello World</Title>);
		expect(getByText('Hello World')).toHaveClass('test');
	});

	it('should render the title with a prop', () => {
		const { getByText } = render(<Title id='test'>Hello World</Title>);
		expect(getByText('Hello World')).toHaveAttribute('id', 'test');
	});
});
