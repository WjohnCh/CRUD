import { render, screen } from '@testing-library/react';
import Grid from '../components/Grid';

test('muestra registros en el grid', () => {
    const mockData = [
        { id: 1, nome: 'Juan', email: 'juan@example.com', fone: '123456789', data_nascimento: '2000-01-01' },
        { id: 2, nome: 'Ana', email: 'ana@example.com', fone: '987654321', data_nascimento: '1999-05-05' },
    ];

    render(<Grid users={mockData} setOnEdit={jest.fn()} getUsers={jest.fn()} />);

    expect(screen.getByText('Juan')).toBeInTheDocument();
    expect(screen.getByText('Ana')).toBeInTheDocument();
    expect(screen.getByText('juan@example.com')).toBeInTheDocument();
    expect(screen.getByText('ana@example.com')).toBeInTheDocument();
});