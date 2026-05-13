import React from 'react';
import { motion } from 'framer-motion';

const Petal = ({ delay, x, duration, size }) => (
  <motion.div
    initial={{ y: -20, x: x, opacity: 0, rotate: 0 }}
    animate={{ 
      y: '110vh', 
      x: x + (Math.random() * 100 - 50),
      opacity: [0, 0.4, 0.4, 0],
      rotate: 360 
    }}
    transition={{ 
      duration: duration, 
      delay: delay, 
      repeat: Infinity,
      ease: "linear"
    }}
    style={{
      position: 'fixed',
      width: size,
      height: size,
      backgroundColor: '#F5E6CA', // Silk/Petal color
      borderRadius: '50% 0 50% 50%',
      zIndex: 0,
      pointerEvents: 'none',
      filter: 'blur(1px)'
    }}
  />
);

const FloatingPetals = () => {
  const petals = Array.from({ length: 15 });
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
      {petals.map((_, i) => (
        <Petal 
          key={i}
          delay={Math.random() * 10}
          x={Math.random() * 100 + '%'}
          duration={15 + Math.random() * 10}
          size={10 + Math.random() * 10}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;
