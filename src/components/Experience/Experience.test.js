import { render, screen } from '@testing-library/react';
import Experience from './Experience';
import { mockEmptyExperience, mockExperience } from './mockExperienceData';

describe('Section rendered correctly', () => {
    test('No info provided', () => {
        render(<Experience experience={mockEmptyExperience}/>);
        expect(screen.getByText(/experience/i)).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /add/i})).toBeInTheDocument();
        expect(screen.queryByTestId('workplace-item')).not.toBeInTheDocument();
    });

    test('Custom info provided', () => {
        render(<Experience experience={mockExperience} />);
        expect(screen.getByText(/experience/i)).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /add/i})).toBeInTheDocument();
        expect(screen.getAllByTestId('workplace-item').length).toBe(2);
    });
});