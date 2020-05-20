import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["VOTRE FUTURE PISCINE", "PROFITEZ DE VOTRE JARDIN"],
    typeSpeed: 80,
    fadeOut: true,
    loop: false
  });
};

// window.onload = () => {
//   new Typed('#banner-typed-text', {
//     strings: ["VOTRE FUTURE PISCINE", "PROFITEZ DE VOTRE JARDIN !"],
//     typeSpeed: 80,
//     fadeOut: true,
//   });
// };


export { loadDynamicBannerText };
