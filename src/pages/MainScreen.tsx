import { MotionWrapper } from '../components/MotionWrapper';
import giphy from '/giphy.gif';

export const MainScreen = () => {
  return (
    <MotionWrapper title='Main Screen'>
      <div>
        <img
          src={giphy}
          alt='Vite logo'
          style={{
            borderRadius: '50%',
            width: '80%',
          }}
        />
      </div>
    </MotionWrapper>
  );
};
