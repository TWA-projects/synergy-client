import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import data from '../../data/data.json';
import lightColor from '../../utils/colorComparision';
import {
  telegramBackButton,
  telegramMainButton,
  telegramWebApp,
} from '../../utils/telegramWebAppComponents';
import './HomeScreen.css';

export const Gallery: React.FC = () => {
  telegramMainButton.hide();
  telegramBackButton.hide();
  telegramWebApp.enableClosingConfirmation();

  // Using useRef here at the top level as per React's rules for hooks.
  const imgRefs = useRef<(HTMLImageElement | null)[]>(
    new Array(data.length).fill(null),
  );

  useEffect(() => {
    // Example of how you might handle CSS custom properties directly in JavaScript
    data.forEach((movie, index) => {
      const element = imgRefs.current[index];
      if (element?.parentNode) {
        const container = element.parentNode as HTMLElement;
        container.style.setProperty(
          '--container-background-text',
          movie.text_color,
        );
        container.style.setProperty(
          '--container-background',
          movie.background_color,
        );
        container.style.setProperty(
          '--container-background-text-light',
          lightColor(movie.text_color, movie.background_color),
        );
      }
    });
  }, []);

  return (
    <div className='movie-container'>
      {data.map((movie, index) => (
        <div key={movie?.title || index}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              className='poster-container'
              to={`/movie/${index}`}
              onClick={() =>
                window.Telegram.WebApp.HapticFeedback.impactOccurred('medium')
              }
            >
              <div className='rating circle'>{movie.score}</div>
              <img
                ref={(el) => (imgRefs.current[index] = el)}
                className='movie-poster hide'
                src={movie.poster}
                alt={movie.title}
                onLoad={() => {
                  const current = imgRefs.current[index];
                  if (current) {
                    current.classList.toggle('hide');
                  }
                }}
                onError={(e) => {
                  if (e.currentTarget) {
                    e.currentTarget.src = 'path_to_default_image.jpg'; // Placeholder image on error
                  }
                }}
              />
              <div className='overlay'>
                <div className='overlay-runtime'>{movie.runtime}</div>
              </div>
            </Link>
            <Link
              className='title'
              to={`/movie/${index}`}
              onClick={() =>
                window.Telegram.WebApp.HapticFeedback.impactOccurred('medium')
              }
            >
              {movie.title}
            </Link>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
