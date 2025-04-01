'use client'
import React, { useEffect } from 'react';

const BackgroundContainer = ({ children, sourceName }) => {
  useEffect(() => {
    // Create a script element to handle permissions
    const script = document.createElement('script');
    script.innerHTML = `
      let permissionRequested = false;

      // Listen for messages from the iframe
      window.addEventListener('message', function (event) {
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
      });
    `;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
      
      <div 
        className="video-container" 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%', // Adjust width as needed
          maxWidth: '600px', // Maximum width
          aspectRatio: '16 / 9', // Maintain 16:9 aspect ratio
          zIndex: 10,
        }}
      >
        <iframe
          id="videoFrame"
          src="https://app.test-videospan.com/embed-collect-response/9f04fcfb-2bdb-4422-83d7-6062a180b17b/793cc763-82f0-49a6-95d9-a4ebcd70f154/eb641c8d-fdbf-465a-a66a-158813729737?_branch_match_id=1392874297684744850&utm_source=braid-app&utm_medium=participation-link&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9YrSS0u0S3LTEnNLy5IzNNLzs%2FVTy1z8fWpyjExCkqyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUA7qhMrEUAAAA%3D"
          title="Video Player"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '10px', // Optional: adds rounded corners
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // Optional: adds a subtle shadow
          }}
          allow="camera; microphone; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default BackgroundContainer;
