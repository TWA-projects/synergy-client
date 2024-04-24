import { MotionWrapper } from '../components/MotionWrapper';
import giphy from '/giphy.gif';

export const PageThree = () => {
  return (
    <MotionWrapper title='Page 1'>
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
