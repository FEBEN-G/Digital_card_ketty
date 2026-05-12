import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './WeddingTimeline.css';

const WeddingTimeline = () => {
  const { t, i18n } = useTranslation();

  const events = [
    { time: '08:30', amTime: '02:30', label: 'procession', icon: '🚗', side: 'left' },
    { time: '10:30', amTime: '04:30', label: 'church', icon: '⛪', side: 'right' },
    { time: '11:30', amTime: '05:30', label: 'arrival', icon: '🏰', side: 'left' },
    { time: '13:00', amTime: '07:00', label: 'lunch', icon: '🍽', side: 'right' },
    { time: '15:30', amTime: '09:30', label: 'photos', icon: '📸', side: 'left' },
    { time: '17:00', amTime: '11:00', label: 'cake', icon: '🎂', side: 'right' },
  ];

  return (
    <div className="timeline-container">
      <motion.h2 
        className="timeline-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {t('wedding_program')}
      </motion.h2>

      <div className="timeline-main">
        <div className="timeline-line" />
        
        {events.map((event, index) => (
          <motion.div 
            key={index}
            className={`timeline-item ${event.side}`}
            initial={{ opacity: 0, x: event.side === 'right' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="timeline-dot-wrapper">
              <div className="timeline-dot" />
            </div>
            
            <div className="timeline-card">
              <div className="timeline-icon-box">{event.icon}</div>
              <div className="timeline-info">
                <span className="timeline-time">{i18n.language === 'am' ? event.amTime : event.time}</span>
                <span className="timeline-label">{t(event.label)}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WeddingTimeline;
