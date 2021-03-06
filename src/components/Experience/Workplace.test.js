import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Workplace from './Workplace';
import { mockExperience } from './mockExperienceData';

describe('Workplace item is rendered correctly', () => {
    test('No info', () => {
        render(<Workplace workplace={{id: '123'}}/>);
        expect(screen.getByText(/job title/i)).toBeInTheDocument();
        expect(screen.getByText(/company name/i)).toBeInTheDocument();
        expect(screen.getByText(/xxxx - xxxx/i)).toBeInTheDocument();
        expect(screen.getByText(/job description/i)).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /edit/i})).toBeInTheDocument();
    });

    test('Custom info', () => {
        render(<Workplace workplace={mockExperience.workplaces[1]}/>);
        expect(screen.getByText('Wandering Wizard')).toBeInTheDocument();
        expect(screen.getByText('Freelance')).toBeInTheDocument();
        expect(screen.getByText('2015 - present time')).toBeInTheDocument();
        expect(screen.getByText('Motivating hobbits to go on an adventure')).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /edit/i})).toBeInTheDocument();
    });
})

describe('Workplace form', () => {
    beforeEach(() => {
        render(<Workplace workplace={{id: '123'}}/>);
    });

    test('Displayed on Edit click', () => {
        userEvent.click(screen.getByRole('button', {name: /edit/i}));
        expect(screen.getByRole('form')).toBeInTheDocument();
    });

    test('Closed on Cancel click', () => {
        userEvent.click(screen.getByRole('button', {name: /edit/i}));
        userEvent.click(screen.getByRole('button', {name: /cancel/i}));
        expect(screen.queryByRole('form')).not.toBeInTheDocument();
    });
});