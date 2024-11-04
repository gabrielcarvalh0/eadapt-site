"use client";
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    const whatsappNumber = '5514998415122'; // Insira o número de telefone no formato internacional
    const whatsappMessage = `*Nome:* ${name}\n*Email:* ${email}\n*Assunto:* ${subject}\n*Mensagem:* ${message}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redireciona para o WhatsApp
    window.open(whatsappLink, '_blank');
  };

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign">
            <div className="sec-head info-box full-width md-mb80">
              <div className="phone fz-30 fw-600 underline main-color">
                <a href="#0">(14) 99841-5122</a>
              </div>
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Endereço</h6>
                <p> R. XV de Novembro, 2903 - Somenzari, Marília</p>
              </div>
              <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Email</h6>
                <p>contato@e-adapt.com.br</p>
              </div>

              <div className="social-icon mt-50">
                <a href="https://www.facebook.com/eadaptoficial/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.youtube.com/@e-adapt">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/eadaptoficial/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Contato</h6>
                <h3 className="text-u ls1">
                  Envie uma <span className="fw-200">mensagem</span>
                </h3>
              </div>
              <form id="contact-form" className="form2" onSubmit={handleSubmit}>
                <div className="messages"></div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Nome"
                        required="required"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        placeholder="Assunto"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Mensagem"
                        rows="4"
                        required="required"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord radius-30"
                      >
                        <span className="text">Enviar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
