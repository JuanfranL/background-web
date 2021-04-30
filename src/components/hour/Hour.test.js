import { render, screen } from '@testing-library/react';
import Hour from './Hour';

test('renders learn react link', () => {
  render(<Hour />);
  const linkElement = screen.getByText(/:/i);
  expect(linkElement).toBeInTheDocument();
});
