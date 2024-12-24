import { render } from '@testing-library/react';
import { AutoWriteJob } from './auto-write-job';

jest.mock(
	'typeit-react',
	() =>
		({ options, ...props }: { options: object }) => (
			<span data-testid='test-autoWriteJob' {...props}>
				{JSON.stringify(options)}
			</span>
		),
);

describe('<AutoWriteJob />', () => {
	it('should renders Typeit components with correct options', () => {
		const { getByTestId } = render(<AutoWriteJob />);

        const autoWriteJobElement = getByTestId('test-autoWriteJob');
		expect(autoWriteJobElement).toHaveTextContent(
			JSON.stringify({
				strings: ['Web', 'Front-End', 'React'],
				loop: true,
				waitUntilVisible: false,
				lifeLike: true,
				breakLines: false,
				startDelete: false,
				loopDelay: 15000,
				nextStringDelay: 15000,
				afterComplete: () => {
					return new Promise((resolve) => {
						setTimeout(() => {
							resolve(true);
						}, 15000);
					});
				},
				startDelay: 0,
				speed: 50,
			}),
		);
	});

    it('should render AutoWriteJob component with correct static text', () => {
		const { getByText } = render(<AutoWriteJob />);

        const autoWriteJobElement = getByText('Eu sou um desenvolvedor');
        expect(autoWriteJobElement).toBeVisible();
    })
});
