import { MotionWrapper } from '../components/MotionWrapper';
import WebApp from '@twa-dev/sdk';

export const ScreenFour = () => {
  return (
    <MotionWrapper title='Screen 4'>
      <button
        onClick={() =>
          WebApp.showAlert(`Hello World! Current count is not set`)
        }
      >
        Show Alert
      </button>
    </MotionWrapper>
  );
};
