document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. HOME PAGE EFFECTS (index.html)
    // ==========================================
    const profilePic = document.querySelector(".profile-pic");
    
    if (profilePic) {
        // Soft fade-in effect when the page loads
        profilePic.style.opacity = "0";
        profilePic.style.transition = "opacity 0.8s ease, transform 0.5s ease";
        
        setTimeout(() => {
            profilePic.style.opacity = "1";
        }, 100);

        // Add a slight interactive tilt/lift when hovering over your photo
        profilePic.addEventListener("mouseenter", () => {
            profilePic.style.transform = "scale(1.05)";
        });
        
        profilePic.addEventListener("mouseleave", () => {
            profilePic.style.transform = "scale(1)";
        });
    }

    // ==========================================
    // 2. CERTIFICATIONS POPUP & LINKS (certificates.html)
    // ==========================================
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("imgTarget");
    const captionText = document.getElementById("modalCaption");
    const closeModal = document.querySelector(".close-modal");

    // Open full-screen modal when a certificate image is clicked
    document.querySelectorAll(".viewable-cert").forEach(img => {
        img.addEventListener("click", () => {
            if (modal && modalImg && captionText) {
                modal.style.display = "block";
                modalImg.src = img.src;
                captionText.innerHTML = img.alt;
            }
        });
    });

    // Close the certificate popup when clicking the 'X' button
    if (closeModal && modal) {
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // Close the certificate popup when clicking anywhere outside the image background
    window.addEventListener("click", (e) => {
        if (modal && e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Handle clicking the title text to launch the external validation check link
    document.querySelectorAll(".cert-title").forEach(title => {
        title.addEventListener("click", () => {
            const verificationUrl = title.getAttribute("data-link");
            if (verificationUrl && verificationUrl !== "#") {
                window.open(verificationUrl, "_blank");
            } else {
                alert("Legit check verification link coming soon!");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // MOBILE HAMBURGER MENU TOGGLE
    // ==========================================
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const navLinks = document.getElementById("navLinks");

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener("click", () => {
            // Toggles the drop-down menu visibility and changes lines to an "X"
            hamburgerBtn.classList.toggle("active");
            navLinks.classList.toggle("active");
        });

        // Close the menu automatically if the user clicks any navigation link
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                hamburgerBtn.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });
    }

    // ==========================================
    // 1. HOME PAGE EFFECTS (index.html)
    // ==========================================
    // ... rest of your existing profile image code continues below safely ...