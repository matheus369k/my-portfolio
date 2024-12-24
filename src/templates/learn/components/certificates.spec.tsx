'use client';

import { fireEvent, render } from '@testing-library/react';
import { LearnCertificates } from './certificates';
import { act } from 'react';

const mockHandleShowMore = jest.fn();

jest.mock('@/components/title', () => ({
	Title: ({ children }: { children: React.ReactNode }) => <h1>{children}</h1>,
}));

jest.mock('../hooks/use-certificates', () => ({
	useCertificates: ({
		staticDatas,
	}: { staticDatas: { certificates: [object] } }) => ({
		certificates: staticDatas.certificates,
		handleShowMore: mockHandleShowMore,
	}),
}));

jest.mock('./certificate-card', () => ({
	CertificateCard: ({ ...props }) => <li {...props}>CertificanteCard</li>,
}));

const moreThreeCertificates = {
	certificates: [
		{
			title: 'Teste 1',
			image_url: 'http://exemplo.com/test1.png',
			validation_code: '5639-53-y3743-34-3837',
			verification_url: 'http://exemplo.com/validation',
		},
		{
			title: 'Teste 2',
			image_url: 'http://exemplo.com/test2.png',
			validation_code: '2639-533-6h3743-34-3837',
			verification_url: 'http://exemplo.com/validation',
		},
		{
			title: 'Teste 3',
			image_url: 'http://exemplo.com/test3.png',
			validation_code: '5639-53-747g3-34-3837',
			verification_url: 'http://exemplo.com/validation',
		},
		{
			title: 'Teste 4',
			image_url: 'http://exemplo.com/test4.png',
			validation_code: '5639-53-767g3-34-3837',
			verification_url: 'http://exemplo.com/validation',
		},
	],
};

const lessThreeCertificates = {
	certificates: [
		{
			title: 'Teste 1',
			image_url: 'http://exemplo.com/test1.png',
			validation_code: '5639-53-y3743-34-3837',
			verification_url: 'http://exemplo.com/validation',
		},
	],
};

describe('<LearnCertificates />', () => {
	it('should render Title with correct children', () => {
		const data = lessThreeCertificates;

		const { getByRole } = render(<LearnCertificates staticDatas={data} />);

		const titleElement = getByRole('heading', { level: 1 });
		expect(titleElement).toHaveTextContent('Certificados');
	});

	it('should render CertificateCard with correct props', () => {
		const data = lessThreeCertificates;

		const { getByRole } = render(<LearnCertificates staticDatas={data} />);

		const { image_url, title, validation_code, verification_url } =
			data.certificates[0];

		const certificateCardElement = getByRole('listitem');
		expect(certificateCardElement).toHaveAttribute('title', title);
		expect(certificateCardElement).toHaveAttribute('image_url', image_url);
		expect(certificateCardElement).toHaveAttribute(
			'validation_code',
			validation_code,
		);
		expect(certificateCardElement).toHaveAttribute(
			'verification_url',
			verification_url,
		);
	});

	it('should render listCard with height limite when there are 3 or less certificates', () => {
		const data = lessThreeCertificates;

		const { getByTestId } = render(<LearnCertificates staticDatas={data} />);

		const certificatesCardsListElement = getByTestId('listCertificates');
		expect(certificatesCardsListElement).toHaveClass(
			'max-h-[775px] overflow-hidden md:max-h-[575px]',
		);
	});

	it('should render listCard without height limite when there are more than 3 certificates', () => {
		const data = moreThreeCertificates;

		const { getByTestId } = render(<LearnCertificates staticDatas={data} />);

		const certificatesCardsListElement = getByTestId('listCertificates');
		expect(certificatesCardsListElement).not.toHaveClass(
			'max-h-[775px] overflow-hidden md:max-h-[575px]',
		);
	});

	it('should render more button when 3 or less certificates is shown', () => {
		const data = lessThreeCertificates;

		const { getByRole } = render(<LearnCertificates staticDatas={data} />);

		const moreButtonElement = getByRole('button');
		expect(moreButtonElement).toBeVisible();
	});

	it('should hidden more button when more than 3 certificates is shown', () => {
		const data = moreThreeCertificates;

		const { queryByRole } = render(<LearnCertificates staticDatas={data} />);

		const moreButtonElement = queryByRole('button');
		expect(moreButtonElement).not.toBeInTheDocument();
	});

	it('should call handleShowMore when more button is clicked', () => {
		const data = lessThreeCertificates;

		const { getByRole } = render(<LearnCertificates staticDatas={data} />);

		const moreButtonElement = getByRole('button');

		act(() => fireEvent.click(moreButtonElement));

		expect(mockHandleShowMore).toHaveBeenCalledTimes(1);
	});
});
