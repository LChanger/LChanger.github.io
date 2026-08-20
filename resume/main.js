const header = document.querySelector(".header");
document
  .querySelector(".nav-toggle")
  .addEventListener("click", () => header.classList.toggle("open"));
document
  .querySelectorAll("nav a")
  .forEach((a) =>
    a.addEventListener("click", () => header.classList.remove("open")),
  );
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }),
  { threshold: 0.08 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
