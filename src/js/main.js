AOS.init({ disable: "mobile" });
const hamburgerBtn = document.querySelector(".hamburger");
const hamMenu = document.querySelector(".nav-menu-ham");
const menuNav = document.querySelector(".nav");

const menuActivation = () => {
  hamburgerBtn.classList.toggle("active");
  hamMenu.classList.toggle("move-menu");
};

hamburgerBtn.addEventListener("click", menuActivation);

//funckja odpowiada za klikniecie w element z listy menu i zamkniecie menu po akcji na click.
document.querySelectorAll(".nav-menu-ham__item").forEach((el) => {
  el.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    hamMenu.classList.toggle("move-menu");
  });
});

//proste nadanie cienia na menu w trakcie przesuwania strony.

window.onscroll = () => {
  if (window.scrollY >= 100) {
    menuNav.classList.add("nav-bg");
  } else {
    menuNav.classList.remove("nav-bg");
  }
};




