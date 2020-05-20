// External Library
import 'bootstrap';
import '../stylesheets/site.scss';
import '@fortawesome/fontawesome-free/js/all';
import './navbar';
import './slide';
import './filter-gallery';
import { loadDynamicBannerText } from './banner';


window.onload = () => {
  loadDynamicBannerText();
};

// Relative dependencies (our code)
$(window).on("scroll", function(){
  $(".navbar").toggleClass('bg-white', $(this).scrollTop() > 80);
});


$('#video-play').click(() => {
  const src = "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F288118001817687%2Fvideos%2F877401286020179%2F&show_text=0&height=320";
  $('#myModal').modal('show');
  $('#myModal iframe').attr('src', src);
});

$('#myModal').on('hidden.bs.modal', () => {
  $('#myModal iframe').removeAttr('src');
});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';
  window.addEventListener('load', () => {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    const validation = Array.prototype.filter.call(forms, (form) => {
      form.addEventListener('submit', (event) => {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
