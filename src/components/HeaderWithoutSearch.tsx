import React from 'react';
import {NavLink} from 'react-router-dom';
export const HeaderWithoutSearch: React.FC = () => {
  return (
    <div className='header'>
      <NavLink to='/' className='logo-text'>Your movie</NavLink>
      <div className='toolbar'>
        <NavLink to='/author'>About the author</NavLink>
        <NavLink to='/team'>About the team</NavLink>
      </div>
    </div>
  );
};
