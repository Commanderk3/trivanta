// Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach(s => s.classList.remove("active"));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

setInterval(showSlides, 4000); // 4s interval

// Mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Counter animation
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 100; // smaller = faster

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target + "+";
        }
      };
      updateCount();
    });
  };

  // Run animation only when metrics section is visible
  const metricsSection = document.querySelector(".metrics");
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounters();
      observer.disconnect(); // run only once
    }
  }, { threshold: 0.5 });

  observer.observe(metricsSection);
});

document.querySelectorAll(".dropdown > a").forEach(dropBtn => {
  dropBtn.addEventListener("click", e => {
    e.preventDefault(); // prevent link jump
    const menu = dropBtn.nextElementSibling;
    menu.classList.toggle("show");
  });
});

console.log("VridhCare simplified replica loaded.");

