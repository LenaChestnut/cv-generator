import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EducationForm from './EducationForm';

const mockEmptySchool = {
    id: '123',
};

const mockSchoolInfo = {
    id: '456',
    degree: 'Magic',
    schoolName: 'Hogwarts',
    startDate: '2007',
    endDate: '2014'
}

describe('Form is rendered correctly', () => {
    test('With no existing info', () => {
        render(<EducationForm school={mockEmptySchool}/>);
        expect(screen.getByLabelText(/degree/i)).toHaveValue('');
        expect(screen.getByLabelText(/school/i)).toHaveValue('');
        expect(screen.getByLabelText(/startdate/i)).toHaveValue('');
        expect(screen.getByLabelText(/enddate/i)).toHaveValue('');
    });

    test('With existing info', () => {
        render(<EducationForm school={mockSchoolInfo}/>);
        expect(screen.getByLabelText(/degree/i)).toHaveValue('Magic');
        expect(screen.getByLabelText(/school/i)).toHaveValue('Hogwarts');
        expect(screen.getByLabelText(/startdate/i)).toHaveValue('2007');
        expect(screen.getByLabelText(/enddate/i)).toHaveValue('2014');
    });
});

test.todo('Inputs accept changes');

describe('Form submitted', () => {
    test.todo('With valid inputs');
    test.todo('With invalid inputs');
})
