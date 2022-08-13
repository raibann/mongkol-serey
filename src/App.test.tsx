import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('mongkolserey', () => {
  render(<App />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
