import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Education from './Education';

const testEmptyInfo = {
    schools: [],
}

describe.only('Component is rendered correctly', () => {
    test('Constant elements are rendered', () => {
        render(<Education education={testEmptyInfo}/>);
        expect(screen.getByText(/education/i)).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /add/i})).toBeInTheDocument();
    });
    test.todo('Rendered with default info');
    test.todo('Rendered with custom info');
})

test.todo('A form is added after Add is clicked');

test.todo('A form is displayed on Edit click');