import React from 'react';
import userIcon from '/giphy.gif';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header className='transparent-header'>
      <h1 className='site-name'>Crazy Cycle</h1>
      <button className='user-icon-button'>
        <img src={userIcon} alt='User' className='user-icon' />
      </button>
    </header>
  );
};
