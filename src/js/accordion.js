const accordion = document.querySelector(".accordion");
const accordionBtns = document.querySelectorAll(".accordion-btn");

function openAccordionItems() {
  if (this.nextElementSibling.classList.contains("active-accordion")) {
    this.nextElementSibling.classList.remove("active-accordion");
  } else {
    closeAccordionItem();
    this.nextElementSibling.classList.toggle("active-accordion");
  }
}

const closeAccordionItem = () => {
  const allActiveItems = document.querySelectorAll(".accordion-info");
  allActiveItems.forEach((item) => item.classList.remove("active-accordion"));
};

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
  btn.addEventListener("click", openAccordionItems)
);

window.addEventListener("click", clickOutsideAccordion);
