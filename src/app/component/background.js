'use client'
import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const BackgroundContainer = ({ 
  children, 
  sourceName, 
  iframeSrc 
}) => {
  const handleIframeMessage = useCallback((event) => {
    // Ensure the message is from the expected iframe
    const videoFrame = document.getElementById('videoFrame');
    
    if (videoFrame && event.source === videoFrame.contentWindow) {
      switch (event.data.type) {
        case 'RECORDER_READY':
          console.log('Recorder ready, permissions will be handled by the iframe');
          break;
        case 'PERMISSIONS_OBTAINED':
          console.log('Permissions obtained by the iframe');
          break;
        default:
          console.log('Received message from iframe:', event.data);
      }
    }
  }, []);

  useEffect(() => {
    // Add message event listener
    window.addEventListener('message', handleIframeMessage);

    // Cleanup function
    return () => {
      window.removeEventListener('message', handleIframeMessage);
    };
  }, [handleIframeMessage]);

  return (
    <div 
      className="background-container" 
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: `url('${sourceName}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {children}
      
      <div 
        className="video-container" 
        style={{
          position: 'absolute',
          left: '5%',
          width: '90%',
          maxWidth: '500px',
          aspectRatio: '16 / 9',
          zIndex: 10,
        }}
      >
        <iframe
          id="videoFrame"
          src={iframeSrc}
          title="Video Player"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          }}
          allow="camera; microphone; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};

BackgroundContainer.propTypes = {
  children: PropTypes.node,
  sourceName: PropTypes.string.isRequired,
  iframeSrc: PropTypes.string.isRequired
};

export default BackgroundContainer;
