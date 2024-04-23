import React from 'react';
import './NavigationMenu.css';

// const NavigationMenu: React.FC = () => {
//   return (
//     <nav className='navigationMenu'>
//       <button className='navButton exercises active'>Программы</button>
//       <button className='navButton statistics'>Питание</button>
//       <button className='navButton settings'>Марафон</button>
//     </nav>
//   );
// };

const NavigationMenu: React.FC = () => {
  return (
    <div className='tabs is-centered navigationMenu'>
      <ul>
        <li className='is-active'>
          <button>
            <span className='icon is-small'>
              <i className='fas fa-image' aria-hidden='true'></i>
            </span>
            <span>Pictures</span>
          </button>
        </li>
        <li>
          <button>
            <span className='icon is-small'>
              <i className='fas fa-music' aria-hidden='true'></i>
            </span>
            <span>Music</span>
          </button>
        </li>
        <li>
          <button>
            <span className='icon is-small'>
              <i className='fas fa-film' aria-hidden='true'></i>
            </span>
            <span>Videos</span>
          </button>
        </li>
        <li>
          <button>
            <span className='icon is-small'>
              <i className='far fa-file-alt' aria-hidden='true'></i>
            </span>
            <span>Documents</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
