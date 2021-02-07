/* eslint-disable no-useless-escape */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GeneralForm from './GeneralForm';

const mockHandleSubmit = jest.fn();

const testInfo = {
    fullName: '',
    email: '',
    phone: '',
}

test('Form input values change on type', () => {
    render(<GeneralForm info={testInfo}/>);
    userEvent.type(screen.getByLabelText(/fullName/i), 'John Doe');
    userEvent.type(screen.getByLabelText(/email/i), 'email@test.com');
    userEvent.type(screen.getByLabelText(/phone/i), '123-456');
    expect(screen.getByLabelText(/fullName/i)).toHaveValue('John Doe');
    expect(screen.getByLabelText(/email/i)).toHaveValue('email@test.com');
    expect(screen.getByLabelText(/phone/i)).toHaveValue('123-456');
});

describe('Form submitted', () => {
    beforeEach(() => {
        render(<GeneralForm handleFormSubmit={mockHandleSubmit} info={testInfo}/>);
    });

    describe('With valid inputs', () => {
        test('onSubmit is called', () => {
            userEvent.type(screen.getByLabelText(/fullName/i), 'John Doe');
            userEvent.type(screen.getByLabelText(/email/i), 'email@test.com');
            userEvent.type(screen.getByLabelText(/phone/i), '123-456');
            userEvent.click(screen.getByRole('button', {name: /submit/i}));
            expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
        });
    });

    describe('With invalid inputs', () => {
        test('onSubmit is not called', () => {
            userEvent.type(screen.getByLabelText(/email/i), 'emailtest.com');
            userEvent.click(screen.getByRole('button', {name: /submit/i}));
            expect(screen.getByRole('form')).toBeInTheDocument();
        })
    })
});