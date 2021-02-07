import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import General from './General';

const testEmptyInfo = {
    fullName: '',
    email: '',
    phone: '',
}

const testCustomInfo = {
    fullName: 'Harry Potter',
    email: 'harryfreakingpotter@gmail.com',
    phone: '123-456-789'
}

const defaultInfo = {
    fullName: 'Your Name',
    email: 'your_email@gmail.com',
    phone: 'XXX-XXX-XXX',
}

describe('Component is rendered correctly', () => {
    test('With empty info', () => {
        render(<General general={testEmptyInfo}/>);
        expect(screen.getByRole('heading', { level: 1})).toHaveTextContent(defaultInfo.fullName);
        expect(screen.getByText(/contact info/i)).toBeInTheDocument();
        expect(screen.getByText(defaultInfo.email)).toBeInTheDocument();
        expect(screen.getByText(defaultInfo.phone)).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /edit/i})).toBeInTheDocument();
    });

    test('With custom info', () => {
        render(<General general={testCustomInfo}/>);
        expect(screen.getByRole('heading', { level: 1})).toHaveTextContent(testCustomInfo.fullName);
        expect(screen.getByText(/contact info/i)).toBeInTheDocument();
        expect(screen.getByText(testCustomInfo.email)).toBeInTheDocument();
        expect(screen.getByText(testCustomInfo.phone)).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /edit/i})).toBeInTheDocument();
    });
})

describe('Edit button is clicked', () => {
    beforeEach(() => {
        render(<General general={testEmptyInfo}/>);
        userEvent.click(screen.getByRole('button', {name: /edit/i}));
    });

    test('Information is hidden', () => {
        expect(screen.queryByRole('heading', { level: 1})).toBeNull();
        expect(screen.queryAllByRole('paragraph')).toHaveLength(0);
        expect(screen.queryByRole('button', {name: /edit/i})).toBeNull();
    });

    test('Form is displayed without values', () => {
        expect(screen.getByRole('form')).toBeInTheDocument();
        expect(screen.getByRole('textbox', {name: /fullName/i})).toBeInTheDocument();
        expect(screen.getByRole('textbox', {name: /fullName/i})).toHaveValue('');
        expect(screen.getByText(/contact info/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toHaveValue('');
        expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/phone/i)).toHaveValue('');
        expect(screen.getByRole('button', {name: /submit/i})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /cancel/i})).toBeInTheDocument();
    })
});

test.only('Form is displayed with passed values', () => {
    render(<General general={testCustomInfo}/>);
    userEvent.click(screen.getByRole('button', {name: /edit/i}));
    expect(screen.getByLabelText(/fullName/i)).toHaveValue(testCustomInfo.fullName);
    expect(screen.getByLabelText(/email/i)).toHaveValue(testCustomInfo.email);
    expect(screen.getByLabelText(/phone/i)).toHaveValue(testCustomInfo.phone);
})

describe('Cancel button is clicked', () => {
    beforeEach(() => {
        render(<General general={testEmptyInfo}/>);
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
