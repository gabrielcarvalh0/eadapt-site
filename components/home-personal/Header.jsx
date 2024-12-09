"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";

function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".header", { y: 200 }, { y: 0 }, "+=2.5");
    tl.fromTo(
      ".header .container",
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      "-=0"
    );

    return () => tl.kill();
  }, []);

  useEffect(() => {
    const video = document.querySelector(".video-background");
    const screenWidth = window.innerWidth;

    // Escolhe a qualidade do vídeo com base na largura da tela
    if (screenWidth >= 1920) {
      video.src = "https://res.cloudinary.com/dzbur9itg/video/upload/v1733720882/video3_txl4gw.mp4";
    } else if (screenWidth >= 1280) {
      video.src = "https://res.cloudinary.com/dzbur9itg/video/upload/v1733720882/video3_txl4gw.mp4";
    } else {
      video.src = "https://res.cloudinary.com/dzbur9itg/video/upload/v1733720882/video3_txl4gw.mp4";
    }

    video.load();
    video.play();
  }, []);

  return (
    <div className="header header-personal valign bg-video">
      {/* Video de fundo */}
      <video
        className="video-background"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Camada de escurecimento */}
      <div className="overlay"></div>

      <div className="container ontop">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption">
              <h1 className="fw-700 mb-10">
                <span className="main-color">Adaptamos</span> sua marca no mundo digital
              </h1>
              <div className="row">
                <div className="col-lg-9">
                  <div className="text mt-30">
                    <p>
                      Conectamos estratégias de Marketing Digital, Tráfego Pago,
                      E-commerce e Comunicação Visual para resultados reais.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-60">
                    <a
                      href="/page-contact"
                      className="butn butn-md butn-bord radius-30"
                    >
                      <span className="text">Entre em Contato</span>
                    </a>
                    <div className="icon-img-60 ml-20">
                      <img
                        src="/assets/imgs/icon-img/arrow-down-big.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info d-flex align-items-center justify-content-end mt-100"></div>
      </div>
    </div>
  );
}

export default Header;
