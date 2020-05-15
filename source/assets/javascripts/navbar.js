
// Selection of HTML objects
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

// Defining a function
const toggleNav = () => {
  nav.classList.toggle('nav-active');
};

burger.addEventListener("click", () => {
  toggleNav();
});
