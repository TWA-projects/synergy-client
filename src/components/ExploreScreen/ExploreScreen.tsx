import React from 'react';
import './ExploreScreen.css';

export const ExploreScreen: React.FC = () => {
  return (
    <div className='explore-container'>
      <div className='section-hero'>
        <h1 className='hero-title'>Best Workout</h1>
        <button className='hero-button'>See all</button>
      </div>
      <div>Best for you</div>
      <div>Challenge</div>
      <div>Fast Warmup</div>
    </div>
  );
};
