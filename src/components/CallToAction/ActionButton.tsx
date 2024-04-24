import React from 'react';
import './ActionButton.css';
// import aiCoachIcon from '/ai-coach-icon.webp';

export const ActionButton: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => {
  return (
    <button className='action-button' onClick={onClick}>
      <i className='fa-solid fa-wand-magic-sparkles'></i>
      {/* <img src={aiCoachIcon} alt='AI Coach' className='action-icon' /> */}
      <span style={{ marginLeft: '0.5rem' }}>Start AI Coach</span>
    </button>
  );
};
