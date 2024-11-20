import React from 'react';
import AddPost from './AddPost';
import BlogPost from './BlogPost';

type BlogPostData = {
  author: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
};

const ListBlogPosts: React.FC = (): JSX.Element => {
  // Dados de exemplo. Normalmente, isso viria de uma API ou estado.
  const posts: BlogPostData[] = [
    {
      author: 'André',
      time: '20 de nov',
      content: 'O Vite é uma ferramenta incrível para desenvolvimento web. Ele permite que você escreva código mais rápido e eficazmente.',
      likes: 450,
      comments: 60,
      shares: 14,
    },
    {
      author: 'Mia 🌟 || cr',
      time: '19 de nov',
      content: 'Opinião impopular: livros com diálogos em travessão são MUITO superiores a diálogos com aspas.',
      likes: 571,
      comments: 60,
      shares: 14,
    },
    // Outros posts podem ser adicionados aqui
  ];

  return (
    <div>
      <AddPost />
      {posts.map((post, index) => (
        <BlogPost
          key={index}
          author={post.author}
          time={post.time}
          content={post.content}
          likes={post.likes}
          comments={post.comments}
          shares={post.shares}
        />
      ))}
    </div>
  );
};

export default ListBlogPosts;
