import type { Certificates } from '@/@types';
import { render, screen } from '@testing-library/react';
import { CertificatesSection } from './certificates-section';

describe('CertificatesSection', () => {
	const { certificates }: Certificates = {
		certificates: [
			{
				title: 'Certificado 1',
				emission_data: '01-01-2023',
				description: 'Descrição do certificado 1',
				link: 'https://example.com/certificado1',
				order: 1,
			},
			{
				title: 'Certificado 2',
				emission_data: '02-01-2023',
				description: 'Descrição do certificado 2',
				link: 'https://example.com/certificado2',
				order: 2,
			},
		],
	};

	it('should render correctly', () => {
		render(<CertificatesSection certificates={certificates} />);
		screen.getByRole('heading', { level: 1, name: /certificados/i });
		screen.getByRole('heading', { level: 2, name: /certificado 1/i });
		screen.getByText('01/01/2023');
		screen.getByText(/descrição do certificado 1/i);
		screen.getByRole('link', { name: /https:\/\/example\.com\/certificado1/i });
	});
});
