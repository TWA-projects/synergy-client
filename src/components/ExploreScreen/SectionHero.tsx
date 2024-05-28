import React from 'react';

type SectionHeaderProps = {
  title: string;
  buttonText?: string;
};

export const SectionHero: React.FC<SectionHeaderProps> = ({
  title,
  buttonText,
}) => {
  return (
    <div className='section-hero'>
      <h1>{title}</h1>
      {buttonText && <button>{buttonText}</button>}
    </div>
  );
};
