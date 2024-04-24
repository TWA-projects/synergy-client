import React from 'react';

type ProgressBarProps = {
  completed: number;
  total: number;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  completed,
  total,
}) => {
  const percentage = (completed / total) * 100;
  return (
    <div className='progress-bar'>
      <div
        className='progress-bar-filled'
        style={{ width: `${percentage}%` }}
      />
      <span className='progress-bar-text'>{`${completed}/${total} exercises`}</span>
    </div>
  );
};
