import { MotionWrapper } from '../components/MotionWrapper';

// import { useState } from 'react';
// import WebApp from '@twa-dev/sdk';
// import reactLogo from '../assets/react.svg';
// import viteLogo from '/vite.svg';

export const ScreenFour = () => {
  // const [count, setCount] = useState(0);
  return (
    <MotionWrapper title='Screen 4'>
      {/* <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div> */}
      {/* <h1>Vite + React</h1> */}
      {/* <div className='test-card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      {/* Here we add our button with alert callback */}
      {/* <div className='test-card'>
        <button
          onClick={() =>
            WebApp.showAlert(`Hello World! Current count is ${count}`)
          }
        >
          Show Alert
        </button>
      </div> */}
    </MotionWrapper>
  );
};
