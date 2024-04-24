// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import classNames from 'classnames';
// import './NavigationMenu.css';

// const getLinkClass = ({ isActive }: { isActive: boolean }) =>
//   classNames('navbar-item', { 'has-background-grey-lighter': isActive });

// export const NavigationMenu: React.FC = () => {
//   return (
//     <nav className='tabs is-toggle is-centered navigationMenu'>
//       <ul className='is-flex'>
//         <li className='is-active'>
//           <button className='navButton active'>
//             <span className='icon is-medium'>
//               <i className='fas fa-dumbbell'></i>
//               {/* <i className='fas fa-image' aria-hidden='true'></i> */}
//             </span>
//             {/* <span>Pictures</span> */}
//           </button>
//         </li>
//         <li>
//           <button className='navButton'>
//             <span className='icon is-medium'>
//               {/* <i className='fas fa-music' aria-hidden='true'></i> */}
//               <i className='fa-solid fa-person-biking'></i>
//             </span>
//             {/* <span>Music</span> */}
//           </button>
//         </li>
//         <li>
//           <button className='navButton'>
//             <span className='icon is-medium'>
//               {/* <i className='fas fa-film' aria-hidden='true'></i> */}
//               {/* <i className='fa-solid fa-utensils'></i> */}
//               <i className='fa-solid fa-plate-wheat'></i>
//             </span>
//             {/* <span>Videos</span> */}
//           </button>
//         </li>
//         <li>
//           <button className='navButton'>
//             <span className='icon is-medium'>
//               {/* <i className='far fa-file-alt' aria-hidden='true'></i> */}
//               <i className='fa-solid fa-list-check'></i>
//             </span>
//             {/* <span>Documents</span> */}
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './NavigationMenu.css';

const navItems = [
  { path: '/', iconClass: 'fas fa-dumbbell', text: 'Exercises' },
  { path: '/biking', iconClass: 'fa-solid fa-person-biking', text: 'Biking' },
  {
    path: '/nutrition',
    iconClass: 'fa-solid fa-plate-wheat',
    text: 'Nutrition',
  },
  { path: '/tasks', iconClass: 'fa-solid fa-list-check', text: 'Tasks' },
];

export const NavigationMenu: React.FC = () => {
  return (
    <nav className='tabs is-toggle is-centered navigationMenu'>
      <ul className='is-flex'>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink to={item.path} className={getLinkClass}>
              <span className='icon is-medium'>
                <i className={item.iconClass} aria-hidden='true'></i>
              </span>
              <span>{item.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', { 'has-background-grey-lighter': isActive });
