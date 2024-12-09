"use client";
import React from "react";
import data from "@/data/portfolios/works1";
import { Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Gallery from "../common/Gallery";
import Link from "next/link";

function Portfolio() {
  const swiperOptions = {
    modules: [Pagination, Navigation, Mousewheel],
    slidesPerView: "auto",
    spaceBetween: 80,
    mousewheel: true,
    margin: "0 auto",
    loop: true,
    touchRatio: 0.2,
    speed: 1500,
    pagination: {
      el: ".work-crev .swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".el-prev",
      prevEl: ".el-next",
    },
  };

  return (
    <section className="work-crev sub-bg">
      <div className="container section-padding position-re bord-top-grd bord-bottom-grd">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Nosso Portfólio</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  <span className="fw-200"> Projetos em </span> Destaque.
                </span>
              </h3>
            </div>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="button-el-next el-prev">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="button-el-next el-next">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="work-swiper out-right">
          <Swiper {...swiperOptions}>
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="item d-flex align-items-center gap-5">
                  <div className="cont">
                    <h6 className="sub-title main-color mb-15">
                      {item.tags.join(" / ")}
                    </h6>
                    <h4>{item.title}</h4>
                    <p>{item.subTitle}</p>
                    {item.cta && (
                      <p>
                        <strong>{item.cta}</strong>
                      </p>
                    )}{" "}
                    {/* Chamada para ação */}
                    <div className="d-flex  flex-row align-items-center mt-30 gap-3">
                    <a
                      href="/contato"
                      className="butn-crev d-flex align-items-center "
                    >
                      <span className="hover-this">
                        <span className="circle hover-anim">
                          <i className="ti-arrow-top-right"></i>
                        </span>
                      </span>
                      <span className="text">Fale com um especialista</span>
                    </a>

                    <div className="d-block">
                      <Link
                        href="/portfolio"
                        className="butn butn-sm butn-bord radius-30 align-items-center"
                      >
                        <span className="hover-this">Ver mais</span>
                      </Link>
                    </div>
                    </div>
                  
                
                  </div>
                  <div className="w-100">
                    {item.video ? (
                      // Se for um vídeo, renderiza o player
                      <div className="video-container">
                        {item.video.map((videoSrc, index) => (
                          <video
                            key={index}
                            controls={false}
                            autoPlay
                            muted
                            loop
                            className="video-item"
                          >
                            <source src={videoSrc} type="video/mp4" />
                            Seu navegador não suporta o elemento de vídeo.
                          </video>
                        ))}
                      </div>
                    ) : (
                      // Se item.img for uma lista, renderiza o slider
                      <img
                        src={item.img}
                        alt={item.title}
                        className="radius-15 w-100"
                      />
                    )}
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

export default Portfolio;
