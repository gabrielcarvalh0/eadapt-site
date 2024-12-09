import React from 'react';

function Footer() {
  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <div className="logo icon-img-100 md-mb80">
              <img src="/assets/imgs/logo-eadapt.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Contato</h6>
              <h6 className="p-color fw-400">
              R. XV de Novembro, 2903 - <br /> Somenzari, Marília
              </h6>
              <h6 className="mt-30 mb-15">
                <a href="#0">contato@e-adapt.com.br</a>
              </h6>
              <a href="#0" className="underline">
                <span className="fz-22 main-color">(14) 99841-5122</span>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Links úteis  </h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <a href="/#about">Sobre nós</a>
                </li>
                <li className="mb-15">
                  <a href="/#services">Nossos Serviços</a>
                </li>
                <li className="mb-15">
                  <a href="/#portfolio">Portfólio</a>
                </li>
                <li>
                  <a href="/page-contact">Contato</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column subscribe-minimal">
              <h6 className="sub-title mb-30">Newsletter</h6>
              <div className="form-group mb-40">
                <input type="text" name="subscrib" placeholder="Seu E-mail" />
                <button>
                  <span className="ti-location-arrow"></span>
                </button>
              </div>
              <ul className="rest social-icon d-flex align-items-center">
                <li className="hover-this cursor-pointer">
                  <a href="https://www.facebook.com/eadaptoficial/" className="hover-anim">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
           
                <li className="hover-this cursor-pointer ml-10">
                  <a href="https://www.youtube.com/@e-adapt" className="hover-anim">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="https://www.instagram.com/eadaptoficial/" className="hover-anim">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">
              © 2024 Orgulhosamente desenvolvido por {' '}
              <span className="underline main-color">
                <a href="https://e-adapt.com.br/" target="_blank">
                 E-Adapt
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur2.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
