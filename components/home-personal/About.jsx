import React from "react";

function About() {
  return (
    <section id="about" className="about-author section-padding">
      <div className="container with-pad">
        <div className="row lg-marg">
          <div className="col-lg-5 valign">
            <div className="profile-img">
              <div className="img">
                <img src="/assets/imgs/resume/agencia.png" style={{objectPosition:"left"}} alt="" />
              </div>
              <span className="icon">
                <img src="/assets/imgs/resume/icon-meta.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon-shopee.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon-ttk.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon-ig.png" alt="" />
              </span>
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <h6 className="sub-title main-color mb-30">Sobre Nós </h6>
              <div className="text">
                <h4 className="mb-30">
              
                  Mais do que uma agência, somos seus Parceiros de Sucesso
                </h4>
                <p>
                  Na E-Adapt, não somos apenas uma agência. Somos seus parceiros
                  dedicados, transformando sua visão em sucesso com soluções
                  personalizadas e cuidado genuíno. Seu sucesso é nosso
                  objetivo.
                </p>

                <div className="numbers mt-50">
                  <div className="row lg-marg">
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">100%</h3>
                          <h6 className="p-color sub-title">
                            Clientes Satisfeitos
                          </h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-40">
                            <img src="/assets/imgs/abs-vector.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">+3000</h3>
                          <h6 className="p-color sub-title">
                            Projetos Concluídos
                          </h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-40">
                            <img src="/assets/imgs/abs-vector.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
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

export default About;
