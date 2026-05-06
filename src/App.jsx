import React, { useState, useEffect } from 'react';
import InvitationCard from './components/InvitationCard';
import './index.css';
import openingVideo from './assets/envelope-opening.mp4';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);
  const videoRef = React.useRef(null);

  const handleStart = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnd = () => {
    setVideoFinished(true);
    setShowInvitation(true);
  };

  return (
    <div className="app-container">
      {!videoFinished && (
        <div className="video-wrapper" onClick={!isPlaying ? handleStart : undefined}>
          <video 
            ref={videoRef}
            src={openingVideo} 
            muted 
            playsInline
            onEnded={handleVideoEnd}
            className="opening-video"
          />
          {!isPlaying && (
            <div className="video-overlay-interact">
              <div className="pulse-circle">
                <span className="tap-to-open-text">Tap to Open</span>
              </div>
            </div>
          )}
        </div>
      )}

      {videoFinished && (
        <div className={`invitation-wrapper ${showInvitation ? 'reveal' : ''}`}>
          <InvitationCard isOpen={true} isRevealed={true} />
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
