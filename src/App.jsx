import React, { useState, useEffect } from 'react';
import InvitationCard from './components/InvitationCard';
import FloatingPetals from './components/FloatingPetals';
import './index.css';
import openingVideo from './assets/envelope-opening.mp4';
import tapBackground from './assets/tap-background.png';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);
  const videoRef = React.useRef(null);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'am' : 'en';
    i18n.changeLanguage(newLang);
  };

  const handleStart = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnd = () => {
    setVideoFinished(true);
    // Add a slight delay for the reveal to feel more cinematic
    setTimeout(() => {
      setShowInvitation(true);
    }, 100);
  };

  return (
    <div className="app-container">
      <FloatingPetals />
      
      {!videoFinished && (
        <div className="video-wrapper" onClick={!isPlaying ? handleStart : undefined}>
          <video 
            ref={videoRef}
            src={openingVideo} 
            poster={tapBackground}
            muted 
            playsInline
            onEnded={handleVideoEnd}
            className="opening-video"
          />
          {!isPlaying && (
            <div className="video-overlay-interact">
              <div className="pulse-circle">
                <span className="tap-to-open-text">{t('tap_to_open')}</span>
              </div>
            </div>
          )}
        </div>
      )}

      <button className="lang-toggle" onClick={toggleLanguage}>
        {i18n.language === 'en' ? 'AMH' : 'EN'}
      </button>

      {videoFinished && (
        <div className={`invitation-wrapper ${showInvitation ? 'reveal' : ''}`}>
          <InvitationCard isOpen={showInvitation} isRevealed={showInvitation} />
        </div>
      )}
      
      <div className="bg-decorations">
        <div className="circle circle-1" />
        <div className="circle circle-2" />
      </div>
    </div>
  );
}

export default App;
