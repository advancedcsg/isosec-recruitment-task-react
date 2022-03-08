import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Advanced logo', () => {
  render(<App />);
  const logoElement = screen.getByAltText(`Advanced logo`);
  expect(logoElement).toBeInTheDocument();
});
