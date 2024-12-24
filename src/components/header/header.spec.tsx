import { act, fireEvent, render } from '@testing-library/react';
import { Header } from './header';

const mockIsMenuOpenValue = jest.fn().mockReturnValue(false);
const mockHandleOpenCloseMenu = jest.fn();

jest.mock('./components/navbar-row', () => ({
	NavbarRow: ({ text, href }: { text: string; href: string }) => (
		<li data-href={href}>{text}</li>
	),
}));

jest.mock('./hooks/use-toggle-menu', () => ({
	useToggleMenu: () => ({
		isMenuOpen: mockIsMenuOpenValue(),
		handleOpenCloseMenu: () => mockHandleOpenCloseMenu(),
	}),
}));

describe('<Header />', () => {
	it('should render logo', () => {
		const { getByRole } = render(<Header />);

		const linkElement = getByRole('link');

		expect(linkElement).toHaveTextContent('M.G');
		expect(linkElement).toHaveAttribute('href', '/');
	});

	it('should render navbar elements', () => {
		const { getByText } = render(<Header />);

		const navbarElement = {
			presentation: getByText('apresentação'),
			learning: getByText('aprendizado'),
			projects: getByText('projetos'),
			talkMe: getByText('fale comigo'),
			aboutMe: getByText('sobre mim'),
		};

		expect(navbarElement.presentation).toBeVisible();
		expect(navbarElement.learning).toBeVisible();
		expect(navbarElement.projects).toBeVisible();
		expect(navbarElement.aboutMe).toBeVisible();
		expect(navbarElement.talkMe).toBeVisible();
	});

	it('should invite correct redirect link(href) to the navbar elements', () => {
		const { getByText } = render(<Header />);

		const navbarElement = {
			presentation: getByText('apresentação'),
			learning: getByText('aprendizado'),
			projects: getByText('projetos'),
			talkMe: getByText('fale comigo'),
			aboutMe: getByText('sobre mim'),
		};

		expect(navbarElement.presentation).toHaveAttribute('data-href', '/');
		expect(navbarElement.learning).toHaveAttribute('data-href', '/learn');
		expect(navbarElement.projects).toHaveAttribute('data-href', '/projects');
		expect(navbarElement.aboutMe).toHaveAttribute('data-href', '/about-me');
		expect(navbarElement.talkMe).toHaveAttribute('data-href', '/talk-me');
	});

	it('should render icon to open menu', () => {
		const { getByTestId, getByRole } = render(<Header />);

		const iconMenuOpenElement = getByTestId('menu-open');
		expect(iconMenuOpenElement).toBeVisible();

		const navbarListElement = getByRole('list');
		expect(navbarListElement).toHaveClass('hidden');
	});

	it('should render icon to close menu and show the navbar', () => {
		mockIsMenuOpenValue.mockReturnValueOnce(true);

		const { getByTestId, getByRole } = render(<Header />);

		const iconMenuCloseElement = getByTestId('menu-close');
		expect(iconMenuCloseElement).toBeVisible();

		const navbarListElement = getByRole('list');
		expect(navbarListElement).toBeVisible();
	});

	it('should call function when clicked on the button toggle menu', () => {
		const { getByRole } = render(<Header />);

		const buttonElement = getByRole('button');

		act(() => {
			fireEvent.click(buttonElement);
		});

        expect(mockHandleOpenCloseMenu).toHaveBeenCalledTimes(1);
	});
});
