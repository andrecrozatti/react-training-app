import React from 'react';
import styled from 'styled-components';

// Estilização do contêiner principal do post
const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 15px;
  border-bottom: 1px solid #fff;
  background-color: #1e1e1e;
  color: #ffffff;
  font-family: Arial, sans-serif;
  margin-top: 10px;

  &:hover {
    background-color: #222;
  }
`;

// Nome do autor e tempo
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #a9a9a9;
`;

// Conteúdo do post
const Content = styled.p`
  margin: 0;
  font-size: 16px;
  color: #ffffff;
`;

// Estilização do rodapé
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  font-size: 14px;
  color: #a9a9a9;
`;

const CustomSpan = styled.span`
  margin-right: 5px;
  color: #a9a9a9;
`;

// Botões de interação (curtir, comentar, compartilhar)
const ActionButtons = styled.div`
  display: flex;
  gap: 20px;

  button {
    background: none;
    border: none;
    color: #a9a9a9;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      color: #1da1f2;
    }
  }
`;

type BlogPostProps = {
  author: string;
  time: string;
  title?: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
};

const BlogPost: React.FC<BlogPostProps> = ({ author, time, title, content, likes, comments, shares }) => {
  return (
    <PostContainer >
      <Header>
        <span><strong>{author}</strong></span>
        <CustomSpan>{time}</CustomSpan>
      </Header>
      {title && <h3 style={{ margin: '0', fontSize: '18px', color: '#ffffff' }}>{title}</h3>}
      <Content>{content}</Content>
      <Footer>
        <ActionButtons>
          <button>💬 {comments} Comentários</button>
          <button>🔁 {shares} Compartilhamentos</button>
          <button>❤️ {likes} Curtidas</button>
        </ActionButtons>
      </Footer>
    </PostContainer>
  );
};

export default BlogPost;
