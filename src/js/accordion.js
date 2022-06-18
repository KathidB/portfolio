const accordion = document.querySelector(".accordion");
const accordionBtns = document.querySelectorAll(".accordion-btn");
const allActiveItems = document.querySelectorAll(".accordion-info");

//przekazujemy funkcji kliknięty button i potem sprawdzamy co jest najbliższym obiektem
// dla wskazanego buttona - czyli box z tekstem , który się wysuwa. Stosujemy
// ifa. który dodaje/zabiera klase odpowiedzialną za pokazywanie ukrywanie boxa.
const openAccordionBox = (e) => {
  if (e.target.nextElementSibling.classList.contains("active-accordion")) {
   e.target.nextElementSibling.classList.remove("active-accordion");
  } else {
    closeAccordionItem();
    e.target.nextElementSibling.classList.toggle("active-accordion");
  }
 }
// funkcja od usuwania nadanej klasy active-accordion // 
//pomaga zamknac jednego boxa w momencie gdy otwiera sie drugi
//dzieki temu pozostaje tylko jeden otwarty w danym momencie. 
const closeAccordionItem = () => {
  allActiveItems.forEach((item) => item.classList.remove("active-accordion"));
};


//funkcja sprzawdza co kliknelismy - jesli cokolwiek poza naszym 
//boxem to funkcja close zamknie boxy.
const clickOutsideAccordion = (e) => {
  if (
    e.target.classList.contains("accordion-btn") ||
    e.target.classList.contains("accordion-info") ||
    e.target.classList.contains("accordion-info-text")
  )
    return;

  closeAccordionItem();
};

accordionBtns.forEach((btn) =>
  btn.addEventListener("click", openAccordionBox)
);

window.addEventListener("click", clickOutsideAccordion);