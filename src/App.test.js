import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe("App container", () => {
  test("App component is rendered correctly", () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});

describe('A new item is added after Add is clicked', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('New school item is added', () => {
    userEvent.click(screen.getAllByRole('button', {name: /add/i})[0]);
    expect(screen.getByText(/degree title/i)).toBeInTheDocument();
    expect(screen.getByText(/school name/i)).toBeInTheDocument();
    expect(screen.getByText(/xxxx - xxxx/i)).toBeInTheDocument();
    expect(screen.getAllByRole('button', {name: /edit/i}).length).toBe(2);
  });

  test.todo('New workplace is added');
})
