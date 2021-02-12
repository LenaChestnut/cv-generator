import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExperienceForm from './ExperienceForm';

describe('Form rendered correctly', () => {
    test('With no info', () => {
        render(<ExperienceForm workplace={{id: '123'}}/>);
        expect(screen.getByLabelText(/job title/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/company name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/start date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/end date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/job description/i)).toBeInTheDocument();
    });

    test.todo('With custom indo');
});

test.todo('Form inputs accept changes');

test.todo('onSubmit called');