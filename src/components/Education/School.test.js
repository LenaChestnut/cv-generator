import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import School from './School';

const mockSchoolInfo = {};

test('A form is displayed on Edit click',() => {
    render(<School school={mockSchoolInfo}/>);
    expect(screen.queryByRole('form')).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('button', {name: /edit/i}));
    expect(screen.getByRole('form')).toBeInTheDocument();
});