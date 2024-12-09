'use client';

import React from 'react';

function Gallery({ images = [] }) {
  return (
    <div className="gallery-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {images.length > 0 ? (
        images.map((image, index) => (
          <div
            key={index}
            className="bg-img"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '300px',
              borderRadius: '8px',
            }}
          />
        ))
      ) : (
        <div style={{ textAlign: 'center', padding: '50px', color: 'gray' }}>
          No images available
        </div>
      )}
    </div>
  );
}

export default Gallery;
