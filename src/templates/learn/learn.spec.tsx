'use client';

import { render } from "@testing-library/react";
import { Learn } from "./learn";

jest.mock('./components/response-certificates', () => ({
    ResponseCertificates: () => <div data-testid='response-certificates' />
}));

jest.mock('./components/response-tools', () => ({
    ResponseTools: () => <div data-testid='response-tools' />
}));

describe('<Learn />', () => {
    it('should render tools and certificates', async () => {
        const { getByTestId } = render(<Learn />);

        const certificatesElement = getByTestId('response-certificates');
        expect(certificatesElement).toBeVisible();

        const toolsElement = getByTestId('response-tools');
        expect(toolsElement).toBeVisible();
    })
});