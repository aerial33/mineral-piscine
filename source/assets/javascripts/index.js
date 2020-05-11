// External Library
import 'bootstrap';
import '../stylesheets/site.scss';
import '@fortawesome/fontawesome-free/js/all';
import './slide';
import './filter-gallery';

// Relative dependencies (our code)
$('#video-play').click(() => {
  const src = 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdouceurpiscinepolyester%2Fvideos%2F967413833677302%2F&show_text=0&height=320';
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
