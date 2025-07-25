import { render } from '@testing-library/react';
import { AboutMe } from '.';

jest.mock('@/components/title', () => ({
	Title: ({ ...props }) => <h1 data-testid='title-test' {...props} />,
}));

jest.mock('@/components/profile-avatar', () => ({
	ProfileAvatar: ({ ...props }) => (
		<div data-testid='title-profile' {...props} />
	),
}));

jest.mock('@/components/contact/links', () => ({
	ContactLinks: ({ ...props }) => <div data-testid='title-links' {...props} />,
}));

describe('<AboutMe />', () => {
	it('should render Title 2 times with correct title', () => {
		const { getByText, getAllByTestId } = render(<AboutMe />);

		const titleElements = getAllByTestId('title-test');
		expect(titleElements).toHaveLength(2);

		const titlePresentationElement = getByText('Apresentação inicial');
		expect(titlePresentationElement).toBeVisible();

		const titleCareerElement = getByText('Início de carreira');
		expect(titleCareerElement).toBeVisible();
	});

	it('should render ProfileAvatar', () => {
		const { getByTestId } = render(<AboutMe />);

		const profileAvatarElement = getByTestId('title-profile');
		expect(profileAvatarElement).toBeVisible();
	});

	it('should render ContactLinks', () => {
		const { getByTestId } = render(<AboutMe />);

		const contactLinksElement = getByTestId('title-links');
		expect(contactLinksElement).toBeVisible();
	});

	it('should render three timelines', () => {
		const { getAllByRole } = render(<AboutMe />);

		const linesElements = getAllByRole('listitem');
		expect(linesElements).toHaveLength(3);
	});
});
