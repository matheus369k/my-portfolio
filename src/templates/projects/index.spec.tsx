import { render, screen } from '@testing-library/react';
import { act, type ImgHTMLAttributes } from 'react';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker/locale/pt_BR';
import { Projects } from '.';

jest.mock(
	'next/image',
	() =>
		({ fetchPriority, ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
			<img {...props} alt='preview project' />
		),
);

describe('<Projects />', () => {
	const url = new URL(window.location.toString());
	const user = userEvent.setup();
	const fakerProjects = Array.from({ length: 4 }).map(() => {
		return {
			_id: faker.database.mongodbObjectId(),
			name: faker.company.name(),
			slug: faker.company.name().replace(' ', '-').toLocaleLowerCase(),
			tools: Array.from({ length: 5 }).map(() => {
				return faker.company.buzzPhrase();
			}),
			image_url: faker.image.url(),
			links: {
				deploy: faker.internet.url(),
				repository: faker.internet.url(),
			},
			description: faker.company.catchPhraseDescriptor(),
		};
	});

	it('should render correctly', async () => {
		render(<Projects projects={fakerProjects} />);

		await screen.findByRole('heading', {
			level: 1,
			name: fakerProjects[0].name,
		});
		screen.getByRole('heading', { level: 1, name: fakerProjects[1].name });
		screen.getByText(/1 de 4/i);

		const slidesContainer = screen.getByRole('list');
		expect(slidesContainer).toHaveClass('glide__slides');

		const slidesContainerTrack = slidesContainer.parentNode;
		expect(slidesContainerTrack).toHaveClass('glide__track');
		expect(slidesContainerTrack).toHaveAttribute('data-glide-el', 'track');

		expect(slidesContainerTrack?.parentNode).toHaveClass('glide');
	});

	it('should restore old slide when access url with query param index', async () => {
		url.searchParams.set('index', '1');
		window.history.pushState({}, '', url);
		render(<Projects projects={fakerProjects} />);

		await screen.findByText(/2 de 4/i);

		const slideList = screen.getAllByRole('listitem');
		for (let index = 0; index < slideList.length; index++) {
			if (slideList[index] === slideList[1]) {
				expect(slideList[index]).toHaveClass('glide__slide--active');
			} else {
				expect(screen.getAllByRole('listitem')[index]).not.toHaveClass(
					'glide__slide--active',
				);
			}
		}
	});

	it('should go to next slide when clicked at the arrow right', async () => {
		window.history.pushState({}, '', url.origin);
		render(<Projects projects={fakerProjects} />);
		const buttonNext = await screen.findByRole('button', { name: /next/i });
		const slideList = screen.getAllByRole('listitem');

		await screen.findByText(/1 de 4/i);

		for (let index = 0; index < slideList.length; index++) {
			if (slideList[index] === slideList[0]) {
				expect(slideList[index]).toHaveClass('glide__slide--active');
			} else {
				expect(screen.getAllByRole('listitem')[index]).not.toHaveClass(
					'glide__slide--active',
				);
			}
		}

		await user.click(buttonNext);

		await screen.findByText(/2 de 4/i);

		for (let index = 0; index < slideList.length; index++) {
			if (slideList[index] === slideList[1]) {
				expect(slideList[index]).toHaveClass('glide__slide--active');
			} else {
				expect(screen.getAllByRole('listitem')[index]).not.toHaveClass(
					'glide__slide--active',
				);
			}
		}
	});

	it('should go to back slide when clicked at the arrow left', async () => {
		url.searchParams.set('index', '1');
		window.history.pushState({}, '', url);
		render(<Projects projects={fakerProjects} />);
		const buttonPrevious = await screen.findByRole('button', {
			name: /previous/i,
		});

		await screen.findByText(/2 de 4/i);
		await user.click(buttonPrevious);

		await screen.findByText(/1 de 4/i);
	});
});
