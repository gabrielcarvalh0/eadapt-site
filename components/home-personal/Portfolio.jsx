"use client";
import React, { useEffect } from "react";

function Portfolio() {
  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll(".cards .card-item");
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: "center center",
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: "bottom bottom",
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: "50% " + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: "center center",
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: "none",
        animation: scaleDown,
        toggleActions: "restart none none reverse",
      });
    });
  }
  useEffect(() => {
    Playing();

    // Clean up function
    return () => {
      // Dispose GSAP ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  return (
    <section id="portfolio" className="work-card section-padding pb-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Nosso Portfólio</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Projetos <span className="fw-200 pl-2"> em Destaque.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="#"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>Ver todos</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="#" className="tag">
                        MídiasSociais
                      </a>
                      <a href="#" className="tag">
                        DesignCriativo
                      </a>
                    </div>
                    <h4>Gestão de Mídias Sociais</h4>
                  </div>
                  <div>
                    <p>
                      Design criativo e campanhas interativas para aumentar o
                      engajamento e a presença digital da marca nas redes
                      sociais.
                    </p>
                    <a href="#" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Ver Detalhes <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/work-1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="#" className="tag">
                        Vídeo
                      </a>
                      <a href="#" className="tag">
                        Alta Produção
                      </a>
                    </div>
                    <h4>Criação de Vídeos de Alto Engajamento</h4>
                  </div>
                  <div>
                    <p>
                      Criamos vídeos de alta qualidade para aumentar o
                      engajamento e fortalecer a presença da sua marca nas redes
                      sociais. Nossos vídeos são feitos para capturar a atenção
                      do público e promover interação.
                    </p>
                    <a href="#" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Ver Detalhes <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="video-container">
                  <video
                    controls={false}
                    muted
                    autoPlay
                    loop
                    className="video-item"
                    src="/assets/imgs/works/1/video1.mp4"
                  ></video>
                  <video
                    controls={false}
                    muted
                    autoPlay
                    loop
                    className="video-item"
                    src="/assets/imgs/works/1/video2.mp4"
                  ></video>
                </div>
              </div>
            </div>
          </div>

          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="#" className="tag">
                        E-commerce
                      </a>
                      <a href="#" className="tag">
                        Web Design
                      </a>
                    </div>
                    <h4>Criação de Lojas Virtuais</h4>
                  </div>
                  <div>
                    <p>
                      Desenvolvemos e-commerces com design moderno e
                      funcionalidades robustas para garantir uma experiência de
                      compra intuitiva e eficiente, alinhada às necessidades do
                      seu negócio.
                    </p>
                    <a href="#" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Ver Detalhes <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img
                    src="/assets/imgs/works/1/work-2.jpg"
                    alt="E-commerce preview"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="#" className="tag">
                        Landing Page
                      </a>
                      <a href="#" className="tag">
                        Web Design
                      </a>
                    </div>
                    <h4>Sites e Landing Pages de Alta Conversão</h4>
                  </div>
                  <div>
                    <p>
                      Projetamos sites e landing pages customizadas, responsivas
                      e otimizadas para garantir a melhor experiência de
                      navegação e conversão para os seus visitantes.
                    </p>
                    <a href="#" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Ver Detalhes <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img
                    src="/assets/imgs/works/1/work-3.jpg"
                    alt="Prévia de site responsivo"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="#" className="tag">
                        Branding
                      </a>
                      <a href="#" className="tag">
                        Identidade Visual
                      </a>
                    </div>
                    <h4>Criação de Marcas e Identidade Visual</h4>
                  </div>
                  <div>
                    <p>
                      Desenvolvemos marcas únicas e identidade visual marcante
                      que transmitem a essência do seu negócio. Nosso trabalho
                      de branding é focado em criar conexões duradouras com o
                      público e fortalecer a presença da sua marca no mercado.
                    </p>
                    <a href="#" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Ver Detalhes <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img
                    src="/assets/imgs/works/1/work-4.jpg"
                    alt="Projeto de branding e identidade visual"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-bottom mt-100 mb-50">
        <div className="main-bg d-flex align-items-center">
          <h6 className="fz-14 fw-400">
          Mais de <span className="fw-600"> 100 empresas  </span> {" "}
          no mundo confiam em nosso trabalho.

          </h6>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
