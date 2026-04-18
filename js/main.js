// ===========================
// MACK 24 HOSTEL — MAIN JS
// ===========================

// Sticky navbar
const navbar = document.getElementById("navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
  });
}

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
  // Close on link click
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

// Active nav link
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach((link) => {
  const href = link.getAttribute("href").split("/").pop();
  if (href === currentPage) link.classList.add("active");
});

// Scroll reveal
const revealEls = document.querySelectorAll(
  ".intro-card, .room-card, .testi-card, .amenity-item, .faq-item",
);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

revealEls.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(el);
});

// Booking form submission
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = bookingForm.querySelector(".btn-submit");
    btn.textContent = "Sending...";
    btn.disabled = true;
    // Simulate submission (replace with real backend/email service)
    setTimeout(() => {
      bookingForm.innerHTML = `
        <div style="text-align:center; padding: 48px 0;">
          <div style="font-size: 3rem; margin-bottom: 16px;">✅</div>
          <h3 style="font-family: 'Playfair Display', serif; font-size: 1.8rem; margin-bottom: 12px;">Application Received!</h3>
          <p style="color: #7A6B52; max-width: 400px; margin: 0 auto 24px;">Thank you for your interest in Mack 24 Hostel. Our team will contact you within 24 hours to discuss availability and next steps.</p>
          <a href="https://wa.me/2348023012003?text=Hi!%20I%20just%20submitted%20a%20room%20application." 
             style="display:inline-block; background:#25D366; color:white; padding:12px 28px; border-radius:50px; font-weight:500;">
            Also Message Us on WhatsApp →
          </a>
        </div>
      `;
    }, 1500);
  });
}

// FAQ accordion
document.querySelectorAll(".faq-question").forEach((q) => {
  q.addEventListener("click", () => {
    const item = q.parentElement;
    const isOpen = item.classList.contains("open");
    document
      .querySelectorAll(".faq-item")
      .forEach((f) => f.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});
