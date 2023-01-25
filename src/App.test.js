import { render, screen } from '@testing-library/react';
import App from './App';

test('renders string 1 field', () => {
  render(<App />);
  const string1 = screen.getByText(/String 1/i);
  expect(string1).toBeInTheDocument();
});

test('renders string 2 field', () => {
  render(<App />);
  const string2 = screen.getByText(/String 2/i);
  expect(string2).toBeInTheDocument();
});

test('renders submit button', () => {
  render(<App />);
  const string2 = screen.getByText(/Check strings/i);
  expect(string2).toBeInTheDocument();
});
