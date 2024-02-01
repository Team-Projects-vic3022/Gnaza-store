let navbar = document.querySelector(".nav-section");

let last_scrolled_value = 0;

document.addEventListener("scroll", () => {
  let new_scrolled_value = document.documentElement.scrollTop;

  if (new_scrolled_value > last_scrolled_value) {
    navbar.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
  } else {
    navbar.style.boxShadow = "none";
  }
});
