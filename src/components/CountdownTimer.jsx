import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './CountdownTimer.css';

const CountdownTimer = ({ targetDate }) => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial call

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { value: timeLeft.days, label: t('days') },
    { value: timeLeft.hours, label: t('hours') },
    { value: timeLeft.minutes, label: t('minutes') },
    { value: timeLeft.seconds, label: t('seconds') }
  ];

  return (
    <div className="countdown-container">
      <motion.div 
        className="countdown-header"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="timer-title">{t('time_remaining')}</p>
        <h3 className="timer-date">{t('wedding_date')}</h3>
        <p className="timer-day-time">{t('sunday_time')}</p>
      </motion.div>

      <div className="timer-grid">
        {units.map((unit) => (
          <div className="timer-unit-container" key={unit.label}>
            <div className="timer-box">
              <motion.span
                key={unit.value}
                className="timer-value"
                initial={{ rotateX: -75, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                {unit.value.toString().padStart(2, '0')}
              </motion.span>
            </div>
            <span className="timer-label">{unit.label}</span>
          </div>
        ))}
      </div>

      <motion.div 
        className="timer-divider"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="heart-icon">❤</div>
      </motion.div>
    </div>
  );
};

export default CountdownTimer;
