import React from 'react';

type ChallengeIconProps = {
  title: string;
};

export const ChallengeIcon: React.FC<ChallengeIconProps> = ({ title }) => {
  return (
    <div className='challenge-icon'>
      <p>{title}</p>
    </div>
  );
};
