import './App.css';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { NavigationMenu } from './components/NavigationMenu';
import { Header } from './components/Header/Header';
import { WelcomeMessage } from './components/WelcomMessage/WelcomeMessage';

export const App = () => {
  return (
    <div>
      <Header />
      <WelcomeMessage name='Lena' />
      <main className='section'>
        <AnimatePresence initial={false}>
          <Outlet />
        </AnimatePresence>
      </main>
      <NavigationMenu />
    </div>
  );
};
