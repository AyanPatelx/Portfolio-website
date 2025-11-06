// ====== Reveal on Scroll Animation ======
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ====== Active Navigation Link Highlight ======
const sections = Array.from(document.querySelectorAll("main section"));
const navLinks = Array.from(document.querySelectorAll(".nav-links a"));

const setActive = () => {
  let fromTop = window.scrollY + 120;
  let current = sections.findLast((sec) => sec.offsetTop <= fromTop) || sections[0];
  navLinks.forEach((a) => a.removeAttribute("aria-current"));
  const active = document.querySelector(`.nav a[href="#${current.id}"]`);
  if (active) active.setAttribute("aria-current", "page");
};

document.addEventListener("scroll", setActive, { passive: true });
window.addEventListener("load", () => {
  setActive();
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// ====== Contact Form Simulation ======
const form = document.querySelector("form.card");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent! I’ll get back to you shortly.");
    form.reset();
  });
}
