import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["VOTRE FUTUR PISCINE", "PROFITER DE VOTRE ÉTÉ !"],
    typeSpeed: 200,
    loop: false
  });
};

export { loadDynamicBannerText };
