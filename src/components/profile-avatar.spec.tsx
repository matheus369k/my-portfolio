'use client';

import { render } from '@testing-library/react';
import { ProfileAvatar } from './profile-avatar';
import type { ComponentProps } from 'react';

jest.mock('next/image', () => {
	return ({ fetchPriority, ...props }: ComponentProps<'img'>) => (
		<img {...props} alt='' />
	);
});

jest.mock('./avatar-border', () => ({
	AvatarBorder: ({
		hiddenBorder,
		className,
		...props
	}: { hiddenBorder?: string; className: string }) => (
		<div
			className={`${hiddenBorder} ${className}`}
			data-testid='AvatarBorder'
			{...props}
		/>
	),
}));

describe('<ProfileAvatar />', () => {
	it('should render the profile avatar', () => {
		const { getByTestId } = render(<ProfileAvatar />);
		expect(getByTestId('ProfileAvatar')).toBeVisible();
	});

	it('should render 4X avatar border', () => {
		const { getAllByTestId } = render(<ProfileAvatar />);

		expect(getAllByTestId('AvatarBorder')).toHaveLength(4);
	});

	it('should render 4 avatar border with correct props', () => {
		const { getAllByTestId } = render(<ProfileAvatar />);

		const avatarBorderElements = getAllByTestId('AvatarBorder');
		const avatarHiddenBordersElements = {
			right: avatarBorderElements[0],
			left: avatarBorderElements[1],
			bottom: avatarBorderElements[2],
			top: avatarBorderElements[3],
		};

		expect(avatarHiddenBordersElements.right).toHaveClass('right');
		expect(avatarHiddenBordersElements.right).toHaveAttribute(
			'animation',
			'reverse',
		);

		expect(avatarHiddenBordersElements.left).toHaveClass('left');
		expect(avatarHiddenBordersElements.left).toHaveAttribute(
			'animation',
			'reverse',
		);

		expect(avatarHiddenBordersElements.bottom).toHaveClass('bottom');

		expect(avatarHiddenBordersElements.top).toHaveClass('top');
	});

	it('should render avatar with correct src', () => {
		const { getByRole } = render(<ProfileAvatar />);

		const avatarImageElement = getByRole('presentation');

		expect(avatarImageElement).toHaveAttribute('src', './avatar.svg');
	});
});
