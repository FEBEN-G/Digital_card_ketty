import React, { useState, useEffect } from 'react';
import InvitationCard from './components/InvitationCard';
import FloatingPetals from './components/FloatingPetals';
import './index.css';
import openingVideo from './assets/envelope-opening.mp4';
import tapBackground from './assets/tap-background.png';
import { useTranslation } from 'react-i18next';
import { useTilt } from './useTilt';

function App() {
  const { t, i18n } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);
  const videoRef = React.useRef(null);
  const audioRef = React.useRef(null);
  const [musicOn, setMusicOn] = useState(true);
  const openRef = useTilt(9);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;
    audio.loop = true;
    audio.volume = 0.7;

    if (!musicOn) {
      audio.pause();
      return undefined;
    }

    let cancelled = false;
    const tryPlay = () => {
      if (cancelled) return;
      audio.play().then(() => {
        window.removeEventListener('pointerdown', tryPlay);
      }).catch(() => {});
    };

    tryPlay();
    window.addEventListener('pointerdown', tryPlay);
    return () => {
      cancelled = true;
      window.removeEventListener('pointerdown', tryPlay);
    };
  }, [musicOn]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const move = (event) => {
      document.documentElement.style.setProperty('--light-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--light-y', `${event.clientY}px`);
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  const isAmharic = i18n.language?.startsWith('am');

  const toggleLanguage = () => {
    i18n.changeLanguage(isAmharic ? 'en' : 'am');
  };

  const handleStart = () => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = 1.45;
    video.play();
    setIsPlaying(true);
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
      
      <div className="pointer-light" />

      {!videoFinished && (
        <div className="video-wrapper" ref={openRef} onClick={!isPlaying ? handleStart : undefined}>
          <div className="opening-stage">
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
        </div>
      )}

      <audio ref={audioRef} src="/wedding-music.mp3" loop autoPlay preload="auto" />

      <button
        className={`music-toggle ${musicOn ? 'is-on' : ''}`}
        onClick={() => setMusicOn((on) => !on)}
        aria-label={musicOn ? t('pause_music') : t('play_music')}
      >
        {musicOn ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" />
            <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
          </svg>
        )}
      </button>

      <button className="lang-toggle" onClick={toggleLanguage}>
        {isAmharic ? 'EN' : 'AMH'}
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
