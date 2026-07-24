const menuButton = document.querySelector(".menu");
const navLinks = document.querySelector(".navlinks");
menuButton.addEventListener("click", () => {
  const open = navLinks.classList.toggle("show");
  menuButton.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("show");
  menuButton.setAttribute("aria-expanded", "false");
}));
document.querySelectorAll(".faq-list button").forEach(button => button.addEventListener("click", () => {
  const wasOpen = button.classList.contains("open");
  document.querySelectorAll(".faq-list button").forEach(item => {
    item.classList.remove("open");
    item.querySelector("i").textContent = "+";
  });
  if (!wasOpen) {
    button.classList.add("open");
    button.querySelector("i").textContent = "−";
  }
}));
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  }
}), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
