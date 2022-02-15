const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  const expanded = navToggle.getAttribute("aria-expanded");

  if (expanded === "false") {
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    navToggle.setAttribute("aria-expanded", "false");
  }

  if (visibility === "false") {
    nav.setAttribute("data-visible", "true");
  } else {
    nav.setAttribute("data-visible", "false");
  }
});

/*
class Script {
  constructor() {}
}
window.Script = Script;
*/
