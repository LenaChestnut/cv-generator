import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App container", () => {
  test("App component is rendered correctly", () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
