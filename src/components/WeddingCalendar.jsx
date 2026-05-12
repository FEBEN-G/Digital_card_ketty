import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './WeddingCalendar.css';

const WeddingCalendar = () => {
  const { t, i18n } = useTranslation();
  const [calendarType, setCalendarType] = useState('gregorian'); // 'gregorian' or 'ethiopian'

  const gregorianDays = [
    null, null, null, null, null, 1, 2,
    3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31
  ];

  const ethiopianDays = [
    null, null, null, null, null, null, 1,
    2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30
  ];

  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const amharicWeekdays = ['እ', 'ሰ', 'ማ', 'ረ', 'ሐ', 'ዓ', 'ቅ'];

  const isSelected = (day) => {
    if (calendarType === 'gregorian' && day === 17) return true;
    if (calendarType === 'ethiopian' && day === 9) return true;
    return false;
  };

  return (
    <div className="calendar-card-container">
      <div className="calendar-controls">
        <button 
          className={`calendar-tab ${calendarType === 'gregorian' ? 'active' : ''}`}
          onClick={() => setCalendarType('gregorian')}
        >
          GREGORIAN
        </button>
        <button 
          className={`calendar-tab Amharic-font ${calendarType === 'ethiopian' ? 'active' : ''}`}
          onClick={() => setCalendarType('ethiopian')}
        >
          ETHIOPIAN
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={calendarType}
          className="calendar-grid-container"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="calendar-month-header">
            {calendarType === 'gregorian' ? 'MAY 2026' : 'ግንቦት 2018'}
          </div>

          <div className="calendar-weekdays">
            {(calendarType === 'gregorian' ? weekdays : amharicWeekdays).map((wd, i) => (
              <span key={i}>{wd}</span>
            ))}
          </div>

          <div className="calendar-days">
            {(calendarType === 'gregorian' ? gregorianDays : ethiopianDays).map((day, i) => (
              <div key={i} className={`calendar-day ${day === null ? 'empty' : ''} ${isSelected(day) ? 'selected' : ''}`}>
                {day}
                {isSelected(day) && (
                  <div className="heart-circle">
                    <svg viewBox="0 0 24 24" className="heart-svg">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="none" stroke="#D4AF37" strokeWidth="1.5"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default WeddingCalendar;
