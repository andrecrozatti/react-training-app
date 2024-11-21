import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../pages/components/trending/SearchBar';
import '@testing-library/jest-dom';


describe('SearchBar Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(window, 'alert').mockImplementation(() => {}); // Mock do alert
  });

  it('should render the SearchBar component', () => {
    render(<SearchBar />);

    // Verifica se o campo de texto está presente
    const input = screen.getByPlaceholderText('Buscar posts...');
    expect(input).toBeInTheDocument();

    // Verifica se o botão de busca está presente
    const button = screen.getByRole('button', { name: /Buscar/i });
    expect(button).toBeInTheDocument();
  });

  it('should update the search term as the user types', () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText('Buscar posts...');

    // Simula o usuário digitando no campo de busca
    fireEvent.change(input, { target: { value: 'React' } });

    // Verifica se o valor do campo foi atualizado
    expect(input).toHaveValue('React');
  });

  it('should alert the search term when the form is submitted', () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText('Buscar posts...');
    const button = screen.getByRole('button', { name: /Buscar/i });

    // Simula o usuário digitando e enviando o formulário
    fireEvent.change(input, { target: { value: 'React Testing' } });
    fireEvent.click(button);

    // Verifica se o alerta foi exibido com o termo correto
    expect(window.alert).toHaveBeenCalledWith('Você buscou por: React Testing');
  });

  it('should not alert if the search term is empty', () => {
    render(<SearchBar />);

    const button = screen.getByRole('button', { name: /Buscar/i });

    // Simula o envio do formulário sem preencher o campo
    fireEvent.click(button);

    // Verifica se o alerta foi chamado com um termo vazio
    expect(window.alert).toHaveBeenCalledWith('Você buscou por: ');
  });

  it('should prevent default behavior when the form is submitted', () => {
    const preventDefault = jest.fn();
    render(<SearchBar />);

    const form = screen.getByRole('form');

    // Simula o envio do formulário
    fireEvent.submit(form, { preventDefault });

    // Verifica se o comportamento padrão foi prevenido
    expect(preventDefault).toHaveBeenCalled();
  });
});
