import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { NavigationMenu } from './components/NavigationMenu';
import './App.css';

export const App = () => {
  return (
    <div className='app'>
      <main>
        <AnimatePresence initial={false}>
          <Outlet />
        </AnimatePresence>
      </main>
      <NavigationMenu />
    </div>
  );
};
