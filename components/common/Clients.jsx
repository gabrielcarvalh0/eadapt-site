'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';

function Clients() {
  const logos = [
    '/assets/imgs/logos/logo2.svg',
    '/assets/imgs/logos/logo3.svg',
    '/assets/imgs/logos/logo4.svg',
    '/assets/imgs/logos/logo5.svg',
    '/assets/imgs/logos/logo6.svg',
    '/assets/imgs/logos/logo7.webp',
    '/assets/imgs/logos/logo8.svg',
    '/assets/imgs/logos/logo9.svg',
    '/assets/imgs/logos/logo10.png',
    '/assets/imgs/logos/logo11.svg',
  ];

  return (
    <section className="clients-marquee section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h3>
                Temos prazer em trabalhar <br />{' '}
                <span className="opacity-7">com parceiros incríveis!</span>
              </h3>
            </div>
          </div>
        </div>
        {/* Marquee container */}
        <div className="marquee-wrapper">
          <Marquee gradient={false} speed={50}  direction="left" pauseOnHover>
            <div className="marquee-row">
              {logos.map((logo, index) => (
                <div key={index} className="marquee-item">
                  <img src={logo} alt={`Logo ${index + 1}`} className="icon-img-100" />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
        <div className="sec-bottom mt-100">
          <div className="main-bg d-flex align-items-center">
            <h6 className="fz-14 fw-400">
              Há mais de <span className="fw-400">10 anos, transformando</span> o digital juntos.
            </h6>
          </div>
        </div>
      </div>
      <style jsx>{`
        .marquee-wrapper {
          overflow: hidden;
          padding: 10px 0;
        }
        .marquee-row {
          display: flex;
          gap: 40px;
          justify-content: space-between;
          align-items: center;
        }
        .marquee-item {
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 40px;
        }
        .icon-img-100 {
          max-width: 200px;
          max-height: 80px;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}

export default Clients;
