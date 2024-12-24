'use client';

import { render } from '@testing-library/react';
import { AvatarBorder } from './avatar-border';

describe('<AvatarBorder />', () => {
	it('should render default avatar border', () => {
		const { getByTestId } = render(<AvatarBorder data-testid='AvatarBorder' />);

		const avatarBorderElement = getByTestId('AvatarBorder');

		expect(avatarBorderElement).toBeVisible();
		expect(avatarBorderElement).toHaveClass('animation-rotate-border');
		expect(avatarBorderElement).toHaveClass('border-t-transparent');
	});

	it('should render avatar border with animation reverse', () => {
		const { getByTestId } = render(
			<AvatarBorder animation='reverse' data-testid='AvatarBorder' />,
		);
		expect(getByTestId('AvatarBorder')).toHaveClass(
			'animation-rotate-border-reverse',
		);
	});

	it('should render avatar border with animation normal', () => {
		const { getByTestId } = render(
			<AvatarBorder animation='normal' data-testid='AvatarBorder' />,
		);
		expect(getByTestId('AvatarBorder')).toHaveClass('animation-rotate-border');
	});

	it('should render avatar border with hidden border left', () => {
		const { getByTestId } = render(
			<AvatarBorder hiddenBorder='left' data-testid='AvatarBorder' />,
		);
		expect(getByTestId('AvatarBorder')).toHaveClass('border-l-transparent');
	});

	it('should render avatar border with hidden border top', () => {
		const { getByTestId } = render(
			<AvatarBorder hiddenBorder='top' data-testid='AvatarBorder' />,
		);
		expect(getByTestId('AvatarBorder')).toHaveClass('border-t-transparent');
	});

	it('should render avatar border with hidden border bottom', () => {
		const { getByTestId } = render(
			<AvatarBorder hiddenBorder='bottom' data-testid='AvatarBorder' />,
		);
		expect(getByTestId('AvatarBorder')).toHaveClass('border-b-transparent');
	});

	it('should render avatar border with hidden border right', () => {
		const { getByTestId } = render(
			<AvatarBorder hiddenBorder='right' data-testid='AvatarBorder' />,
		);
		expect(getByTestId('AvatarBorder')).toHaveClass('border-r-transparent');
	});

    it('should render avatar border with custom class', () => {
		const { getByTestId } = render(
			<AvatarBorder className='test' data-testid='AvatarBorder' />,
		);
		expect(getByTestId('AvatarBorder')).toHaveClass('test');
	});

    it('should render avatar border with custom props', () => {
		const { getByTestId } = render(
			<AvatarBorder data-testid='AvatarBorder' data-test='test' />,
		);
		expect(getByTestId('AvatarBorder')).toHaveAttribute('data-test', 'test');
	});
});
