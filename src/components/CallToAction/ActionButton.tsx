import React from 'react';
import './ActionButton.css';
// import aiCoachIcon from '/ai-coach-icon.webp';

type ActionButtonProps = {
  onClick: () => void;
  label: string;
};

export const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  label,
}) => {
  return (
    <button className='action-button' onClick={onClick}>
      <i className='fa-solid fa-wand-magic-sparkles'></i>
      {/* <img src={aiCoachIcon} alt='AI Coach' className='action-icon' /> */}
      <span style={{ marginLeft: '0.5rem' }}>{label}</span>
    </button>
  );
};
