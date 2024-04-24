import { MotionWrapper } from '../components/MotionWrapper';
import { ActionButton } from '../components/CallToAction/ActionButton';

export const ScreenThree = () => {
  const handleButtonClick = () => {
    // Logic to start the AI Coach
    console.log('Starting AI Coach...');
    alert('Starting AI Coach...');
  };
  return (
    <MotionWrapper title='Screen 3'>
      <div>
        <ActionButton label='Start AI Coach' onClick={handleButtonClick} />
      </div>
    </MotionWrapper>
  );
};
