import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GlamorGram Business navigation link', () => {
  render(<App />);
  const businessLink = screen.getByRole('link', { name: /GlamorGram Business/i });
  expect(businessLink).toBeInTheDocument();
});