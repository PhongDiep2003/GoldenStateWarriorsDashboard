// HeroSection Component
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { styles } from '../utils/styles';
import { Play, Pause } from 'lucide-react';
import { scrollToMain } from '../utils/functions';

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      }
    }
  }, []);
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        playsInline
        muted
      >
        <source src="/videos/highlight.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Uis */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Video Controls */}
      <div className="absolute bottom-4 right-4 flex space-x-2 z-40">
        <button
          onClick={togglePlay}
          className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center z-30">
        <div className={`${styles.container} w-full`}>
          <div className="max-w-2xl">
            <div className="mb-6">
              <div className="text-white text-sm font-medium mb-2 tracking-wider uppercase">
                Based in San Francisco
              </div>
              <h1
                className={`${styles.marginBtwContent} text-5xl md:text-7xl font-bold mb-6 leading-tight`}
              >
                Golden State Warriors
              </h1>
              <p
                className={`${styles.marginBtwContent} ${styles.contentText} text-white/90`}
              >
                We Believe – Win For The Bay
              </p>

              <button
                className={`${styles.marginBtwContent} bg-white  text-black font-semibold md:px-8 md:py-4 px-5 py-4 rounded-full text-lg ${styles.buttonHover} hover:bg-[#ecb840] `}
                onClick={scrollToMain}
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
