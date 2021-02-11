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

describe('An item is removed from list on Delete', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('School item is removed on Delete click', () => {
    userEvent.click(screen.getAllByRole('button', {name: /add/i})[0]);
    userEvent.click(screen.getAllByRole('button', {name: /edit/i})[1]);
    userEvent.click(screen.getByRole('button', {name: /delete/i}));
    expect(screen.queryByTestId('school-item')).not.toBeInTheDocument();
  });

  test.todo('Workplace item is removed on Delete click');
});

describe('Submitted info is displayed', () => {
  beforeEach(() => {
    render(<App />);
  })

  test('School info submitted', () => {
    userEvent.click(screen.getAllByRole('button', {name: /add/i})[0]);
    userEvent.click(screen.getAllByRole('button', {name: /edit/i})[1]);
    userEvent.type(screen.getByLabelText(/degree/i), 'Computer Science');
    userEvent.type(screen.getByLabelText(/schoolName/i), 'A Cool One');
    userEvent.type(screen.getByLabelText(/startDate/i), 'September 2012');
    userEvent.type(screen.getByLabelText(/endDate/i), 'June 2016');
    userEvent.click(screen.getByRole('button', {name: /submit/i}));
    expect(screen.getByText('Computer Science')).toBeInTheDocument();
    expect(screen.getByText('A Cool One')).toBeInTheDocument();
    expect(screen.getByText('September 2012')).toBeInTheDocument();
    expect(screen.getByText('June 2016')).toBeInTheDocument();
  });

  test.todo('Workplace info is submitted');
})