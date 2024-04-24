import React from 'react';
import './WelcomeMessage.css'; // Make sure to create a corresponding CSS file for styling

// WelcomeMessage component accepts a 'name' prop to display a personalized greeting
export const WelcomeMessage: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className='welcome-message'>
      <h1>Welcome to Crazy Circle, {name}!</h1>
      <p>Your adventure starts here.</p>
    </div>
  );
};
