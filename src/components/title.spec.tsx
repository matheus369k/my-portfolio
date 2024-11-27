'use client';

import { Title } from "./title"
import { render } from '@testing-library/react';

describe('<Title />', ()=> {
    it('should render the title', ()=> {
        const { getByText } = render(<Title>Hello World</Title>);
        expect(getByText('Hello World')).toBeInTheDocument()
    })
})