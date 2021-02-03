/* eslint-disable no-useless-escape */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GeneralForm from './GeneralForm';

const mockHandleSubmit = jest.fn();

test('Form input values change on type', () => {
    render(<GeneralForm />);
    userEvent.type(screen.getByLabelText(/fullName/i), 'John Doe');
    userEvent.type(screen.getByLabelText(/email/i), 'email@test.com');
    userEvent.type(screen.getByLabelText(/phone/i), '123-456');
    expect(screen.getByLabelText(/fullName/i)).toHaveValue('John Doe');
    expect(screen.getByLabelText(/email/i)).toHaveValue('email@test.com');
    expect(screen.getByLabelText(/phone/i)).toHaveValue('123-456');
});

describe.only('Form submitted', () => {
    beforeEach(() => {
        render(<GeneralForm saveInfo={mockHandleSubmit} />);
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
});