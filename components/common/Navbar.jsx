'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';

function Navbar() {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (bodyScroll > 300) navbar.classList.add('nav-scroll');
    else navbar.classList.remove('nav-scroll');
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector('.dropdown-menu')
      .classList.remove('show');
  }
  function handleToggleNav() {
    if (
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.remove('show');
    } else if (
      !document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document.querySelector('.navbar .navbar-collapse').classList.add('show');
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <Link  className="logo icon-img-100" href="/">
          <img src="/assets/imgs/logo-eadapt.png" alt="logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li
           
              className="nav-item dropdown"
            >
              <a
                className="nav-link "
                data-toggle="dropdown"
                href="#about"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Sobre Nós</span>
              </a>
           
            </li>
            <li
              
              className="nav-item dropdown"
            >
              <a
                className="nav-link"
                data-toggle="dropdown"
                href="#services"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Nossos Serviços</span>
              </a>
             
            </li>
            <li
              className="nav-item dropdown"
            >
              <a
                className="nav-link"
                data-toggle="dropdown"
                href="#portfolio"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Portfólio</span>
              </a>
            
            </li>
            {/* <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Blogs</span>
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="">
                  Blog Standerd
                </a>
                <a className="dropdown-item" href="">
                  Grid With Sidebar
                </a>
                <a className="dropdown-item" href="/">
                  Grid Three Column
                </a>
                <a className="dropdown-item" href="/">
                  Blog Details
                </a>
              </div>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">
                <span className="rolling-text">Depoimentos</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a
            href="/page-contact"
            className="butn butn-sm butn-bg main-colorbg radius-5"
          >
            <span className="text">Entre em contato</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
