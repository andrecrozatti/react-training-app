import React, { useState } from 'react';
import './styles/trending.css'

const SearchBar: React.FC = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Você buscou por: ${searchTerm}`);
  };

  return (
    <form onSubmit={handleSearch} className='search-bar-form border-section' >
      <input
        type="text"
        className='search-bar-input'
        placeholder="Buscar posts..."
        value={searchTerm}
        onChange={handleInputChange}
        
      />
      <button className='search-bar-button' type="submit" >
        Buscar
      </button>
    </form>
  );
};


export default SearchBar;
