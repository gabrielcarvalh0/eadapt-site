"use client";
import React, { useEffect } from 'react';

const InstagramPost = ({ url }) => {
  useEffect(() => {
    // Carrega o script do Instagram Embed
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.instagram.com/embed.js';
    document.body.appendChild(script);

    // Cleanup do script
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        background: '#FFF',
        border: 0,
        borderRadius: '3px',
        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
        margin: '1px',
        maxWidth: '400px',
        minWidth: '326px',
        padding: 0,
        width: 'calc(100% - 2px)',
      }}
    ></blockquote>
  );
};

export default InstagramPost;
