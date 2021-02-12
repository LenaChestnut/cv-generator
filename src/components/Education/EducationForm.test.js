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

const mockHandleSubmit = jest.fn();

describe('Form is rendered correctly', () => {
    test('With no existing info', () => {
        render(<EducationForm school={mockEmptySchool}/>);
        expect(screen.getByLabelText(/degree/i)).toHaveValue('');
        expect(screen.getByLabelText(/school name/i)).toHaveValue('');
        expect(screen.getByLabelText(/start date/i)).toHaveValue('');
        expect(screen.getByLabelText(/end date/i)).toHaveValue('');
    });

    test('With existing info', () => {
        render(<EducationForm school={mockSchoolInfo}/>);
        expect(screen.getByLabelText(/degree/i)).toHaveValue('Magic');
        expect(screen.getByLabelText(/school name/i)).toHaveValue('Hogwarts');
        expect(screen.getByLabelText(/start date/i)).toHaveValue('2007');
        expect(screen.getByLabelText(/end date/i)).toHaveValue('2014');
    });
});

test('Inputs accept changes', () => {
    render(<EducationForm school={mockEmptySchool}/>);
    userEvent.type(screen.getByLabelText(/degree/i), 'Computer Science');
    userEvent.type(screen.getByLabelText(/school name/i), 'A Cool One');
    userEvent.type(screen.getByLabelText(/start date/i), 'September 2012');
    userEvent.type(screen.getByLabelText(/end date/i), 'June 2016');
    expect(screen.getByLabelText(/degree/i)).toHaveValue('Computer Science');
    expect(screen.getByLabelText(/school name/i)).toHaveValue('A Cool One');
    expect(screen.getByLabelText(/start date/i)).toHaveValue('September 2012');
    expect(screen.getByLabelText(/end date/i)).toHaveValue('June 2016');
});

test('Form submit called on button click', () => {
    render(<EducationForm school={mockEmptySchool} handleFormSubmit={mockHandleSubmit}/>);
    userEvent.type(screen.getByLabelText(/degree/i), 'Computer Science');
    userEvent.type(screen.getByLabelText(/school name/i), 'A Cool One');
    userEvent.type(screen.getByLabelText(/start date/i), 'September 2012');
    userEvent.type(screen.getByLabelText(/end date/i), 'June 2016');
    userEvent.click(screen.getByLabelText(/submit/));
    expect(mockHandleSubmit).toHaveBeenCalled();
});
