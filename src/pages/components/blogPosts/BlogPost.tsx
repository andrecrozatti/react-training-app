import React, { useEffect, useState } from 'react';
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
  userId: number;
  id: number;
  title: string;
  body: string;
};

type UserPostProps = {
  id: number;
  name: string;
  username: string;
  email: string;
}

type CommentsProps = {

  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;

}


const BlogPost: React.FC<BlogPostProps> = ({ userId, id, title, body }) => {


  const [userName, setUserName] = useState<string>("");
  const [comments, setComments] = useState<CommentsProps[]>([]);
  const [showComments, setShowComments] = useState<boolean>(false)
  const [shares, setShares] = useState<number>(0);
  const [likes, setLikes] = useState<number>(0);

  const loadPosts = async (): Promise<UserPostProps> => {

    return await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(json => json)
  }

  const loadComments = async (): Promise<CommentsProps[]> => {

    return await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(response => response.json())
      .then(json => json)
  }

  const handleShowComments = () => {

    setShowComments(!showComments)
  }


  useEffect(() => {
    const fetchAllPosts = async () => {
      var user = await loadPosts()
      setUserName(user.name)
    };

    const fetchCommentsFromPost = async () => {
      setComments(await loadComments())
    };

    fetchAllPosts()
    fetchCommentsFromPost()
  }, [])



  return (
    <PostContainer>
      <Header>
        <span><strong>{userName}</strong></span>
        <CustomSpan>{new Date().toLocaleDateString()}</CustomSpan>
      </Header>
      {title && <h3 style={{ margin: '0', fontSize: '18px', color: '#ffffff' }}>{title}</h3>}
      <Content>{body}</Content>
      <Footer>
        <ActionButtons>
          <button onClick={handleShowComments}>💬 {comments.length} Comentários</button>
          <button>🔁 {shares} Compartilhamentos</button>
          <button>❤️ {likes} Curtidas</button>
        </ActionButtons>
      </Footer>
      {showComments && (
        <div className="comments-section">
          {comments.map(comment => (
            <div key={comment.id} className="comment">
              <small>
                <strong className="comment-author">{comment.name}</strong> - <span className="comment-body">{comment.body}</span>
              </small>
            </div>
          ))}
        </div>
      )}
    </PostContainer>
  );
};

export default BlogPost;
