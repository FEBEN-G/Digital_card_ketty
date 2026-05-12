import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './CountdownTimer.css';

const CountdownTimer = ({ targetDate }) => {
  const { t, i18n } = useTranslation();
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

  const TimeUnit = ({ value, label }) => (
    <div className="timer-unit-container">
      <div className="timer-box">
        <span className="timer-value">{value.toString().padStart(2, '0')}</span>
      </div>
      <span className="timer-label">{label}</span>
    </div>
  );

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
        <TimeUnit value={timeLeft.days} label={t('days')} />
        <TimeUnit value={timeLeft.hours} label={t('hours')} />
        <TimeUnit value={timeLeft.minutes} label={t('minutes')} />
        <TimeUnit value={timeLeft.seconds} label={t('seconds')} />
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
