import React, { useEffect, useState } from 'react';
import AddPost from './AddPost';
import BlogPost from './BlogPost';

type BlogPostData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const ListBlogPosts: React.FC = (): JSX.Element => {

  const [posts, setPosts] = useState<BlogPostData[]>()

  const fetchPosts = async (): Promise<BlogPostData[]> => {

    return await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => json)
  }


  useEffect(() => {
    const fetchAllPosts = async () => {
      setPosts((await fetchPosts()).slice(0, 5))
    };

    fetchAllPosts()

  }, [])


  return (
    <div>
      <AddPost />      
      {posts?.map((post, index) => (
        <BlogPost
          key={index}
          id={post.id}
          userId={post.userId}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
};

export default ListBlogPosts;
