import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './NavigationMenu.css';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navButton', { active: isActive });

export const NavigationMenu: React.FC = () => {
  return (
    <nav className='navigationMenu'>
      <NavLink to='/' className={getLinkClass}>
        <span className='icon is-medium'>
          <i className='fas fa-dumbbell'></i>
        </span>
        <span className='label'>Exercises</span>
      </NavLink>
      <NavLink to='/biking' className={getLinkClass}>
        <span className='icon is-medium'>
          <i className='fa-solid fa-person-biking'></i>
        </span>
        <span className='label'>Biking</span>
      </NavLink>
      <NavLink to='/nutrition' className={getLinkClass}>
        <span className='icon is-medium'>
          <i className='fa-solid fa-plate-wheat'></i>
        </span>
        <span className='label'>Nutrition</span>
      </NavLink>
      <NavLink to='/tasks' className={getLinkClass}>
        <span className='icon is-medium'>
          <i className='fa-solid fa-list-check'></i>
        </span>
        <span className='label'>Checklist</span>
      </NavLink>
    </nav>
  );
};
