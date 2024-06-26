const Menu = document.querySelector("#menu");
const MobileNav = document.querySelector("#mobile-nav");
const loginButton = document.querySelector("btn-login");
const loginModal = document.querySelector("modal-login");
const closeNavbar = document.querySelector(".close__menu");
const searchContainer = document.querySelector(".search__container--main");
const searchBar = document.querySelector(".search__bar--icon");
const closeSearchBar = document.querySelector(".search__close--bar");
const closeCart = document.querySelector(".cart__cross--menu");
const cartContainer = document.querySelector(".cart__container");
const cartOpenMenu = document.querySelector(".cart__menu--open");

Menu.addEventListener("click", function () {
  MobileNav.classList.toggle("hidden");
});

closeNavbar.addEventListener("click", function () {
  MobileNav.classList.toggle("hidden");
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
ScrollReveal().reveal(".watches__main-container ", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".collection__container ", {
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
// let time = 60;

// const specialTime = function (e) {
//   const mins = String(Math.trunc(time / 60)).padStart(2, 0);
//   const sec = String(Math.trunc(time % 60)).padStart(2, 0);

//   time--;
//   document.querySelector(
//     ".special__offer--text"
//   ).textContent = `Ends in ${mins}:${sec}`;

//   if (time === 0) {
//     clearInterval(specialTime);
//     document.querySelector(".special__offer--container").style.backgroundColor =
//       "red";
//     setTimeout(() => {
//       document
//         .querySelector(".special__offer--container")
//         .classList.add("hidden");
//     }, 1000);
//   }
// };
// setInterval(specialTime, 1000);

//search bar functionality
searchBar.addEventListener("click", function (e) {
  e.preventDefault();
  searchContainer.classList.toggle("hidden");
});
closeSearchBar.addEventListener("click", function (e) {
  e.preventDefault();
  searchContainer.classList.add("hidden");
});

//cart functionality
closeCart.addEventListener("click", function (e) {
  e.preventDefault();
  cartContainer.classList.add("hidden");
});

cartOpenMenu.addEventListener("click", function (e) {
  e.preventDefault();
  cartContainer.classList.toggle("hidden");
});

//btn shop now
document
  .querySelector(".btn__shop--now")
  .addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector("#watches").scrollIntoView({ behavior: "smooth" });
  });

//login-modal
//1 show modal using the btn

//smooth scrolling

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

document
  .querySelector(".btn__login--submit")
  .addEventListener("click", function (e) {
    if (
      document.querySelector(".password__input").value === "princess" &&
      document.querySelector(".email__input").value ===
        "godfreyjunior@gmail.com"
    ) {
      setTimeout(() => {
        document.querySelector(".btn__login--submit").textContent =
          "Connecting....";
      }, 1000);
      loginModal.classList.add("hidden");
    } else {
      console.log("wrong");
    }
  });
