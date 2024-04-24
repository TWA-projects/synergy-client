import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomeScreen, PageOne, PageTwo, PageThree } from './pages';

export const Root = () => {
  // No useLocation here, the Router provides the context now
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          {/* Index route for the nested routes */}
          <Route index element={<HomeScreen />} />
          <Route path='/biking' element={<PageOne />} />
          <Route path='/nutrition' element={<PageTwo />} />
          <Route path='/tasks' element={<PageThree />} />
          {/* Add more nested routes as needed */}
        </Route>
        {/* Other routes can be added here if necessary */}
      </Routes>
    </Router>
  );
};
