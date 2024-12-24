'use client';

import { render } from '@testing-library/react';
import { CertificateCard } from './certificate-card';

interface NextImageMock {
	src: string;
	width: number;
	height: number;
	alt: string;
}

jest.mock('next/image', () => ({ alt, height, src, width }: NextImageMock) => (
	<img alt={alt} height={height} src={src} width={width} />
));

describe('<CertificateCard />', () => {
	const certificate = {
		image_url: 'https://www.google.com',
		title: 'Teste',
		validation_code: '123456789',
		verification_url: 'https://www.google.com',
	};

	it('should render image from card with correct props', () => {
		const { getByRole } = render(<CertificateCard {...certificate} />);

		const imageElement = getByRole('presentation');
		expect(imageElement).toHaveAttribute('src', certificate.image_url);
		expect(imageElement).toHaveAttribute('width', '300');
		expect(imageElement).toHaveAttribute('height', '200');
	});

	it('should render title from card with correct props', () => {
		const { getByRole } = render(<CertificateCard {...certificate} />);

		const titleElement = getByRole('heading', { level: 2 });
		expect(titleElement).toHaveTextContent(certificate.title);
	});

    it('should render validation code from card with correct props', () => {
		const { getByText } = render(<CertificateCard {...certificate} />);

        const validationCodeElement = getByText(certificate.validation_code);
        expect(validationCodeElement).toHaveTextContent(certificate.validation_code);

        const validationCodeLabelElement = getByText('Código:');
        expect(validationCodeLabelElement).toBeVisible();
    })

    it('should render verification url from card with correct props', () => {
		const { getByRole, getByText } = render(<CertificateCard {...certificate} />);

        const verificationUrlElement = getByRole('link');
        expect(verificationUrlElement).toHaveAttribute('href', certificate.verification_url);
        expect(verificationUrlElement).toHaveTextContent(certificate.verification_url);
        expect(verificationUrlElement).toHaveAttribute('target', '_blank');

        const verificationUrlLabelElement = getByText('Verifique em:');
        expect(verificationUrlLabelElement).toBeVisible();
    });
})
