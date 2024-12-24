'use client';

import { render } from '@testing-library/react';
import { AlertMessage } from './alert-message';

jest.mock('react-toastify', () => ({
	...jest.requireActual('react-toastify'),
	ToastContainer: ({ ...props }) => (
		<div data-testid='ReactToastify'>
			{JSON.stringify(props)}
		</div>
	),
}));

describe('<AlertMessage />', () => {
	it('should render toast container', () => {
		const { getByTestId } = render(<AlertMessage />);

		const reactToastifyElement = getByTestId('ReactToastify');
		expect(reactToastifyElement).toBeInTheDocument();
	});

    it('should render toast container with correct configs', () => {
		const { getByTestId } = render(<AlertMessage />);

        const reactToastifyElement = getByTestId('ReactToastify');
        expect(reactToastifyElement).toHaveTextContent(JSON.stringify({
                position:'top-right',
				autoClose: 10000,
				limit:3,
				style:{
					fontFamily: 'var(--font-chackra-petch)',
					fontWeight: 'bold',
				},
				hideProgressBar:false,
				newestOnTop:false,
				closeOnClick: true,
				rtl:false,
				pauseOnFocusLoss: true,
				draggable: true,
				pauseOnHover: true,
				theme:'dark',
        }));
    })
});
