const Menu = document.querySelector("#menu");
const MobileNav = document.querySelector("#mobile-nav");

Menu.addEventListener("click", function () {
  MobileNav.classList.toggle("hidden");
  Menu.classList.add("hidden");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal("#header img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal("#main-container h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal("#main-container p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal("#main-container i", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal("#story__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal("#story__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal("#story__content h4", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal("#story__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal("#story__content .story__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal("#client__image img", {
  ...scrollRevealOption,
  origin: "right",
});
