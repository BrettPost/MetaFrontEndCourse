import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Little Lemon/i);
  expect(linkElement).toBeInTheDocument();
});

test('reserve a table', () => {
  render(<App />);

  const reserveBtn = screen.getByTestId("reserveTable");
  fireEvent.click(reserveBtn);

  const reservation = screen.getByTestId("reservation");

  expect(reservation).toHaveTextContent("Reservation 1");
})


