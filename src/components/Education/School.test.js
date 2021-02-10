import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import School from './School';

const mockSchoolInfo = {};

describe('Form display is controlled by buttons', () => {
    beforeEach(() => {
        render(<School school={mockSchoolInfo}/>);
        expect(screen.queryByRole('form')).not.toBeInTheDocument();
        userEvent.click(screen.getByRole('button', {name: /edit/i}));
    })
    
    test('A form is displayed on Edit click', () => {
        expect(screen.getByRole('form')).toBeInTheDocument();
    });

    test('Form is closed on Cancel', () => {
        userEvent.click(screen.getByRole('button', {name: /cancel/i}));
        expect(screen.queryByRole('form')).not.toBeInTheDocument();
    })
})