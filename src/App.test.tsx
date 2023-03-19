import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock("./component/NavBar/NavBar", () => () => "Navbar");

jest.mock("./pages/grocery/Grocery", () => () => "Grocery");

test('renders learn react link', () => {
  const screen = render(<App />);
  expect(screen.getByText(/Navbar/i)).toBeInTheDocument();
  expect(screen.getByText(/Grocery/i)).toBeInTheDocument();
});
