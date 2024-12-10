"use client";
import React, { useEffect , useRef } from 'react';
import { gsap } from 'gsap';
import data from '@/data/services';

function Services() {
  const secBottomRef = useRef(null);

  useEffect(() => {
    // Animação de pulsação
    gsap.fromTo(
      secBottomRef.current,
      { scale: 1 },
      {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <section className="services-crev section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="mb-30">
            <h3 className="fw-600 fz-70 text-u d-rotate wow">
              <span className="rotate-text">
                <span className="fw-200">Serviços em </span> Destaque
              </span>
            </h3>
          </div>
          <h6 className="sub-title main-color d-flex align-items-center">
            <span>Nossas Especialidades</span>
            <span className="thin"></span>
          </h6>
        </div>
        <div className="row sm-marg">
          {data.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-4">
              <div className="item-box radius-15 md-mb30">
                <h5 className="mb-60 text-u" style={{ fontSize: "17px" }}>
                  {item.title}
                </h5>
                <div className="icon mb-20 opacity-5">
                  <img src={item.img} alt="" />
                </div>
                <p>{item.desc.slice(0, 150)} </p>
              </div>
            </div>
          ))}
        </div>
        <div className="sec-bottom mt-100" ref={secBottomRef}>
          <div className="main-bg d-flex align-items-center">
            <p>Descubra o poder do digital agora mesmo!</p>
            <a
              href="/page-contact"
              className="butn main-color ml-40 underline"
            >
              <span>Entrar em contato</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;