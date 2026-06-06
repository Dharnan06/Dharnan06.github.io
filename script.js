// Cursor glow
const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// Theme toggle
const toggle = document.getElementById("themeToggle");
toggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
});

// Particles
function createParticles() {
  const container = document.getElementById("particles");
  if (!container) return;
  const colors = ["#7c5cff", "#4aa3ff", "#d765ff", "#25d88a"];
  for (let i = 0; i < 28; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${Math.random() * 20 + 15}s;
      animation-delay: ${Math.random() * 15}s;
    `;
    container.appendChild(p);
  }
}
createParticles();

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Active nav highlight
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".side-nav a");

window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 160) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) link.classList.add("active");
  });
}, { passive: true });

// Certificate modal
const certModal = document.getElementById("certModal");
const certModalClose = document.getElementById("certModalClose");
const certModalBackdrop = document.getElementById("certModalBackdrop");

// Certificate PDF filenames (same folder as index.html)
const certLinks = {
  "deloitte":  "Technology_Job_Simulation.pdf",
  "docker":    "Docker.pdf",
  "java-gfg":  "java1.pdf",
  "java-hr":   "Java.pdf",
  "sql":       "SQL.pdf",
  "datasci":   "Data_Science.pdf",
  "uipath":    "Automation_Developer.pdf",
  "cloud":     "cloud.pdf",
};

document.querySelectorAll(".cert-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const certKey = btn.dataset.cert;
    const link = certLinks[certKey];
    if (link) {
      window.open(link, "_blank");
    }
  });
});

function closeModal() {
  certModal.classList.remove("open");
  document.body.style.overflow = "";
}

certModalClose?.addEventListener("click", closeModal);
certModalBackdrop?.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Smooth scroll for sidebar links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Mobile nav hamburger
const hamburger = document.getElementById("hamburger");
const mobileDrawer = document.getElementById("mobileDrawer");
const mobileOverlay = document.getElementById("mobileOverlay");

function openDrawer() {
  hamburger.classList.add("open");
  mobileDrawer.classList.add("open");
  mobileOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  hamburger.classList.remove("open");
  mobileDrawer.classList.remove("open");
  mobileOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

hamburger?.addEventListener("click", () => {
  hamburger.classList.contains("open") ? closeDrawer() : openDrawer();
});

mobileOverlay?.addEventListener("click", closeDrawer);

// Close drawer when a nav link is clicked
document.querySelectorAll(".mob-link").forEach(link => {
  link.addEventListener("click", closeDrawer);
});

// Active highlight for mobile nav
window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 160) current = section.id;
  });
  document.querySelectorAll(".mob-link").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) link.classList.add("active");
  });
}, { passive: true });

