import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from './input';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const FormSchema = z.object({
	name: z.string().min(3, 'invalide name'),
});
type FormType = z.infer<typeof FormSchema>;

const meta = {
	title: 'Components/ui/Input',
	component: Input,
	decorators(Story) {
		const hookForm = useForm<FormType>({
			resolver: zodResolver(FormSchema),
		});

		return <FormProvider {...hookForm}>{Story()}</FormProvider>;
	},
	argTypes: {
		name: {
			control: { type: 'text' },
			description: 'named of field',
		},
		errors: {
			control: 'select',
			description: 'error to catch',
			options: [undefined, 'invalide field', 'empty field'],
		},
		placeholder: {
			description: 'describe that field need',
		},
	},
	args: {
		placeholder: 'Digite seu nome',
		name: 'name',
	},
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
export const Wrong: Story = {
	args: {
		errors: { message: 'Invalide field', type: 'pattern' },
	},
};
