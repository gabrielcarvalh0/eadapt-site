import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Navbar from '@/components/common/Navbar';
import Script from 'next/script';
import Header from '@/components/home-personal/Header';
import Clients from '@/components/common/Clients';
import Testimonials from '@/components/home-digital-agency/Testimonials';
import Marq from '@/components/home-personal/Marq';
import About from '@/components/home-personal/About';
import Services from '@/components/home-personal/Services';
import Portfolio from '@/components/home-personal/Portfolio';
import FloatingButtons from '@/components/common/FloatingButtons';
import Map from '@/components/page-contact/Map';
import InstagramSection from '@/components/common/InstagramSection';
import Partners from '@/components/common/Partners';

export const metadata = {
  title: 'E-Adapt: Transforme Seu Negócio com Especialistas em Marketing Digital',
  icons: {
    icon: '/assets/imgs/favicon.ico',
    shortcut: '/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css',
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
    ]),
  },
};
const posts = [
  'https://www.instagram.com/p/DBwswYJIdH2/',
  'https://www.instagram.com/p/DBhWOC2OLR4/',
  'https://www.instagram.com/p/DDPPyKBsN89/',
];

const partnersData = [
  { name: 'Parceiro 1', logo: '/assets/imgs/logos-p/1.svg' },
  { name: 'Parceiro 2', logo: '/assets/imgs/logos-p/2.svg' },
  { name: 'Parceiro 3', logo: '/assets/imgs/logos-p/3.svg' },
  { name: 'Parceiro 4', logo: '/assets/imgs/logos-p/4.svg' },
  { name: 'Parceiro 5', logo: '/assets/imgs/logos-p/5.svg' },
  { name: 'Parceiro 6', logo: '/assets/imgs/logos-p/6.svg' },
  { name: 'Parceiro 7', logo: '/assets/imgs/logos-p/7.svg' },
  { name: 'Parceiro 8', logo: '/assets/imgs/logos-p/8.svg' },
  { name: 'Parceiro 9', logo: '/assets/imgs/logos-p/9.svg' },
  { name: 'Parceiro 10', logo: '/assets/imgs/logos-p/10.svg' },
  { name: 'Parceiro 11', logo: '/assets/imgs/logos-p/11.svg' },
  { name: 'Parceiro 12', logo: '/assets/imgs/logos-p/12.svg' },
  { name: 'Parceiro 13', logo: '/assets/imgs/logos-p/13.svg' },
  { name: 'Parceiro 14', logo: '/assets/imgs/logos-p/14.svg' },
  { name: 'Parceiro 15', logo: '/assets/imgs/logos-p/15.svg' },
  { name: 'Parceiro 16', logo: '/assets/imgs/logos-p/16.svg' },
  { name: 'Parceiro 17', logo: '/assets/imgs/logos-p/17.svg' },
  { name: 'Parceiro 18', logo: '/assets/imgs/logos-p/18.svg' },
  { name: 'Parceiro 19', logo: '/assets/imgs/logos-p/19.svg' },
  { name: 'Parceiro 20', logo: '/assets/imgs/logos-p/20.svg' },
  { name: 'Parceiro 21', logo: '/assets/imgs/logos-p/21.svg' },
  { name: 'Parceiro 22', logo: '/assets/imgs/logos-p/22.svg' },
  { name: 'Parceiro 23', logo: '/assets/imgs/logos-p/23.svg' },


];

export default function Home() {
  return (
    <body className="home-personal">
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <FloatingButtons/>
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Header />
            <Marq />
            <About />
            <Services />
            <Portfolio />
           <Partners partners={partnersData}/>
            <Testimonials />
            <Clients />
            <InstagramSection posts={posts} />

            {/* <Blog /> */}
            <Marq2 />
          </main>
          <Map />
          <Footer />
        </div>
      </div>
      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />

      <Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/countdown.js"
      ></Script>

      <Script
        strategy="beforeInteractive"
        src="/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>

      {/* <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" /> */}

      <Script src="/assets/js/scripts.js"></Script>
    </body>
  );
}
