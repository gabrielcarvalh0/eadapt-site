'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Partners({ partners }) {
  const swiperOptions = {
    speed: 600,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 40,
    centeredSlides: true,
    breakpoints: {
      // when window width is >= 640px
      640: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      // when window width is >= 768px
      600: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
      // when window width is >= 1200px
      1000: {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 40,
        centeredSlides: true,
      },
    },
  };

  return (
    <section className="partners-section section-padding">
      <div className="container">
      <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h3>
                
             Empresas que acreditam  <br />{' '}
                <span className="opacity-7"> em nosso trabalho </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="partners-carousel">
          <Swiper {...swiperOptions}>
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="partner-logo">
                  <img src={partner.logo} alt={partner.name} title={partner.name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Partners;
