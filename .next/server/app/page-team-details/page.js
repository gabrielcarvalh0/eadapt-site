(()=>{var s={};s.id=378,s.ids=[378],s.modules={7849:s=>{"use strict";s.exports=require("next/dist/client/components/action-async-storage.external")},2934:s=>{"use strict";s.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:s=>{"use strict";s.exports=require("next/dist/client/components/request-async-storage.external")},4580:s=>{"use strict";s.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:s=>{"use strict";s.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:s=>{"use strict";s.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:s=>{"use strict";s.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:s=>{"use strict";s.exports=require("path")},7310:s=>{"use strict";s.exports=require("url")},8349:(s,e,a)=>{"use strict";a.r(e),a.d(e,{GlobalError:()=>t.a,__next_app__:()=>h,originalPathname:()=>m,pages:()=>o,routeModule:()=>x,tree:()=>d});var i=a(9986),l=a(9148),r=a(7050),t=a.n(r),c=a(2274),n={};for(let s in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(s)&&(n[s]=()=>c[s]);a.d(e,n);let d=["",{children:["page-team-details",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,4499)),"C:\\Users\\usuario\\Documents\\dev\\webfolio-nextjs\\app\\page-team-details\\page.js"]}]},{metadata:{icon:[async s=>(await Promise.resolve().then(a.bind(a,8147))).default(s)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,4931)),"C:\\Users\\usuario\\Documents\\dev\\webfolio-nextjs\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,3172,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async s=>(await Promise.resolve().then(a.bind(a,8147))).default(s)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],o=["C:\\Users\\usuario\\Documents\\dev\\webfolio-nextjs\\app\\page-team-details\\page.js"],m="/page-team-details/page",h={require:a,loadChunk:()=>Promise.resolve()},x=new i.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/page-team-details/page",pathname:"/page-team-details",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4410:(s,e,a)=>{Promise.resolve().then(a.bind(a,9888)),Promise.resolve().then(a.bind(a,1173)),Promise.resolve().then(a.bind(a,4642)),Promise.resolve().then(a.bind(a,4681)),Promise.resolve().then(a.bind(a,9865)),Promise.resolve().then(a.bind(a,7803)),Promise.resolve().then(a.t.bind(a,3777,23))},727:(s,e,a)=>{"use strict";function i(s){s.selector&&s.callback&&(s.isElements?document.querySelectorAll(s.selector).forEach(e=>{new IntersectionObserver(e=>{e[0].isIntersecting?s.callback(e[0].target):s.whenOutOfView&&s.whenOutOfView(e[0].target)}).observe(e)}):new IntersectionObserver(e=>{e[0].isIntersecting?s.callback(e[0].target):s.whenOutOfView&&s.whenOutOfView(e[0].target)}).observe(document.querySelector(s.selector)))}a.d(e,{Z:()=>i})},5467:(s,e,a)=>{"use strict";function i(){let s=document.querySelectorAll("[data-background]");s.length>0&&s.forEach(s=>{let e=s.dataset.background;s.style.backgroundImage=`url('${e}')`})}a.d(e,{Z:()=>i})},9865:(s,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var i=a(6814),l=a(9760),r=a(4348),t=a(5467);let c=function(){return(0,l.useLayoutEffect)(()=>{let s=r.p8.timeline();return s.fromTo(".header",{y:200},{y:0},"+=2.5"),s.fromTo(".header .container",{opacity:0,translateY:40},{opacity:1,translateY:0},"-=0"),()=>s.kill()},[]),(0,l.useEffect)(()=>{(0,t.Z)()},[]),i.jsx("div",{className:"header page-header bg-img section-padding valign","data-background":"/assets/imgs/background/bg4.jpg","data-overlay-dark":"8",children:i.jsx("div",{className:"container pt-80",children:i.jsx("div",{className:"row",children:i.jsx("div",{className:"col-12",children:i.jsx("div",{className:"text-center",children:(0,i.jsxs)("h1",{className:"text-u ls1 fz-80",children:["Our ",i.jsx("span",{className:"fw-200",children:"Team"})]})})})})})})}},7803:(s,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>t});var i=a(6814),l=a(727),r=a(9760);let t=function(){function s(){(0,l.Z)({selector:".skill-progress .progres",isElements:!0,callback:s=>{s.style.width=s.getAttribute("data-value")}})}return(0,r.useEffect)(()=>(window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)),[]),i.jsx("section",{className:"team-single section-padding pb-0",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"row md-marg justify-content-around bord",children:[i.jsx("div",{className:"col-lg-5",children:i.jsx("div",{className:"img md-mb50",children:i.jsx("img",{src:"/assets/imgs/team/t5.jpg",alt:""})})}),i.jsx("div",{className:"col-lg-6 valign",children:(0,i.jsxs)("div",{className:"cont",children:[i.jsx("h2",{children:"Aron Bowers"}),i.jsx("h6",{className:"sub-title main-color mt-10",children:"UI/UX Designer"}),i.jsx("div",{className:"text mt-15",children:i.jsx("p",{children:"This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service."})}),i.jsx("div",{className:"info mt-30",children:(0,i.jsxs)("ul",{className:"rest",children:[(0,i.jsxs)("li",{className:"mb-25 fz-18",children:[i.jsx("span",{className:"sub-title mr-15",children:"RESPONSIBILITY :"})," ","Designer"]}),(0,i.jsxs)("li",{className:"mb-25 fz-18",children:[i.jsx("span",{className:"sub-title mr-15",children:"Experiences :"})," 12+ Years"]}),(0,i.jsxs)("li",{className:"mb-25 fz-18",children:[i.jsx("span",{className:"sub-title mr-15",children:"Date Of Birth :"})," 16 Fub 1995"]}),(0,i.jsxs)("li",{className:"mb-25 fz-18",children:[i.jsx("span",{className:"sub-title mr-15",children:"Email :"})," ","Aron_Bowers@domain.com"]}),(0,i.jsxs)("li",{className:"fz-18",children:[i.jsx("span",{className:"sub-title mr-15",children:"Phone :"})," +44 (0) 20 7430 2973"]})]})})]})})]}),(0,i.jsxs)("div",{className:"row md-marg justify-content-around mt-80",children:[i.jsx("div",{className:"col-lg-6 valign",children:(0,i.jsxs)("div",{className:"text md-mb50",children:[i.jsx("h4",{className:"mb-15",children:"About Me"}),i.jsx("p",{children:"Aron Bowers is known for her ability to take a creative brief and run with it, coming back with fresh ideas and a perfectly built design file every time. From digital design to long-format layouts, he blends beautiful and intuitive with each project he touches. he also happens to be the queen of deadline-crushing, Zen attitude that keeps the whole Statement team centered."}),(0,i.jsxs)("ul",{className:"rest mt-30 social-icon d-flex align-items-center",children:[i.jsx("li",{className:"hover-this cursor-pointer",children:i.jsx("a",{href:"#0",className:"hover-anim",children:i.jsx("i",{className:"fab fa-facebook-f"})})}),i.jsx("li",{className:"hover-this cursor-pointer ml-10",children:i.jsx("a",{href:"#0",className:"hover-anim",children:i.jsx("i",{className:"fab fa-dribbble"})})}),i.jsx("li",{className:"hover-this cursor-pointer ml-10",children:i.jsx("a",{href:"#0",className:"hover-anim",children:i.jsx("i",{className:"fab fa-linkedin-in"})})}),i.jsx("li",{className:"hover-this cursor-pointer ml-10",children:i.jsx("a",{href:"#0",className:"hover-anim",children:i.jsx("i",{className:"fab fa-instagram"})})})]})]})}),i.jsx("div",{className:"col-lg-5",children:(0,i.jsxs)("div",{className:"skills-box",children:[(0,i.jsxs)("div",{className:"skill-item mb-30",children:[i.jsx("h5",{className:"sub-title mb-15",children:"UI / UX Design 90%"}),i.jsx("div",{className:"skill-progress",children:i.jsx("div",{className:"progres","data-value":"90%"})})]}),(0,i.jsxs)("div",{className:"skill-item mb-30",children:[i.jsx("h5",{className:"sub-title mb-15",children:"Digital Marketing 80%"}),i.jsx("div",{className:"skill-progress",children:i.jsx("div",{className:"progres","data-value":"80%"})})]}),(0,i.jsxs)("div",{className:"skill-item",children:[i.jsx("h5",{className:"sub-title mb-15",children:"Development 85%"}),i.jsx("div",{className:"skill-progress",children:i.jsx("div",{className:"progres","data-value":"85%"})})]})]})})]})]})})}},4499:(s,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>k,metadata:()=>y});var i=a(158),l=a(3026),r=a(4604),t=a(8386),c=a(5476),n=a(5185),d=a(2561),o=a(7104),m=a(3078),h=a(3664),x=a(3611);let j=(0,x.createProxy)(String.raw`C:\Users\usuario\Documents\dev\webfolio-nextjs\components\page-team-details\Header.jsx`),{__esModule:u,$$typeof:p}=j,g=j.default,v=(0,x.createProxy)(String.raw`C:\Users\usuario\Documents\dev\webfolio-nextjs\components\page-team-details\Intro.jsx`),{__esModule:N,$$typeof:f}=v,b=v.default;a(6598);let w=function(){return i.jsx("section",{className:"services-inline2 section-padding",children:(0,i.jsxs)("div",{className:"container ontop",children:[i.jsx("div",{className:"sec-head mb-80",children:(0,i.jsxs)("div",{className:"d-flex align-items-center",children:[(0,i.jsxs)("div",{children:[i.jsx("span",{className:"sub-title main-color mb-5",children:"Our Specialize"}),i.jsx("h3",{className:"fw-600 fz-50 text-u d-rotate wow",children:(0,i.jsxs)("span",{className:"rotate-text",children:["Featured ",i.jsx("span",{className:"fw-200",children:"Services."})]})})]}),(0,i.jsxs)("div",{className:"ml-auto vi-more",children:[i.jsx("a",{href:"/page-services",className:"butn butn-sm butn-bord radius-30",children:i.jsx("span",{children:"View All"})}),i.jsx("span",{className:"icon ti-arrow-top-right"})]})]})}),i.jsx("div",{className:"item",children:(0,i.jsxs)("div",{className:"row md-marg align-items-end",children:[i.jsx("div",{className:"col-lg-2",children:i.jsx("span",{className:"num md-mb10",children:"01"})}),i.jsx("div",{className:"col-lg-4",children:i.jsx("div",{className:"md-mb30",children:(0,i.jsxs)("div",{children:[i.jsx("span",{className:"sub-title main-color mb-10",children:"Web Design"}),(0,i.jsxs)("h2",{children:["UI / UX ",i.jsx("span",{className:"fw-200",children:"Design"})]})]})})}),i.jsx("div",{className:"col-lg-4 md-mb30",children:(0,i.jsxs)("ul",{className:"rest dot-list",children:[i.jsx("li",{className:"fz-20 p-color mb-5",children:"Modern Strategy"}),i.jsx("li",{className:"fz-20 p-color mb-5",children:"UX & Design"}),i.jsx("li",{className:"fz-20 p-color",children:"Content Writing"})]})}),i.jsx("div",{className:"col-lg-2 d-flex justify-content-center",children:i.jsx("div",{className:"icon-img-80 opacity-7",children:i.jsx("img",{src:"/assets/imgs/serv-icons/5.png",alt:""})})})]})}),i.jsx("div",{className:"item",children:(0,i.jsxs)("div",{className:"row md-marg align-items-end",children:[i.jsx("div",{className:"col-lg-2",children:i.jsx("span",{className:"num md-mb10",children:"02"})}),i.jsx("div",{className:"col-lg-4",children:i.jsx("div",{className:"md-mb30",children:(0,i.jsxs)("div",{children:[i.jsx("span",{className:"sub-title main-color mb-10",children:"Web Design"}),(0,i.jsxs)("h2",{children:["Brand ",i.jsx("span",{className:"fw-200",children:"Strategy"})]})]})})}),i.jsx("div",{className:"col-lg-4 md-mb30",children:(0,i.jsxs)("ul",{className:"rest dot-list",children:[i.jsx("li",{className:"fz-20 p-color mb-5",children:"Modern Strategy"}),i.jsx("li",{className:"fz-20 p-color mb-5",children:"UX & Design"}),i.jsx("li",{className:"fz-20 p-color",children:"Content Writing"})]})}),i.jsx("div",{className:"col-lg-2 d-flex justify-content-center",children:i.jsx("div",{className:"icon-img-80 opacity-7",children:i.jsx("img",{src:"/assets/imgs/serv-icons/4.png",alt:""})})})]})}),i.jsx("div",{className:"item bord-thin-bottom",children:(0,i.jsxs)("div",{className:"row md-marg align-items-end",children:[i.jsx("div",{className:"col-lg-2",children:i.jsx("span",{className:"num md-mb10",children:"03"})}),i.jsx("div",{className:"col-lg-4",children:i.jsx("div",{className:"md-mb30",children:(0,i.jsxs)("div",{children:[i.jsx("span",{className:"sub-title main-color mb-10",children:"Web Design"}),(0,i.jsxs)("h2",{children:["SEO / ",i.jsx("span",{className:"fw-200",children:"Marketing"})]})]})})}),i.jsx("div",{className:"col-lg-4 md-mb30",children:(0,i.jsxs)("ul",{className:"rest dot-list",children:[i.jsx("li",{className:"fz-20 p-color mb-5",children:"Modern Strategy"}),i.jsx("li",{className:"fz-20 p-color mb-5",children:"UX & Design"}),i.jsx("li",{className:"fz-20 p-color",children:"Content Writing"})]})}),i.jsx("div",{className:"col-lg-2 d-flex justify-content-center",children:i.jsx("div",{className:"icon-img-80 opacity-7",children:i.jsx("img",{src:"/assets/imgs/serv-icons/3.png",alt:""})})})]})})]})})},y={title:"webfolio",icons:{icon:"/assets/imgs/favicon.ico",shortcut:"/assets/imgs/favicon.ico",other:(0,l.Z)(["/assets/css/plugins.css","/assets/css/style.css","https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap","https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap"])}};function k(){return(0,i.jsxs)("body",{children:[i.jsx(n.ZP,{}),i.jsx(c.ZP,{}),i.jsx(t.ZP,{}),i.jsx(r.Z,{}),i.jsx(m.ZP,{}),i.jsx("div",{id:"smooth-wrapper",children:(0,i.jsxs)("div",{id:"smooth-content",children:[(0,i.jsxs)("main",{className:"main-bg o-hidden",children:[i.jsx(g,{}),i.jsx(b,{}),i.jsx(w,{}),i.jsx(o.Z,{})]}),i.jsx(d.Z,{})]})}),i.jsx(h.default,{src:"/assets/js/ScrollTrigger.min.js",strategy:"beforeInteractive"}),i.jsx(h.default,{src:"/assets/js/ScrollSmoother.min.js",strategy:"beforeInteractive"}),i.jsx(h.default,{strategy:"beforeInteractive",src:"/assets/js/plugins.js"}),i.jsx(h.default,{strategy:"beforeInteractive",src:"/assets/js/TweenMax.min.js"}),i.jsx(h.default,{strategy:"beforeInteractive",src:"/assets/js/charming.min.js"}),i.jsx(h.default,{strategy:"beforeInteractive",src:"/assets/js/countdown.js"}),i.jsx(h.default,{strategy:"beforeInteractive",src:"/assets/js/gsap.min.js"}),i.jsx(h.default,{strategy:"beforeInteractive",src:"/assets/js/splitting.min.js"}),i.jsx(h.default,{strategy:"beforeInteractive",src:"/assets/js/isotope.pkgd.min.js"}),i.jsx(h.default,{strategy:"beforeInteractive",src:"/assets/js/imgReveal/imagesloaded.pkgd.min.js"}),i.jsx(h.default,{src:"/assets/js/scripts.js"})]})}},2561:(s,e,a)=>{"use strict";a.d(e,{Z:()=>l});var i=a(158);a(6598);let l=function(){return(0,i.jsxs)("footer",{className:"clean-footer crev",children:[(0,i.jsxs)("div",{className:"container pb-40 pt-40 ontop",children:[(0,i.jsxs)("div",{className:"row justify-content-between",children:[i.jsx("div",{className:"col-lg-2",children:i.jsx("div",{className:"logo icon-img-100 md-mb80",children:i.jsx("img",{src:"/assets/imgs/logo-eadapt.png",alt:""})})}),i.jsx("div",{className:"col-lg-4",children:(0,i.jsxs)("div",{className:"column md-mb50",children:[i.jsx("h6",{className:"sub-title mb-30",children:"Contato"}),(0,i.jsxs)("h6",{className:"p-color fw-400",children:["R. XV de Novembro, 2903 - ",i.jsx("br",{})," Somenzari, Mar\xedlia"]}),i.jsx("h6",{className:"mt-30 mb-15",children:i.jsx("a",{href:"#0",children:"contato@e-adapt.com.br"})}),i.jsx("a",{href:"#0",className:"underline",children:i.jsx("span",{className:"fz-22 main-color",children:"(14) 99841-5122"})})]})}),i.jsx("div",{className:"col-lg-2",children:(0,i.jsxs)("div",{className:"column md-mb50",children:[i.jsx("h6",{className:"sub-title mb-30",children:"Links \xfateis  "}),(0,i.jsxs)("ul",{className:"rest fz-14 opacity-7",children:[i.jsx("li",{className:"mb-15",children:i.jsx("a",{href:"/#about",children:"Sobre n\xf3s"})}),i.jsx("li",{className:"mb-15",children:i.jsx("a",{href:"/#services",children:"Nossos Servi\xe7os"})}),i.jsx("li",{className:"mb-15",children:i.jsx("a",{href:"/#portfolio",children:"Portf\xf3lio"})}),i.jsx("li",{children:i.jsx("a",{href:"/page-contact",children:"Contato"})})]})]})}),i.jsx("div",{className:"col-lg-3",children:(0,i.jsxs)("div",{className:"column subscribe-minimal",children:[i.jsx("h6",{className:"sub-title mb-30",children:"Newsletter"}),(0,i.jsxs)("div",{className:"form-group mb-40",children:[i.jsx("input",{type:"text",name:"subscrib",placeholder:"Seu E-mail"}),i.jsx("button",{children:i.jsx("span",{className:"ti-location-arrow"})})]}),(0,i.jsxs)("ul",{className:"rest social-icon d-flex align-items-center",children:[i.jsx("li",{className:"hover-this cursor-pointer",children:i.jsx("a",{href:"https://www.facebook.com/eadaptoficial/",className:"hover-anim",children:i.jsx("i",{className:"fab fa-facebook-f"})})}),i.jsx("li",{className:"hover-this cursor-pointer ml-10",children:i.jsx("a",{href:"https://www.youtube.com/@e-adapt",className:"hover-anim",children:i.jsx("i",{className:"fab fa-youtube"})})}),i.jsx("li",{className:"hover-this cursor-pointer ml-10",children:i.jsx("a",{href:"https://www.instagram.com/eadaptoficial/",className:"hover-anim",children:i.jsx("i",{className:"fab fa-instagram"})})})]})]})})]}),i.jsx("div",{className:"pt-30 pb-30 mt-80 bord-thin-top",children:i.jsx("div",{className:"text-center",children:(0,i.jsxs)("p",{className:"fz-14",children:["\xa9 2024 orgulhosamente desenvolvido com"," ",i.jsx("span",{className:"underline main-color",children:i.jsx("a",{href:"https://e-adapt.com.br/",target:"_blank",children:"E-adapt"})})]})})})]}),i.jsx("div",{className:"circle-blur",children:i.jsx("img",{src:"/assets/imgs/patterns/blur2.png",alt:""})})]})}},7104:(s,e,a)=>{"use strict";a.d(e,{Z:()=>l});var i=a(158);a(6598);let l=function(){let s=Array(6).fill(["Entre em contato"]).flat(),e=Array(6).fill(["Contate-nos"]).flat();return(0,i.jsxs)("section",{className:"call-marq section-padding o-hidden",children:[i.jsx("div",{className:"main-marq lrg sub-bg pt-20 pb-20",children:(0,i.jsxs)("div",{className:"slide-har st1",children:[(0,i.jsxs)("div",{className:"box",children:[s.map((s,e)=>i.jsx("div",{className:"item",children:(0,i.jsxs)("h4",{className:"d-flex align-items-center",children:[i.jsx("span",{children:s}),i.jsx("span",{className:"icon-img-50 ml-40",children:i.jsx("img",{src:"/assets/imgs/star.png",alt:""})})]})},e)),s.map((s,e)=>i.jsx("div",{className:"item",children:(0,i.jsxs)("h4",{className:"d-flex align-items-center",children:[i.jsx("span",{children:s}),i.jsx("span",{className:"icon-img-50 ml-40",children:i.jsx("img",{src:"/assets/imgs/star.png",alt:""})})]})},e))]}),i.jsx("a",{href:"/page-contact",className:"overlay-link"})]})}),i.jsx("div",{className:"main-marq bord-item",children:(0,i.jsxs)("div",{className:"slide-har st2",children:[i.jsx("div",{className:"box",children:e.map((s,e)=>i.jsx("div",{className:"item",children:i.jsx("h4",{className:"d-flex align-items-center",children:i.jsx("span",{children:s})})},e))}),i.jsx("div",{className:"box",children:e.map((s,e)=>i.jsx("div",{className:"item",children:i.jsx("h4",{className:"d-flex align-items-center",children:i.jsx("span",{children:s})})},e))}),i.jsx("a",{href:"/page-contact",className:"overlay-link"})]})})]})}}};var e=require("../../webpack-runtime.js");e.C(s);var a=s=>e(e.s=s),i=e.X(0,[518,706,431,348,157],()=>a(8349));module.exports=i})();