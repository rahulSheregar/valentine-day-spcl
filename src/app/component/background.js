'use client'
import React, { useEffect } from 'react';

const BackgroundContainer = ({ children, sourceName }) => {
  useEffect(() => {
    // This is where your script logic goes
    let permissionRequested = false;

    // Listen for messages from the iframe
    const handleMessage = (event) => {
      console.log('Message received from iframe:', event.data);
      // Make sure the message is from our iframe
      if (
        event.source === document.getElementById('videoFrame')?.contentWindow
      ) {
        if (event.data.type === 'RECORDER_READY') {
          console.log(
            'Recorder ready, permissions will be handled by the iframe',
          );
        }

        if (event.data.type === 'PERMISSIONS_OBTAINED') {
          console.log('Permissions obtained by the iframe');
          permissionRequested = true;
        }
      }
    };

    window.addEventListener('message', handleMessage);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <div 
      className="background-container" 
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url('${sourceName}')`,
      }}
    >
      {children}
      
      <div className="video-container">
        <iframe
          id="videoFrame"
          src="https://localhost:5173/embed-collect-response/9f04fcfb-2bdb-4422-83d7-6062a180b17b/793cc763-82f0-49a6-95d9-a4ebcd70f154/eb641c8d-fdbf-465a-a66a-158813729737?_branch_match_id=1396713678641974204&utm_source=braid-app&utm_medium=participation-link&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9YrSS0u0S3LTEnNLy5IzNNLzs%2FVTy1z8fWpyjExCkqyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUA7qhMrEUAAAA%3D"
          title="Video Player"
          frameBorder="0"
          allow="camera; microphone; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default BackgroundContainer;
