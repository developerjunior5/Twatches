const Menu = document.querySelector("#menu");
const MobileNav = document.querySelector("#mobile-nav");
loginButton = document.querySelector("btn-login");
loginModal = document.querySelector("modal-login");

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
ScrollReveal().reveal("#watches ", {
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
  delay: 500,
});
ScrollReveal().reveal("#story__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal("#story__content .story__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal("#client__image img", {
  ...scrollRevealOption,
  origin: "right",
});

//timer

//1 create the timer
let time = 60;

const specialTime = function (e) {
  const mins = String(Math.trunc(time / 60)).padStart(2, 0);
  const sec = String(Math.trunc(time % 60)).padStart(2, 0);

  time--;
  document.querySelector(
    ".special__offer--text"
  ).textContent = `Ends in ${mins}:${sec}`;

  if (time === 0) {
    clearInterval(specialTime);
    document.querySelector(".special__offer--container").style.backgroundColor =
      "red";
    setTimeout(() => {
      document
        .querySelector(".special__offer--container")
        .classList.add("hidden");
    }, 1000);
  }
};
setInterval(specialTime, 1000);

//login-modal
//1 show modal using the btn

//smooth scrolling
document.querySelector(".nav__links").addEventListener("click", function (e) {
  if (e.target.classList.contains("nav__link")) {
    e.preventDefault();

    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//sticky navbar
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  rootMargin: `${navHeight}px`,
  threshold: 0,
});

headerObserver.observe(header);

document.querySelector(".btn__login").addEventListener("click", function () {
  console.log("clicked");
  document.querySelector(".modal__login").classList.toggle("hidden");
});
