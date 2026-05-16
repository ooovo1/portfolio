document.addEventListener("DOMContentLoaded", () => {
    const profilePic = document.querySelector(".profile-pic");
    
    if (profilePic) {
        profilePic.style.opacity = "0";
        profilePic.style.transition = "opacity 0.8s ease, transform 0.5s ease";
        
        setTimeout(() => {
            profilePic.style.opacity = "1";
        }, 100);

       
        profilePic.addEventListener("mouseenter", () => {
            profilePic.style.transform = "scale(1.05)";
        });
        
        profilePic.addEventListener("mouseleave", () => {
            profilePic.style.transform = "scale(1)";
        });
    }
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("imgTarget");
    const captionText = document.getElementById("modalCaption");
    const closeModal = document.querySelector(".close-modal");
    document.querySelectorAll(".viewable-cert").forEach(img => {
        img.addEventListener("click", () => {
            if (modal && modalImg && captionText) {
                modal.style.display = "block";
                modalImg.src = img.src;
                captionText.innerHTML = img.alt;
            }
        });
    });
    if (closeModal && modal) {
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }
    window.addEventListener("click", (e) => {
        if (modal && e.target === modal) {
            modal.style.display = "none";
        }
    });
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
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const navLinks = document.getElementById("navLinks");

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener("click", () => {
            
            hamburgerBtn.classList.toggle("active");
            navLinks.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                hamburgerBtn.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });
    }

}); 