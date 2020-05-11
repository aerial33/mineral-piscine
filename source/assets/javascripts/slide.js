import Glide from '@glidejs/glide';

const sliders = document.querySelectorAll('.glide');
sliders.forEach((item) => {
  const slider = new Glide(item, {
    perView: 3,
    keyboard: false,
    bound: true,
    animationDuration: 1000,
    breakpoints: {
      980: {
        perView: 2,
        peek: {
          before: 0,
          after: 50
        }
      },
      770: {
        perView: 1,
        peek: {
          before: 0,
          after: 70
        }
      }
    }
  });
  slider.mount();
});

const poolSliders = document.querySelectorAll('.carousel-pool');
poolSliders.forEach((item) => {
  const poolSlider = new Glide(item, {
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    animationDuration: 1000,
    gap: 5,
    breakpoints: {
      850: {
        perView: 2
      },
      770: {
        perView: 1
      }
    }
  });
  poolSlider.mount();
});
