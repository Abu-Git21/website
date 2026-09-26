document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    const isOpen = button.getAttribute("aria-expanded") === "true";
    details.hidden = isOpen;
    button.setAttribute("aria-expanded", String(!isOpen));
    button.textContent = isOpen ? "Read more" : "Show less";
  });
});
