import React from 'react';
import { motion } from 'framer-motion';
import './InvitationCard.css';
import couplePhoto from '../assets/couple-photo.jpg';
import versePhoto from '../assets/verse-photo.jpg';

const InvitationCard = ({ isOpen, isRevealed }) => {
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
            <span className="save-the-date">SAVE THE DATE</span>
            <div className="divider-white" />
          </motion.div>

          <motion.h1 
            className="couple-names-white"
            initial={{ y: 20, opacity: 0 }}
            animate={isOpen ? { 
              y: [0, -10, 0], 
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
            Heni & Yab
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
              3 May 2026
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

      {/* Page 2: Event Details (Golden Hour Style) */}
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
          Save the Date
        </motion.h2>

        <motion.p 
          className="details-subtext"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We are getting married!
        </motion.p>
        
        <motion.div 
          className="details-divider" 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
        />
        
        <motion.h3 
          className="details-couple"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Heni & Yab
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
          <p className="details-date">3 May 2026</p>
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
          <p className="details-location-label">LOCATION</p>
          <p className="details-location">Salayish the Grand Hotel, Mizan Aman</p>
        </motion.div>

        <motion.button 
          className="rsvp-btn" 
          onClick={() => alert('RSVP Coming Soon')}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4 }}
          whileTap={{ scale: 0.95 }}
        >
          RSVP NOW
        </motion.button>

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

      {/* Page 3: Bible Verse Section */}
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
            "ስለዚህ ሰው አባቱንና እናቱን ይተዋል፥ በሚስቱም ይጣበቃል፤ ሁለቱም አንድ ሥጋ ይሆናሉ።"
          </motion.p>
          
          <motion.p 
            className="verse-reference"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            ኦሪት ዘፍጥረት 2:24
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
    </motion.div>
  );
};

export default InvitationCard;
