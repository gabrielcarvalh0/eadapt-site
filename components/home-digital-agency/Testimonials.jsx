'use client';
import React, { useState, useEffect } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Fabiana",
      role: "Central Cell Eletrônicos",
      quote: "Estávamos iniciando no comércio online, mas parecia que não ia pra frente. Graças ao trabalho incrível da E-Adapt, conseguimos não só alavancar nossas vendas na Shopee e em outros marketplaces, como também criamos nosso site e aumentamos nosso fluxo de vendas, fazendo a Central Cell Eletrônicos ser uma da referência no mercado de eletrônicos!",
      image: "/assets/imgs/testim/1.jpeg",
      video: "", // Sem vídeo
    },
    {
      id: 2,
      name: "Leonardo",
      role: "CEO da BikeBe",
      quote: "A E-Adapt contribuiu significativamente na mudança da nossa empresa quando decidimos vender no E-commerce. O atendimento que sempre nos prestam é o melhor possível, estiveram ao nosso lado nos momentos mais cruciais da mudança de política de vendas online da BikeBe; seja cadastrando produtos, vinculando nos principais marketplaces ou, até mesmo, resolvendo eventuais problemas que aconteceram no percurso. Por isso e inúmeros outros bons motivos que eu uso e recomendo E-Adapt!",
      image: "/assets/imgs/testim/2.jpeg",
    },
    {
      id: 3,
      name: "Sandra Rodrigues",
      role: "CEO da Mobilar Eletro",
      quote: "Há 30 anos no varejo de lojas físicas de móveis e eletrodomésticos , a Mobilar Móveis iniciou sua caminhada para o digital, e com certeza sem a E-Adapt o caminho seria bem mais difícil, encontramos profissionais dispostos a estruturar e apoiar nosso desenvolvimento na era digital, ajustando nossa loja e colocando nossos produtos para vender nos melhores canais de venda. Nós recomendamos a agência E-Adapt.",
      image: "/assets/imgs/testim/3.jpeg",
    },
 
  ];

  const [highlightedContent, setHighlightedContent] = useState({
    image: testimonials[0].image,
    video: testimonials[0].video,
  });

  useEffect(() => {
    const currentTestimonial = testimonials[selectedTestimonial];
    setHighlightedContent({
      image: currentTestimonial.image,
      video: currentTestimonial.video,
    });
  }, [selectedTestimonial]);

  return (
    <section className="testimonials">
      <div className="container section-padding bord-bottom-grd">
        <div className="sec-head mb-40">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-3">Depoimentos</span>
              <h3 className="fw-600 fz-30 text-u d-rotate wow">
                <span className="rotate-text">
                  O que dizem <span className="fw-200"> nossos clientes?</span>
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 md-mb50">
            <div className="img-full">
              <div className="fit-img">
                {highlightedContent.video ? (
                  <video
                    src={highlightedContent.video}
                    autoPlay
                    loop
                    className="testimonial-video"
                    style={{ maxWidth: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <img
                    src={highlightedContent.image || "/assets/imgs/testim/bg.jpg"}
                    alt="Background"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cont-full">
              <div className="testim-swiper">
                <Swiper
                  modules={[Pagination, Navigation]}
                  loop={true}
                  spaceBetween={30}
                  pagination={{
                    el: '.testimonials-minim .swiper-pagination',
                    clickable: true,
                  }}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  onSlideChange={(swiper) => setSelectedTestimonial(swiper.realIndex)}
                  className="swiper-container"
                >
                  {testimonials.map((testim) => (
                    <SwiperSlide key={testim.id}>
                      <div className="item">
                        <div className="content">
                          <div className="text">
                            <p className="fz-18">{testim.quote}</p>
                          </div>
                          <div className="info d-flex align-items-center pt-40 mt-40 bord-thin-top">
                            <div>
                              <div className="fit-img circle">
                                <img src={testim.image} alt={testim.name} />
                              </div>
                            </div>
                            <div className="ml-20">
                              <h5>{testim.name}</h5>
                              <span className="sub-title main-color">{testim.role}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-arrow-control control-abslout">
                  {/* Navegação externa */}
                  <div className="swiper-button-prev">
                    <span className="ti-arrow-left"></span>
                  </div>
                  <div className="swiper-button-next">
                    <span className="ti-arrow-right"></span>
                  </div>
                </div>
                <div className="circle-blur">
                  <img src="/assets/imgs/patterns/blur1.png" alt="Pattern" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
