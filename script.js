let del = document.getElementById("del");
let navMenu = document.getElementById("hamb-ul");
let burger = document.getElementById("burger");
// let colorNavLink = document.getElementById("alink");

burger.addEventListener("click", (e) => {
  navMenu.style.display = "none"
    ? (navMenu.style.display = "block")
    : (navMenu.style.display = "none");
  burger.style.display = "none";
  del.style.display = "block";
});

del.addEventListener("click", (e) => {
  navMenu.style.display = "block"
    ? (navMenu.style.display = "none")
    : (navMenu.style.display = "block");
  del.style.display = "none";
  burger.style.display = "block";
});
