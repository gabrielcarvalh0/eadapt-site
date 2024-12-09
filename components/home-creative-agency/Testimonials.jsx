"use client";
import loadBackgroudImages from "@/common/loadBackgroudImages";
import React, { useEffect } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Definindo a estrutura do tipo dos depoimentos

const Testimonials = () => {
  // Array de depoimentos
  const testimonials = [
    {
      id: 1,
      name: "Sandra Rodrigues",
      role: "CEO Mobilar Móvei",
      text: "A Mobilar Móveis conseguiu migrar para o digital graças à E-Adapt. Recomendo fortemente!",
      image: "/assets/imgs/testim/test1.jpg",
    
    },
    {
      id: 2,
      name: "Leonardo Rocha",
      role: "CEO Loja Bikebe",
      text:
        "A E-Adapt foi fundamental na nossa transição ao e-commerce. Suporte excepcional e confiável!".slice(
          0,
          100
        ) + "...",
      image: "/assets/imgs/testim/t2.jpg",
    },
    {
      id: 3,
      name: "Maurine",
      role: "CEO Carla Moda",
      text:
        "Consultoria da E-Adapt elevou nossa loja com estrategias de marketing digital eficazes.".slice(
          0,
          100
        ) + "...",
      image: "/assets/imgs/testim/test1.jpg",
    },
    
    {
      id: 4,
      name: "Andrea Matos",
      role: "CEO Carla Moda",
      text:
        "Consultoria da E-Adapt elevou nossa loja com estrategias de marketing digital eficazes.".slice(
          0,
          100
        ) + "...",
      image: "/assets/imgs/testim/test1.jpg",
    },

  ];

  const swiperOptions = {
    modules: [Pagination, Navigation],
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".testimonials-minim .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".testimonials-minim .swiper-button-next",
      prevEl: ".testimonials-minim .swiper-button-prev",
    },
  };

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="testimonials-minim section-padding bg-img overlay-center"
      data-background="/assets/imgs/background/b1.jpg"
      data-overlay-dark="9"
    >
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-4">
            <div className="sec-head">
              <h6 className="sub-title main-color mb-15">Depoimentos</h6>
              <h3 className="fw-600 d-rotate wow">
              O que dizem  <span className="fw-200"> nossos clientes?</span>

              </h3>
            </div>
          </div>
          <div className="col-lg-8 position-re">
            <div
              className="testim-swiper"
              data-carousel="swiper"
              data-loop="true"
              data-space="30"
            >
              <Swiper
                {...swiperOptions}
                id="content-carousel-container-unq-testim"
                className="swiper-container"
                data-swiper="container"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="item">
                      <div className="content">
                        <div className="text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="256.721"
                            height="208.227"
                            viewBox="0 0 256.721 208.227"
                            className="qout-svg"
                          >
                            <path
                              data-name="Path"
                              d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                              transform="translate(121.55 640.568)"
                              fill="none"
                              stroke="#fff"
                              strokeWidth="1"
                              opacity="0.322"
                            ></path>
                          </svg>
                          <p className="fz-30">{testimonial.text}</p>
                        </div>
                        <div className="info d-flex align-items-center pt-40 mt-40 bord-thin-top">
                          <div>
                            <div className="fit-img circle">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                              />
                            </div>
                          </div>
                          <div className="ml-20">
                            <h5>{testimonial.name}</h5>
                            <span className="sub-title main-color">
                              {testimonial.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="swiper-arrow-control control-abslout">
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
    </section>
  );
};

export default Testimonials;
