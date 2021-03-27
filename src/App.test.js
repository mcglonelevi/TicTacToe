import { render, screen } from '@testing-library/react';
import App from './App';

xit('<App />', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
