// ===================================================================
//     SCRIPT EXECUTES AFTER THE HTML DOCUMENT IS FULLY LOADED
// ===================================================================
document.addEventListener("DOMContentLoaded", function() {

    // ===========================================
    //   HAMBURGER MENU LOGIC
    // ===========================================
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const optionsMenu = document.querySelector(".options"); // ✅ CORRECT: Select the parent <div>

    // Toggle the menu when the hamburger is clicked
    hamburgerBtn.addEventListener('click', () => {
        // Toggle the 'active' class on the '.options' container
        optionsMenu.classList.toggle('active');

        // Change icon from bars to an X and back
        const icon = hamburgerBtn.querySelector('i');
        if (optionsMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Bonus: Close the menu when a link inside it is clicked
    optionsMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (optionsMenu.classList.contains('active')) {
                optionsMenu.classList.remove('active');
                hamburgerBtn.querySelector('i').classList.remove('fa-xmark');
                hamburgerBtn.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // ===========================================
    //   ANIMATE ELEMENTS ON SCROLL
    // ===========================================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the 'show' class to make the element visible
                entry.target.classList.add("show");
            } else {
                // Optional: Remove the class to re-animate on scroll-away
                entry.target.classList.remove("show");
            }
        });
    }, {
        threshold: 0.1 // Trigger animation when 10% of the element is visible
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // ===========================================
    //   ICON HOVER EFFECT (CSS is often better for this)
    // ===========================================
    document.querySelectorAll("#socials-container a img").forEach((icon) => {
        icon.addEventListener("mouseover", () => {
            icon.style.transform = "scale(1.2)";
            icon.style.transition = "transform 0.2s ease";
        });
        icon.addEventListener("mouseout", () => {
            icon.style.transform = "scale(1)";
        });
    });

});
