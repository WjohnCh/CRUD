import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../components/Form';

test('permite llenar campos del formulario', () => {
    render(<Form />);

    const nomeInput = screen.getByLabelText(/nome/i);
    const emailInput = screen.getByLabelText(/e-mail/i);
    const telefoneInput = screen.getByLabelText(/telefone/i);
    const nascimentoInput = screen.getByLabelText(/data de nascimento/i);

    fireEvent.change(nomeInput, { target: { value: 'João' } });
    fireEvent.change(emailInput, { target: { value: 'joao@example.com' } });
    fireEvent.change(telefoneInput, { target: { value: '987654321' } });
    fireEvent.change(nascimentoInput, { target: { value: '2000-01-01' } });

    expect(nomeInput.value).toBe('João');
    expect(emailInput.value).toBe('joao@example.com');
    expect(telefoneInput.value).toBe('987654321');
    expect(nascimentoInput.value).toBe('2000-01-01');
});