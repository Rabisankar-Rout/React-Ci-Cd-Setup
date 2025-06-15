// src/__tests__/App.test.js    
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders a component', () => {
    render(<App />);
    const linkElement = screen.getByText(/vite \+ React/i);
    expect(linkElement).toBeInTheDocument();
});

test('increments count on button click', () => {
  render(<App />);
  const buttonElement = screen.getByText(/count is 0/i);
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('count is 1');

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('count is 2');
});