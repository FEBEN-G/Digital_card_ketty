import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './InvitationCard.css';
import couplePhoto from '../assets/couple-photo.jpg';
import versePhoto from '../assets/verse-photo.jpg';
import weddingRings from '../assets/wedding-rings.png';
import calendarBg from '../assets/calendar-bg.jpg';
import CountdownTimer from './CountdownTimer';
import WeddingCalendar from './WeddingCalendar';
import WeddingTimeline from './WeddingTimeline';
import PhotoGallery from './PhotoGallery';

const InvitationCard = ({ isOpen, isRevealed }) => {
  const { t, i18n } = useTranslation();
  return (
    <motion.div 
      className={`invitation-card ${isRevealed ? 'revealed' : ''}`}
      initial={{ y: 50, opacity: 0, scale: 0.9 }}
      animate={isOpen ? { y: 0, opacity: 1, scale: 1 } : { y: 50, opacity: 0, scale: 0.9 }}
      transition={{ 
        duration: 1.5, 
        ease: [0.65, 0, 0.35, 1] 
      }}
    >
      <div className="hero-section">
        <div className="full-screen-image-container">
          <img src={couplePhoto} alt="Heni & Yab" className="couple-photo-full" />
          <div className="card-overlay-cinematic" />
        </div>

        <div className="card-content-overlay">
          <motion.div 
            className="content-header"
            initial={{ y: 20, opacity: 0 }}
            animate={isOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="save-the-date">{t('save_the_date_caps')}</span>
            <div className="divider-white" />
          </motion.div>

          <motion.h1 
            className="couple-names-white script-font"
            initial={{ y: 20, opacity: 0 }}
            animate={isOpen ? { 
              y: [0, -5, 0], 
              opacity: 1 
            } : { y: 20, opacity: 0 }}
            transition={{ 
              y: { 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              },
              opacity: { duration: 0.8 }
            }}
          >
            Henok & Yabsira
          </motion.h1>

          <motion.div 
            className="wedding-details"
            initial={{ y: 20, opacity: 0 }}
            animate={isOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="wedding-date-white"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {t('wedding_date')}
            </motion.p>
            <motion.div 
              className="modern-scroll-container"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 24 24" className="modern-arrow-single">
                <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Page 2: Invitation Message Section */}
      <div className="message-page-section">
        <motion.div 
          className="message-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="floral-corner top-left" />
          <div className="floral-corner top-right" />
          
          <h2 className="message-title">{t('invitation_title')}</h2>
          <div className="message-divider" />
          <div className="message-body">
            {t('invitation_message').split('\n').map((line, i) => (
              <p key={i} className="message-line">
                {line.split('**').map((part, j) => (
                  j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                ))}
              </p>
            ))}
          </div>

          <div className="floral-corner bottom-left" />
          <div className="floral-corner bottom-right" />
        </motion.div>
      </div>

      {/* Page 3: Event Details (Golden Hour Style) */}
      <div className="event-details-section">
        <motion.div 
          className="decor-dots"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span>●</span>
          <span>●</span>
          <span>●</span>
        </motion.div>
        
        <motion.h2 
          className="details-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={weddingRings} alt="Rings" className="details-rings" />
          <span className="script-font gold-text">{t('save_the_date_caps')}</span>
        </motion.h2>

        <motion.p 
          className="details-subtext"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('getting_married')}
        </motion.p>
        
        <motion.div 
          className="details-divider" 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
        />
        
        <motion.h3 
          className="details-couple script-font"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Henok & Yabsira
        </motion.h3>

        <motion.div 
          className="details-date-box"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="corner top-left" />
          <div className="corner top-right" />
          <p className="details-date">{t('wedding_date')}</p>
          <div className="corner bottom-left" />
          <div className="corner bottom-right" />
        </motion.div>
        
        <motion.div 
          className="details-location-box"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="details-location-label">{t('wedding_venue')}</p>
          <p className="details-location">{t('location')}</p>
        </motion.div>

        <motion.div 
          className="event-schedule"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <div className="schedule-item">
            <span className="schedule-label">{t('ceremony')}</span>
            <span className="schedule-time">{i18n.language === 'am' ? '7:00' : '13:00'}</span>
          </div>
        </motion.div>

        <motion.div 
          className="footer-credits"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          Heni & Yab • 2026
        </motion.div>
      </div>

      {/* Page 4: Bible Verse Section */}
      <div className="verse-section">
        <div className="verse-photo-container">
          <motion.img 
            src={versePhoto} 
            alt="Bible Verse Background" 
            className="verse-photo"
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
          <div className="verse-overlay" />
        </div>

        <div className="verse-content">
          <motion.div 
            className="verse-decoration"
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          
          <motion.p 
            className="amharic-verse"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {t('bible_verse')}
          </motion.p>
          
          <motion.p 
            className="verse-reference"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {t('bible_reference')}
          </motion.p>

          <motion.div 
            className="verse-decoration bottom"
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
          />
        </div>
      </div>

      {/* Page 5: Countdown Section */}
      <div className="final-countdown-section">
        <CountdownTimer targetDate="2026-05-17T16:00:00" />
        
        <motion.div 
          className="final-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p>Heni & Yab • 2026</p>
        </motion.div>
      </div>

      {/* Page 6: Bridal Procession Section */}
      <div className="procession-section">
        <motion.div 
          className="timer-divider"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="heart-icon">❤</div>
        </motion.div>

        <motion.div 
          className="procession-content"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="procession-label">{t('bridal_procession')}</p>
          
          <div className="address-card">
            <div className="address-icon-container">
              <svg viewBox="0 0 24 24" className="map-icon-large">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
              </svg>
            </div>
            <div className="address-details">
              <p className="address-text">{t('location')}</p>
              <p className="address-subtext">{t('view_maps')}</p>
            </div>
          </div>

          <motion.button 
            className="directions-btn"
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://maps.app.goo.gl/SDszuiRxtY1xibsw5', '_blank')}
          >
            <svg viewBox="0 0 24 24" className="btn-icon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" fill="currentColor"/>
            </svg>
            {t('get_directions')}
          </motion.button>
        </motion.div>

        <motion.div 
          className="timer-divider"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="heart-icon">❤</div>
        </motion.div>
      </div>

      {/* Page 7: Calendar Section */}
      <div className="calendar-page-section">
        <div className="calendar-bg-container">
          <img src={calendarBg} alt="Calendar Background" className="calendar-bg-image" />
          <div className="calendar-overlay" />
        </div>

        <motion.div 
          className="calendar-content"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <WeddingCalendar />
          
          <motion.div 
            className="calendar-footer-text"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p>Save the date for our special day</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Page 8: Timeline Section */}
      <div className="timeline-page-section">
        <WeddingTimeline />
      </div>

      {/* Page 9: Photo Gallery Section */}
      <div className="gallery-page-section">
        <PhotoGallery />
      </div>

      {/* Page 10: Final Closing Section */}
      <div className="final-message-section">
        <motion.div 
          className="final-message-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="waiting-text script-font">{t('waiting_message')}</h2>
          <div className="signature-divider" />
          <p className="signature-names">Henok & Yabsira</p>
        </motion.div>
      </div>

    </motion.div>
  );
};

export default InvitationCard;
