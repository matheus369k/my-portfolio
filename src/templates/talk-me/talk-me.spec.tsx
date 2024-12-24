'use client';

import { TalkMe } from './talk-me';
import { render } from '@testing-library/react';

jest.mock('@/components/title', () => ({
	Title: ({ children }: { children: React.ReactNode }) => <h2>{children}</h2>,
}));

jest.mock('@/components/profile-avatar', () => ({
	ProfileAvatar: () => <div>ProfileAvatar</div>,
}));

jest.mock('@/components/contact/links', () => ({
	ContactLinks: () => <div>ContactLinks</div>,
}));

jest.mock('./components/invite-mail', () => ({
	TalkMeForm: () => <div>TalkMeForm</div>,
}));

describe('<TalkMe />', () => {
	it('should render title with correct text', () => {
		const { getByRole } = render(<TalkMe />);

		const titleElement = getByRole('heading', { level: 2 });
		expect(titleElement).toHaveTextContent('Enviar E-Mail');
	});

	it('should render ProfileAvatar', () => {
		const { getByText } = render(<TalkMe />);

		const profileAvatarElement = getByText('ProfileAvatar');
		expect(profileAvatarElement).toBeVisible();
	});

	it('should render ContactLinks', () => {
		const { getByText } = render(<TalkMe />);

		const contactLinksElement = getByText('ContactLinks');
		expect(contactLinksElement).toBeVisible();
	});

	it('should render TalkMeForm', () => {
		const { getByText } = render(<TalkMe />);

		const talkMeFormElement = getByText('TalkMeForm');
		expect(talkMeFormElement).toBeVisible();
	});
});
