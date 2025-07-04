import { render, screen, fireEvent } from '@testing-library/react';
import Grid from '../components/Grid';
import axios from 'axios';

jest.mock('axios');

test('flujo completo de editar y eliminar en Grid', async () => {
    const mockUser = { 
        id: 1, 
        nome: 'Juan', 
        email: 'juan@example.com', 
        fone: '123456789', 
        data_nascimento: '2000-01-01' 
    };

    const mockSetOnEdit = jest.fn();
    const mockGetUsers = jest.fn();

    render(<Grid users={[mockUser]} setOnEdit={mockSetOnEdit} getUsers={mockGetUsers} />);

    expect(screen.getByText('Juan')).toBeInTheDocument();
    expect(screen.getByText('juan@example.com')).toBeInTheDocument();

    const editButton = screen.getByRole('button', { name: /editar/i });
    fireEvent.click(editButton);

    expect(mockSetOnEdit).toHaveBeenCalledWith(mockUser);

    axios.delete.mockResolvedValueOnce({ data: 'Usuário deletado com sucesso' });

    const deleteButton = screen.getByRole('button', { name: /deletar/i });
    fireEvent.click(deleteButton);
});