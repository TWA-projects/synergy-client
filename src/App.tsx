import './App.css';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { NavigationMenu } from './components/NavigationMenu';
import { Header } from './components/Header/Header';

export const App = () => {
  return (
    <div>
      <Header />
      <main className='section'>
        <AnimatePresence initial={false}>
          <Outlet />
        </AnimatePresence>
      </main>
      <NavigationMenu />
    </div>
  );
};
