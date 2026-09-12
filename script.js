const navLinks = document.querySelector(".nav-links");

const menuButton = document.createElement("button");

menuButton.textContent = "☰";
menuButton.classList.add("menu-button");

document.querySelector(".navbar").prepend(menuButton);

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");
});