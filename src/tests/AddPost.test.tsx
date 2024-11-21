import { render, screen, fireEvent } from '@testing-library/react';
import AddPost from '../pages/components/blogPosts/AddPost';
import '@testing-library/jest-dom';

global.fetch = jest.fn();

describe('AddPost Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(window, 'alert').mockImplementation(() => {}); // Mock do alert
  });

  it('should render the AddPost component', () => {
    render(<AddPost />);

    // Verifica se o campo de texto é renderizado
    const textArea = screen.getByPlaceholderText('O que você está pensando?');
    expect(textArea).toBeInTheDocument();

    // Verifica se o botão "Postar" é renderizado
    const postButton = screen.getByText('Postar');
    expect(postButton).toBeInTheDocument();
  });

  it('should alert and clear the input when a valid post is submitted', async () => {
    render(<AddPost />);

    const textArea = screen.getByPlaceholderText('O que você está pensando?');
    const postButton = screen.getByText('Postar');

    // Insere um conteúdo válido no campo de texto
    fireEvent.change(textArea, { target: { value: 'Meu primeiro post!' } });
    expect(textArea).toHaveValue('Meu primeiro post!');

    // Simula o envio do post
    fireEvent.click(postButton);

    // Verifica se o alerta foi chamado com a mensagem correta
    expect(window.alert).toHaveBeenCalledWith('Post enviado: Meu primeiro post!');

    // Verifica se o campo de texto foi limpo
    expect(textArea).toHaveValue('');

    // Verifica se o fetch foi chamado com os parâmetros corretos
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'Title 1',
        body: 'Meu primeiro post!',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  });

  it('should alert when trying to submit an empty post', () => {
    render(<AddPost />);

    const postButton = screen.getByText('Postar');

    // Simula o clique no botão "Postar" sem conteúdo
    fireEvent.click(postButton);

    // Verifica se o alerta foi chamado com a mensagem de erro
    expect(window.alert).toHaveBeenCalledWith('O post não pode estar vazio.');
  });

  it('should not call fetch for an empty post', () => {
    render(<AddPost />);

    const postButton = screen.getByText('Postar');

    // Simula o clique no botão "Postar" sem conteúdo
    fireEvent.click(postButton);

    // Garante que o fetch não foi chamado
    expect(fetch).not.toHaveBeenCalled();
  });
});
