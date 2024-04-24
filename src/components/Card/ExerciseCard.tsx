// ExerciseCard.js
import React from 'react';
import { ProgressBar } from './ProgressBar';

type ExerciseCardProps = {
  category: string;
  title: string;
  duration: string;
  totalExercises: number;
  completedExercises?: number;
};

export const ExerciseCard: React.FC<ExerciseCardProps> = ({
  category,
  title,
  duration,
  totalExercises,
  completedExercises,
}) => {
  return (
    <div className='exercise-card'>
      <span className='exercise-category'>{category}</span>
      <h3 className='exercise-title'>{title}</h3>
      <span className='exercise-duration'>{duration}</span>
      {typeof completedExercises === 'number' && (
        <ProgressBar completed={completedExercises} total={totalExercises} />
      )}
      {/* Add the button or link to continue the exercise */}
    </div>
  );
};
