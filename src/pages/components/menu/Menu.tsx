import React from 'react';
// import './Menu.css';

const Menu: React.FC = (): JSX.Element => {
  return (
    <nav className="menu border-section">
      <ul className="menu-list">
        <li className="menu-item active">
          <span className="menu-icon">🏠</span>
          <span className="menu-text">Página Inicial</span>
        </li>
        <li className="menu-item">
          <span className="menu-icon">🔍</span>
          <span className="menu-text">Explorar</span>
        </li>
        <li className="menu-item">
          <span className="menu-icon">🔔</span>
          <span className="menu-text">Notificações</span>
        </li>
        <li className="menu-item">
          <span className="menu-icon">✉️</span>
          <span className="menu-text">Mensagens</span>
        </li>
        <li className="menu-item">
          <span className="menu-icon">📝</span>
          <span className="menu-text">Grok</span>
        </li>
        <li className="menu-item">
          <span className="menu-icon">🔖</span>
          <span className="menu-text">Itens salvos</span>
        </li>
        <li className="menu-item">
          <span className="menu-icon">👥</span>
          <span className="menu-text">Comunidades</span>
        </li>
        <li className="menu-item">
          <span className="menu-icon">💎</span>
          <span className="menu-text">Premium</span>
        </li>
        <li className="menu-item">
          <span className="menu-icon">⚡</span>
          <span className="menu-text">Organizações Verif</span>
        </li>
        <li className="menu-item">
          <span className="menu-icon">👤</span>
          <span className="menu-text">Perfil</span>
        </li>
        <li className="menu-item">
          <span className="menu-icon">⋯</span>
          <span className="menu-text">Mais</span>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
