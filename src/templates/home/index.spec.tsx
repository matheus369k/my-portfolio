import { render } from '@testing-library/react';
import { Home } from '.';

jest.mock('./components/auto-write-job', () => ({
	AutoWriteJob: () => <div>AutoWriteJob Test</div>,
}));
jest.mock('@/components/contact/links', () => ({
	ContactLinks: () => <div>ContactLinks Test</div>,
}));
jest.mock('@/components/profile-avatar', () => ({
	ProfileAvatar: () => <div>ProfileAvatar Test</div>,
}));

describe('<Home/>', () => {
	it('should render all custom components', () => {
		const { getByText } = render(<Home />);

		const autoWriteJobElement = getByText('AutoWriteJob Test');
		expect(autoWriteJobElement).toBeVisible();

		const contactLinksElement = getByText('ContactLinks Test');
		expect(contactLinksElement).toBeVisible();

		const profileAvatarElement = getByText('ProfileAvatar Test');
		expect(profileAvatarElement).toBeVisible();
	});

	it('should render link "fale comigo" with correct href', () => {
		const { getByRole } = render(<Home />);

		const linkElement = getByRole('link', { name: '‘Fale Comigo’' });
		expect(linkElement).toHaveAttribute('href', '/talk-me');
	});
});
