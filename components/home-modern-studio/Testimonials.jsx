'use client';
import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const reviews = [
  {
    text: "A Mobilar Móveis conseguiu migrar para o digital graças à E-Adapt. Recomendo fortemente!"
      .slice(0, 100) + "...",
    author: {
      name: "Sandra Rodrigues",
      role: "CEO Mobilar Móveis",
    },
  },
  {
    text: "A E-Adapt foi fundamental na nossa transição ao e-commerce. Suporte excepcional e confiável!"
      .slice(0, 100) + "...",
    author: {
      name: "Leonardo Rocha",
      role: "CEO Loja Bikebe",
    },
  },
  {
    text: "Consultoria da E-Adapt elevou nossa loja com estratégias de marketing digital eficazes."
      .slice(0, 100) + "...",
    author: {
      name: "Carla Dias",
      role: "CEO Carla Moda",
    },
  },
  {
    text: "A E-Adapt transformou nossa presença online com campanhas otimizadas e resultados notáveis."
      .slice(0, 100) + "...",
    author: {
      name: "Marcos Lima",
      role: "Fundador da TechWave Solutions",
    },
  },
];

function Testimonials() {
  const swiperOptions = {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 15,
    loop: true,
    breakpoints: {
      0: { slidesPerView: 1 },
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 'auto' },
    },
    navigation: {
      nextEl: '.testim-modern .swiper-button-next',
      prevEl: '.testim-modern .swiper-button-prev',
    },
  };

  return (
    <section id="testimonials" className="testim-modern section-padding sub-bg bord-top-grd bord-bottom-grd">
      <div className="container">
        <div className="sec-head mb-40">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-3">Depoimentos</span>
              <h3 className="fw-600 fz-30 text-u d-rotate wow">
                <span className="rotate-text">
                O que dizem  <span className="fw-200"> nossos clientes?</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testim-swiper3 out-right" data-carousel="swiper" data-loop="true" data-space="15">
          <Swiper {...swiperOptions} id="content-carousel-container-unq-testim" className="swiper-container" data-swiper="container">
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="item h-100 d-flex flex-column justify-content-between" style={{ minHeight: '300px', maxHeight: '300px' }}>
                  <div className="cont flex-grow-1 mb-5">
                    <h6 className="sub-title mb-5 fz-14">Review</h6>
                    <div className="text" style={{ fontSize: '12px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      <p>“ {review.text} ”</p>
                    </div>
                  </div>
                  <div className="info">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="img fit-img main-color butn" style={{ width: '30px', height: '30px' }}>
                        <span className='d-flex align-items-center color-white justify-content-center' style={{ fontSize: '18px', fontWeight: 'bold', lineHeight: '30px'}}> {review.author.name.charAt(0, 1)} </span>
                        </div>
                      </div>
                      <div className="ml-10">
                        <h6 className="fz-12">{review.author.name}</h6>
                        <span className="p-color opacity-8 fz-10 mt-2">{review.author.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
