import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import General from './General';

test("Component is rendered correctly", () => {
    render(<General />);
    expect(screen.getByRole('heading', { level: 1})).toBeInTheDocument();
    expect(screen.getByText(/contact info/i)).toBeInTheDocument();
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/phone/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(/edit/i);
});

describe("Edit button is clicked", () => {
    test.only("Information is hidden", () => {
        render(<General />);
        userEvent.click(screen.getByText(/edit/i));
        expect(screen.queryByRole('heading', { level: 1})).toBeNull();
        expect(screen.queryAllByRole('paragraph')).toHaveLength(0);
        expect(screen.queryByText(/edit/i)).toBeNull();
    });
})