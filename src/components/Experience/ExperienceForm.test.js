import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExperienceForm from './ExperienceForm';
import { mockExperience } from './mockExperienceData';

describe('Form rendered correctly', () => {
    test('With no info', () => {
        render(<ExperienceForm workplace={{id: '123'}}/>);
        expect(screen.getByLabelText(/job title/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/company name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/start date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/end date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/job description/i)).toBeInTheDocument();
    });

    test('With custom indo', () => {
        render(<ExperienceForm workplace={mockExperience.workplaces[0]}/>);
        expect(screen.getByLabelText(/job title/i)).toHaveValue('Auror');
        expect(screen.getByLabelText(/company name/i)).toHaveValue('Ministry of Magic');
        expect(screen.getByLabelText(/start date/i)).toHaveValue('2009');
        expect(screen.getByLabelText(/end date/i)).toHaveValue('2015');
        expect(screen.getByLabelText(/job description/i)).toHaveValue('Fighting the forces of dark magic');
    });
});

test('Form inputs accept changes', () => {
    render(<ExperienceForm workplace={{id: '123'}}/>);
    userEvent.type(screen.getByLabelText(/job title/i), 'Auror');
    expect(screen.getByLabelText(/job title/i)).toHaveValue('Auror');
    userEvent.type(screen.getByLabelText(/company name/i), 'Ministry of Magic');
    expect(screen.getByLabelText(/company name/i)).toHaveValue('Ministry of Magic');
    userEvent.type(screen.getByLabelText(/start date/i), '2009');
    expect(screen.getByLabelText(/start date/i)).toHaveValue('2009');
    userEvent.type(screen.getByLabelText(/end date/i), '2015');
    expect(screen.getByLabelText(/end date/i)).toHaveValue('2015');
    userEvent.type(screen.getByLabelText(/job description/i), 'Fighting the forces of dark magic');
    expect(screen.getByLabelText(/job description/i)).toHaveValue('Fighting the forces of dark magic');
});

test.todo('onSubmit called');