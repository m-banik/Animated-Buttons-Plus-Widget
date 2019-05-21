const section = document.querySelector("section");
const arrow = document.querySelector("section+div");
arrow.addEventListener("click", () => {
  section.classList.toggle("active");
});
