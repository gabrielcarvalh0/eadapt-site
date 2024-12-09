"use client";
import React, { useEffect } from "react";
import initIsotope2 from "@/common/initIsotope2";
function Portfolio() {
  useEffect(() => {
    initIsotope2();
  }, []);
  return (
    <section className="work-minimal section-padding pb-40">
      <div className="container">
        <div className="row mb-80">
          <div className="col-lg-4">
            <div className="sec-head">
              <h6 className="sub-title main-color mb-10">
                CONHEÇA NOSSOS PROJETOS{" "}
              </h6>
              <h3>Últimos Trabalhos </h3>
            </div>
          </div>
          <div className="filtering col-lg-8 d-flex justify-content-end align-items-end">
            <div>
              <div className="filter">
                <span data-filter="*" className="active" data-count="12">
                  Todos
                </span>
                <span data-filter=".design" data-count="07">
                  Social Media
                </span>
                <span data-filter=".ecommerce" data-count="01">
                  E-commerce
                </span>
                <span data-filter=".videos" data-count="03">
                Vídeos
                </span>
                <span data-filter=".development" data-count="01">
                  Web Sites
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl">
        <div className="gallery2 row sm-marg">
          {/* Itens com imagens */}
          <div className="col-lg-6 items design">
            <div className="item mt-10">
              <div className="img">
                <img
                  src="/assets/imgs/works/4/design-1.jpg"
                  alt="Projeto Design 1"
                />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                      <a href="#">Carrousel Criativo</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="#">Social Media</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 items  videos">
            <div className="item mt-10">
              <div className="img">
                <video className="video-container " controls>
                  <source src="https://res.cloudinary.com/dzbur9itg/video/upload/v1733720913/v%C3%ADdeo_Valle_do_Cana%C3%A3_2_-_4_su%C3%ADtes_apz5lb.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
                <div className="cont">
                  <h5>
                    <a href="#">Campanha Publicitária</a>
                  </h5>
                  <p>
                    <a href="#">Vídeo Promocional</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 items  videos">
            <div className="item mt-10">
              <div className="img">
                <video className="video-container " controls>
                  <source src="https://res.cloudinary.com/dzbur9itg/video/upload/v1733720904/Novos_equimanetos_para_assist%C3%AAncia_t%C3%A9cnica_1_bx3rra.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
                <div className="cont">
                  <h5>
                    <a href="#">Vídeo Corporativo</a>
                  </h5>
                  <p>
                    <a href="#">Produção Audiovisual</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 items  ecommerce">
            <div className="item mt-10">
              <div className="img">
                <img
                  src="/assets/imgs/works/4/ecommerce-1.jpg"
                  alt="Projeto E-commerce"
                />
                <div className="cont">
                  <h5>
                    <a href="#">Loja Virtual Moderna</a>
                  </h5>
                  <p>
                    <a href="#">E-commerce</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 items width2 design">
            <div className="item mt-10">
              <div className="img">
                <img
                  src="/assets/imgs/works/4/design-2.jpg"
                  alt="Projeto Design 2"
                />
                <div className="cont">
                  <h5>
                    <a href="#">Post Social Media</a>
                  </h5>
                  <p>
                    <a href="#">Design Gráfico</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
           <div className="col-lg-3 items  videos">
            <div className="item mt-10">
              <div className="img">
                <video className="video-container " controls>
                  <source src="https://res.cloudinary.com/dzbur9itg/video/upload/v1733720886/WhatsApp_Video_2024-10-22_at_17.30.04_rzd3g8.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
                <div className="cont">
                  <h5>
                    <a href="#">Apresentação de Produto</a>
                  </h5>
                  <p>
                    <a href="#">Vídeo de Produto</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 items  videos">
            <div className="item mt-10">
              <div className="img">
                <video className="video-container " controls>
                  <source src="https://res.cloudinary.com/dzbur9itg/video/upload/v1733720883/WhatsApp_Video_2024-10-22_at_17.35.48_itmqlc.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
                <div className="cont">
                  <h5>
                    <a href="#">Apresentação de Produto</a>
                  </h5>
                  <p>
                    <a href="#">Vídeo Promocional</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items design">
            <div className="item mt-10">
              <div className="img">
                <img
                  src="/assets/imgs/works/4/design-5.jpeg"
                  alt="Projeto Design 5"
                />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                      <a href="#">Design Impactante</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="#">Social Media</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items width2 design">
            <div className="item mt-10">
              <div className="img">
                <img
                  src="/assets/imgs/works/4/design-7.jpeg"
                  alt="Projeto Design 7"
                />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                      <a href="#">Design Impactante</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="#">Social Media</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 items design">
            <div className="item mt-10">
              <div className="img">
                <img
                  src="/assets/imgs/works/4/design-6.jpeg"
                  alt="Projeto Design 6"
                />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                      <a href="#">Design Impactante</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="#">Social Media</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 items width2 width2 development">
            <div className="item mt-10">
              <div className="img">
                <img
                  src="/assets/imgs/works/4/website-1.jpg"
                  alt="Projeto Web 1"
                />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                      <a href="#">Website Criativo</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="#">Desenvolvimento</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 items width2 design">
            <div className="item mt-10">
              <div className="img">
                <img
                  src="/assets/imgs/works/4/design-3.jpeg"
                  alt="Projeto Design 3"
                />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                      <a href="#">Design Impactante</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="#">Social Media</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items width2 design">
            <div className="item mt-10">
              <div className="img">
                <img
                  src="/assets/imgs/works/4/design-4.jpeg"
                  alt="Projeto Design 4"
                />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                      <a href="#">Design Impactante</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="#">Social Media</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
