const navOpen = document.getElementById("nav-open");
const navClose = document.getElementById("nav-close");
const navMenu = document.getElementById("navigation-menu");
const navbarLinks = document.querySelectorAll(".navbar-links");

navOpen.addEventListener("click", toggleMenu);
navClose.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (navMenu.classList.contains("show")) {
    navMenu.classList.remove("show");
    navOpen.hidden = false;
    navClose.hidden = true;
  } else {
    navOpen.hidden = true;
    navClose.hidden = false;
    navMenu.classList.add("show");
    navBarLinksOpacity();
  }

  // Renders the opacity of each link one at a time
  function navBarLinksOpacity() {
    navbarLinks.forEach((link, idx) => {
      link.style.opacity = 1;
      link.style.transition = `opacity ${idx * 300}ms ${idx * 300}ms`;
    });
  }
}
