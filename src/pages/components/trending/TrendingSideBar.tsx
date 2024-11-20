import React from 'react';
import styled from 'styled-components';

// Contêiner principal
const SidebarContainer = styled.div`
  
  padding: 15px;
  background-color: #1e1e1e;
  color: #ffffff;
  border-radius: 10px;
  font-family: Arial, sans-serif;
`;

// Título da seção
const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
`;

// Item de tendência
const TrendingItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;

  &:last-child {
    border-bottom: none;
  }
`;

// Categoria e Assunto
const Category = styled.span`
  font-size: 12px;
  color: #a9a9a9;
`;

const Topic = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 5px;
`;

// Posts associados
const PostCount = styled.span`
  font-size: 12px;
  color: #a9a9a9;
  margin-top: 5px;
`;

// Link para ver mais
const SeeMoreLink = styled.a`
  display: inline-block;
  margin-top: 15px;
  font-size: 14px;
  color: #1da1f2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

type TrendingItemProps = {
  category: string;
  topic: string;
  postCount?: number;
};

const TrendingSidebar: React.FC = (): JSX.Element => {
  // Dados de exemplo para tendências
  const trends: TrendingItemProps[] = [
    { category: 'Música', topic: '#ÉoTchan' },
    { category: 'Entretenimento', topic: 'Silvio Santos', postCount: 1631 },
    { category: 'Entretenimento', topic: 'Fausto Silva', postCount: 10000 },
    { category: 'Assuntos do Momento', topic: 'Bitcoin', postCount: 76000 },
    { category: 'Assuntos do Momento', topic: 'Jogo do Vasco', postCount: 76000 },
  ];

  return (
    <SidebarContainer className='border-section'>
     
      <SectionTitle>O que está acontecendo</SectionTitle>
      {trends.map((trend, index) => (
        <TrendingItem key={index}>
          <Category>{trend.category}</Category>
          <Topic>{trend.topic}</Topic>
          {trend.postCount && <PostCount>{trend.postCount.toLocaleString()} posts</PostCount>}
        </TrendingItem>
      ))}
      <SeeMoreLink href="#">Mostrar mais</SeeMoreLink>
    </SidebarContainer>
  );
};

export default TrendingSidebar;
