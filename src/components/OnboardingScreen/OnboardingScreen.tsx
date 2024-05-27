import React from 'react';
import './OnboardingScreen.css'; // Ensure this path is correct

export const OnboardingScreen: React.FC = () => {
  return (
    <div className='onboarding-container'>
      <div className='text-container'>
        <h1 className='heading'>
          Wherever You Are <br /> Health Is Number One
        </h1>
        <p className='subtext'>There is no instant way to a healthy life</p>
        <button className='button-main'>Get Started</button>
      </div>
    </div>
  );
};
