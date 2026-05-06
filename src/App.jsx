import React, { useState, useEffect } from 'react';
import InvitationCard from './components/InvitationCard';
import './index.css';
import openingVideo from './assets/envelope-opening.mp4';

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleVideoEnd = () => {
    setVideoFinished(true);
    // Snappy transition
    setShowInvitation(true);
  };

  return (
    <div className="app-container" onClick={!hasStarted ? handleStart : undefined}>
      {!hasStarted && (
        <div className="start-screen">
          <div className="tap-to-open">
            <span className="tap-text">Open Invitation</span>
            <div className="pulse-circle" />
          </div>
        </div>
      )}

      {hasStarted && !videoFinished && (
        <div className="video-wrapper">
          <video 
            src={openingVideo} 
            autoPlay 
            muted 
            playsInline
            onEnded={handleVideoEnd}
            className="opening-video"
          />
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
