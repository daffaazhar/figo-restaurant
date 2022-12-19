// Event listener to add and remove class from HTML element
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  // Check whether the page has been scrolled or not
  if (window.pageYOffset > 10) {
    header.classList.add("shadow-large");
  } else {
    header.classList.remove("shadow-large");
  }
});

// Navigation Bar
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
// Event listener to add an remove attribute from HTML element
navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  // Check whether the toggle has been clicked or not
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

function _class(name) {
  return document.getElementsByClassName(name);
}

let tabPanes = _class("tab-header")[0].getElementsByTagName("div");

for (let i = 0; i < tabPanes.length; i++) {
  tabPanes[i].addEventListener("click", function () {
    _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
    tabPanes[i].classList.add("active");

    _class("tab-indicator")[0].style.top = `calc(80px + ${i * 50}px)`;

    _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
    _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
  });
}
