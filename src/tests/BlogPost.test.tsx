import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BlogPost from '../pages/components/blogPosts/BlogPost'; // Ajuste o caminho conforme o seu projeto
import '@testing-library/jest-dom';

// Mock para fetch API
global.fetch = jest.fn();

describe('BlogPost Component', () => {
  const mockUserResponse = {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@example.com',
  };

  const mockCommentsResponse = [
    {
      postId: 1,
      id: 1,
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      body: 'Great post!',
    },
    {
      postId: 1,
      id: 2,
      name: 'Sam Smith',
      email: 'samsmith@example.com',
      body: 'Thanks for sharing!',
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the BlogPost component with title and body', async () => {
    // Mock para as chamadas de API
    (fetch as jest.Mock)
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(mockUserResponse),
      })
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(mockCommentsResponse),
      });

    render(<BlogPost userId={1} id={1} title="Test Title" body="Test Body" />);

    // Verifica a renderização inicial
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Body')).toBeInTheDocument();

    // Verifica o nome do autor após a API ser resolvida
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });

  it('should toggle the comments section when the button is clicked', async () => {
    // Mock para as chamadas de API
    (fetch as jest.Mock)
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(mockUserResponse),
      })
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(mockCommentsResponse),
      });

    render(<BlogPost userId={1} id={1} title="Test Title" body="Test Body" />);

    // Aguarda a resolução da API
    await waitFor(() => {
      expect(screen.getByText('💬 2 Comentários')).toBeInTheDocument();
    });

    // Clica no botão para exibir os comentários
    fireEvent.click(screen.getByText('💬 2 Comentários'));

    // Verifica se os comentários aparecem
    await waitFor(() => {
      expect(screen.getByText('Great post!')).toBeInTheDocument();
      expect(screen.getByText('Thanks for sharing!')).toBeInTheDocument();
    });

    // Clica novamente para ocultar os comentários
    fireEvent.click(screen.getByText('💬 2 Comentários'));
    expect(screen.queryByText('Great post!')).not.toBeInTheDocument();
  });

  it('should update likes and shares when buttons are clicked', () => {
    render(<BlogPost userId={1} id={1} title="Test Title" body="Test Body" />);

    const likeButton = screen.getByText('❤️ 0 Curtidas');
    const shareButton = screen.getByText('🔁 0 Compartilhamentos');

    // Simula clique no botão de curtidas
    fireEvent.click(likeButton);
    fireEvent.click(likeButton);
    expect(screen.getByText('❤️ 2 Curtidas')).toBeInTheDocument();

    // Simula clique no botão de compartilhamentos
    fireEvent.click(shareButton);
    expect(screen.getByText('🔁 1 Compartilhamentos')).toBeInTheDocument();
  });
});
