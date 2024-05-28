import React from 'react';

type WorkoutCardProps = {
  title: string;
  duration?: string;
  level?: string;
  description?: string;
  icon?: React.ReactNode;
};

export const WorkoutCard: React.FC<WorkoutCardProps> = ({
  title,
  duration,
  level,
}) => {
  return (
    <div className='workout-card'>
      <h3>{title}</h3>
      <p>
        {duration} - {level}
      </p>
    </div>
  );
};
