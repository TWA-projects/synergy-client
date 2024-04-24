import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// This is a basic fade animation, you can customize it as needed
const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

type Props = {
  title?: string;
  children?: React.ReactNode;
};

export const MotionWrapper: React.FC<Props> = ({ title, children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname} // Use the key to react to route changes
      initial='out' // Initial animation state
      animate='in' // Animate to this state
      exit='out' // Exit animation state
      variants={pageTransition} // Variants for animation states
    >
      {title && <h1 className='title'>{title}</h1>}
      {children}
    </motion.div>
  );
};
