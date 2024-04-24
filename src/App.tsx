import './App.css';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { NavigationMenu } from './components/NavigationMenu';

export const App = () => {
  return (
    <div>
      <main className='section'>
        <AnimatePresence initial={false}>
          <Outlet />
        </AnimatePresence>
      </main>
      <NavigationMenu />
    </div>
  );
};
