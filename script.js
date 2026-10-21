/* MOBILE NAVIGATION */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

/* SCROLL REVEAL */
const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach(element => revealObserver.observe(element));
} else {
  revealElements.forEach(element => element.classList.add("visible"));
}

/* PROJECT FILTERING */
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    projectCards.forEach(card => {
      const category = card.dataset.category;
      card.classList.toggle("hidden", !(filter === "all" || category === filter));
    });
  });
});

/* COPY EMAIL */
const copyEmail = document.getElementById("copyEmail");
const email = "mahmoodhc11@gmail.com";
if (copyEmail) {
  copyEmail.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
      const label = copyEmail.querySelector("span");
      if (label) {
        label.textContent = "Email copied!";
        setTimeout(() => label.textContent = "Copy email", 2000);
      }
    } catch (error) {
      window.location.href = `mailto:${email}`;
    }
  });
}

/* CURRENT YEAR */
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

/* ACTIVE NAVIGATION */
const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) current = section.getAttribute("id");
  });
  navigationLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});
