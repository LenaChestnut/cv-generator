import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import General from './General';

test('Component is rendered correctly', () => {
    render(<General />);
    expect(screen.getByRole('heading', { level: 1})).toBeInTheDocument();
    expect(screen.getByText(/contact info/i)).toBeInTheDocument();
    expect(screen.getByText((content, element) => {
        return element.tagName.toLowerCase() === 'span' && content.startsWith('Email');
    })).toBeInTheDocument();
    expect(screen.getByText(/phone/i)).toBeInTheDocument();
    expect(screen.getByRole('button', {name: /edit/i})).toBeInTheDocument();
});

describe('Edit button is clicked', () => {
    beforeEach(() => {
        render(<General />);
        userEvent.click(screen.getByRole('button', {name: /edit/i}));
    });

    test('Information is hidden', () => {
        expect(screen.queryByRole('heading', { level: 1})).toBeNull();
        expect(screen.queryAllByRole('paragraph')).toHaveLength(0);
        expect(screen.queryByRole('button', {name: /edit/i})).toBeNull();
    });

    test('Form is displayed', () => {
        expect(screen.getByRole('form')).toBeInTheDocument();
        expect(screen.getByRole('textbox', {name: /fullName/i})).toBeInTheDocument();
        expect(screen.getByText(/contact info/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /submit/i})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /cancel/i})).toBeInTheDocument();
    })
});

describe.only('Cancel button is clicked', () => {
    beforeEach(() => {
        render(<General />);
        userEvent.click(screen.getByRole('button', {name: /edit/i}));
        userEvent.click(screen.getByRole('button', {name: /cancel/i}));
    });

    test('Form is replaced by info', () => {        
        expect(screen.queryByRole('form')).not.toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 1})).toBeInTheDocument();
        expect(screen.getByText((content, element) => {
            return element.tagName.toLowerCase() === 'span' && content.startsWith('Email');
        })).toBeInTheDocument();
        expect(screen.getByText(/phone/i)).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /edit/i})).toBeInTheDocument();
    })
});