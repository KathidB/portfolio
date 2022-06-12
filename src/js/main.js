// wyłącza na mobile animacje od AOS
//podyktowanie większym wynikiem w Lighthouse.
AOS.init({ disable: "mobile" });

///////////////////// hamburger menu //////////////////////////////////////////
const hamburgerBtn = document.querySelector(".hamburger");
const hamMenu = document.querySelector(".nav-menu-ham");
const menuNav = document.querySelector(".nav");
const counterBox = document.querySelector(".counter-box");
const counterItems = document.querySelectorAll(".counter");
const counterPercent = document.querySelector(".counter-procent");
const counterSpan = document.querySelector(".counter span");
const footerSpan = document.querySelector(".footer-span");

const menuActivation = () => {
  hamburgerBtn.classList.toggle("active");
  hamMenu.classList.toggle("move-menu");
};

hamburgerBtn.addEventListener("click", menuActivation);

//funckja odpowiada za zamkniecie menu po akcji na click.
document.querySelectorAll(".nav-menu-ham__item").forEach((el) => {
  el.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    hamMenu.classList.toggle("move-menu");
  });
});

///////////////////////////funkcja counter box//////////////////////////////////

// dzieki tej wartości odliczanie nie zaczyna sie od razu na ikonkach
//gdy scrollujemy w dól, a o 250px niżej,aby nie przegapić animacji.
const options = {
  rootMargin: "-150px",
};

const startCounter = (entry) => {
  //entry - sprawdzamy czy doscrollowalismy do countera.
  if (entry[0].isIntersecting) {
    counterItems.forEach((counter) => {
      const updateCounter = () => {
        //do zmiennej finalnumber przypisujemy docelowa liczbę z countera w html
        const finalNumber = counter.getAttribute("data-number");

        //domyslnie mamy wpisane zero w stringu - dzieki temu bedzie to liczba.
        const value = parseInt(counter.textContent);

        //predkosc obliczania - liczba nie moze być wyższa niż liczba podana
        //w data-number w html!
        const speed = finalNumber / 50;

        if (value < finalNumber) {
          counter.textContent = `${Math.floor(value + speed)} `;
          //wartość zmienia predkosc wykonywana się countera
          setTimeout(updateCounter, 10);
        } else {
          counter.textContent = finalNumber;
        }
      };

      updateCounter();
    });
  }
};

const observer = new IntersectionObserver(startCounter, options);
observer.observe(counterBox);

/////////////////////////////////////////////////////////////
// funkcja nadaje cień na menu w trakcie scrollowania strony.

window.onscroll = () => {
  if (window.scrollY >= 100) {
    menuNav.classList.add("nav-bg");
  } else {
    menuNav.classList.remove("nav-bg");
  }
};

// footer
const getCurrentYear = () => {
  footerSpan.textContent = new Date().getFullYear();
};
getCurrentYear();
