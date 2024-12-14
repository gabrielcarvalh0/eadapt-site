'use client';
import React from "react";
import Marquee from "react-fast-marquee";

function Partners({ partners }) {
  // Divide os logos em três linhas (linhas horizontais)
  const third = Math.ceil(partners.length / 3);
  const row1 = partners.slice(0, third);
  const row2 = partners.slice(third, third * 2);
  const row3 = partners.slice(third * 2);

  return (
    <section className="partners-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h3>
                Empresas que acreditam <br />{" "}
                <span className="opacity-7">em nosso trabalho</span>
              </h3>
            </div>
          </div>
        </div>
        {/* Marquee de três linhas horizontais */}
        <div className="partners-marquee">
          {/* Primeira linha */}
          <Marquee gradient={false} speed={50} pauseOnHover>
            {row1.map((partner, index) => (
              <div key={index} className="partner-logo">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  title={partner.name}
                />
              </div>
            ))}
          </Marquee>
          {/* Segunda linha */}
          <Marquee gradient={false} speed={50} direction="right" pauseOnHover>
            {row2.map((partner, index) => (
              <div key={index} className="partner-logo">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  title={partner.name}
                />
              </div>
            ))}
          </Marquee>
          {/* Terceira linha */}
          <Marquee gradient={false} speed={50} pauseOnHover>
            {row3.map((partner, index) => (
              <div key={index} className="partner-logo">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  title={partner.name}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <style jsx>{`
        .rfm-marquee-container {
          overflow-x: visible !important;
        }

        .partners-marquee {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px; /* Espaçamento entre as linhas */
        }

        .partner-logo {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 8px; /* Espaçamento ao redor de cada logo */
          margin: 0 70px; /* Espaçamento horizontal entre os logos */
        }

        .partner-logo img {
          height: auto; /* Mantém a proporção */
          object-fit: contain; /* Garante que o logo não seja cortado */
          transition: transform 0.3s ease;
        }

        @media (max-width: 768px) {
          .partner-logo img {
            max-width: 80px; /* Ajusta os logos para telas menores */
          }
          .partners-marquee {
            gap: 12px; /* Ajusta o espaçamento entre as linhas em telas menores */
          }
        }
      `}</style>
    </section>
  );
}

export default Partners;
