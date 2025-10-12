// ===========================================
//  SMOOTH SCROLL FOR NAVIGATION LINKS
// ===========================================
// Note: Your CSS `scroll-behavior: smooth;` already handles this,
// but this JavaScript provides extra support.
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// ===========================================
//  ICON HOVER EFFECT
// ===========================================
// Note: The icons in your HTML are now inside <a> tags.
// This selector needs to be updated to target the <img> inside the <a>.
document.querySelectorAll("#socials-container a img").forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.style.transform = "scale(1.2)";
    icon.style.transition = "transform 0.2s ease";
  });
  icon.addEventListener("mouseout", () => {
    icon.style.transform = "scale(1)";
  });
});

// ===========================================
//  ANIMATE ELEMENTS ON SCROLL (NEW CODE)
// ===========================================
// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the 'show' class to it
      entry.target.classList.add("show");
    } else {
      // Otherwise, remove the 'show' class
      // You can remove this 'else' block if you want the animation to happen only once
      entry.target.classList.remove("show");
    }
  });
});

// Get all the elements you want to show on scroll
const hiddenElements = document.querySelectorAll(".hidden");

// Tell the observer to observe each hidden element
hiddenElements.forEach((el) => observer.observe(el));



document.addEventListener("DOMContentLoaded", function() {
    // --- Your existing Intersection Observer code for animations ---
    const hiddenElements = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1 
    });
    hiddenElements.forEach(el => observer.observe(el));
    
    // --- NEW: Hamburger Menu Logic ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');
    const navMenuLinks = navLinks.querySelectorAll('a');

    // Toggle the menu when the hamburger is clicked
    hamburgerBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Bonus: Change icon from bars to an X and back
        const icon = hamburgerBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Bonus: Close the menu when a link is clicked
    navMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburgerBtn.querySelector('i').classList.remove('fa-xmark');
                hamburgerBtn.querySelector('i').classList.add('fa-bars');
            }
        });
    });
});
