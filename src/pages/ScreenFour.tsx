import { MotionWrapper } from '../components/MotionWrapper';
import giphy from '/giphy.gif';

export const ScreenFour = () => {
  return (
    <MotionWrapper title='Screen 4'>
      <div>
        <img
          src={giphy}
          alt='Vite logo'
          style={{
            borderRadius: '50%',
          }}
        />
      </div>
    </MotionWrapper>
  );
};
