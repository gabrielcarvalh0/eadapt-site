
import React from 'react';
import InstagramPost from './InstagramPost';

const InstagramSection = ({ posts }) => {
  return (
    <section id="portfolio" className="work-card section-padding pb-0">
      <div className="container">

     <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Nossas Redes</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                Veja nosso <span className="fw-200 pl-2"> Instagram</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="https://www.instagram.com/eadaptoficial/"
                target="_blank"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>Ver todos</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>

        <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'center',
      }}
    >
      {posts.map((post, index) => (
        <InstagramPost key={index} url={post} />
      ))}
    </div>

      </div>
    </section>
  );
};

export default InstagramSection;
