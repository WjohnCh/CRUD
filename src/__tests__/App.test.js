import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renderiza el título CRUD', () => {
  render(<App />);
  const titulo = screen.getByText(/USUARIOS/i);
  expect(titulo).toBeInTheDocument();
});