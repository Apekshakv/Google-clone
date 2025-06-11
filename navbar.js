import React, { useState } from 'react';
import { useResultContext } from './contex/resultcontextprovider'; 
import { Link } from 'react-router-dom';
import './navbar.css';
import searchIcon from './imgs/search.png';

const Navbar = () => {
  const { getResults } = useResultContext(); 
  const [item, setItem] = useState('');

  const handleSearch = () => {
    
      getResults(`/?query=${item}&limit=10&related_keywords=true`);
    
  };

  return (
    <div className='nav'>
      <span className="input-wrapper">
        <Link to='/' className='Link'>
          <h1>Google</h1>
        </Link>
        <input
          type='text'
          placeholder='Search'
          className='search-box'
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button className="icon-button" onClick={handleSearch}>
          <img src={searchIcon} className="icon-img" alt="search" />
        </button>
      </span>
    </div>
  );
};

export default Navbar;
