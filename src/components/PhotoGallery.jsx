import React from 'react';
import { motion } from 'framer-motion';
import './PhotoGallery.css';

import emu1 from '../assets/emu-1.jpg';
import emu2 from '../assets/emu-2.jpg';
import emu3 from '../assets/emu-3.jpg';
import emu4 from '../assets/Emu-4.jpg';
import emu5 from '../assets/Emu-5.jpg';
import emu6 from '../assets/emu-6.jpg';
import emu7 from '../assets/Emu-7.jpg';
import emu8 from '../assets/emu-8.jpg';
import emu9 from '../assets/emu-9.jpg';
import emu11 from '../assets/emu-11.jpg';
import emu from '../assets/emu.jpg';

const photos = [
  { src: emu1, alt: 'Muluken and Rediet' },
  { src: emu2, alt: 'Muluken and Rediet' },
  { src: emu3, alt: 'Muluken and Rediet' },
  { src: emu4, alt: 'Muluken and Rediet' },
  { src: emu5, alt: 'Muluken and Rediet' },
  { src: emu6, alt: 'Muluken and Rediet' },
  { src: emu7, alt: 'Muluken and Rediet' },
  { src: emu8, alt: 'Muluken and Rediet' },
  { src: emu9, alt: 'Muluken and Rediet' },
  { src: emu11, alt: 'Muluken and Rediet' },
  { src: emu, alt: 'Muluken and Rediet' },
];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const dragStart = React.useRef(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const go = (direction) => {
    setCurrentIndex((prev) => (prev + direction + photos.length) % photos.length);
  };

  return (
    <div className="gallery-container">
      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: 20, rotateX: 12 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ transformPerspective: 800 }}
      >
        <span className="gallery-subtitle">OUR JOURNEY</span>
        <h2 className="gallery-title script-font">Beautiful Memories</h2>
      </motion.div>

      <div
        className="gallery-stage"
        onPointerDown={(event) => {
          dragStart.current = { x: event.clientX, y: event.clientY };
        }}
        onPointerUp={(event) => {
          if (!dragStart.current) return;
          const dx = event.clientX - dragStart.current.x;
          const dy = event.clientY - dragStart.current.y;
          dragStart.current = null;
          if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
          go(dx < 0 ? 1 : -1);
        }}
      >
        {photos.map((photo, index) => {
          let offset = index - currentIndex;
          if (offset > photos.length / 2) offset -= photos.length;
          if (offset < -photos.length / 2) offset += photos.length;
          const distance = Math.abs(offset);
          if (distance > 2) return null;

          return (
            <div className="gallery-card-anchor" key={photo.src} style={{ zIndex: 10 - distance }}>
              <motion.button
                type="button"
                className="gallery-card-3d"
                aria-label={photo.alt}
                onClick={() => setCurrentIndex(index)}
                animate={{
                  x: offset * 118,
                  z: -distance * 150,
                  rotateY: offset * -32,
                  scale: distance === 0 ? 1 : 0.86,
                  opacity: distance === 2 ? 0.55 : 1,
                }}
                transition={{ type: 'spring', stiffness: 220, damping: 26 }}
              >
                <img src={photo.src} alt={photo.alt} className="gallery-photo-organic" />
              </motion.button>
            </div>
          );
        })}
      </div>

      <div className="gallery-dots">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            className={`gallery-dot ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Show photo ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
