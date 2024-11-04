import React from "react";

function Services() {
  return (
    <section id="services" className="services-clas">
      <div className="container section-padding bord-bottom-grd pt-0">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">
                Nossas Especialidades
              </span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Serviços em <span className="fw-200">Destaque.</span>
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
        <div className="row">
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/3.png" alt="" />
              </div>
              <h5>Identidade de Marca e Visual</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag"> UI/UX</span>
                  <span className="tag">Design grafico</span>
                </div>
                <p>
                  Desenvolvemos logotipos, manuais de identidade visual e todos
                  os elementos necessários para posicionar sua marca de forma
                  única no mercado.
                </p>
              </div>
              <a href="#-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/4.png" alt="" />
              </div>
              <h5>Sites e Lojas Virtuais</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Ecommerce</span>
                  <span className="tag">Sites</span>
                </div>
                <p>
                Desenvolvemos sites e lojas virtuais funcionais, com um design atrativo e foco na melhor experiência para seus clientes. Priorizamos a usabilidade e a estética para atender às expectativas do seu público.







                </p>
              </div>
              <a href="#-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/5.png" alt="" />
              </div>
              <h5>Gestão de Mídias e Conteúdo</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag"> Social Media</span>
                  <span className="tag"> Conteúdo</span>
                </div>
                <p>
                  Gerenciamos suas redes sociais com planejamento estratégico,
                  criação de conteúdo original e postagens que geram
                  engajamento.
                </p>
              </div>
              <a href="#-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
