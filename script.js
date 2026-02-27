// Navbar scroll effect
const navbar = document.getElementById('navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li a');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Toggle icon shape
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}
// Close mobile menu when a link is clicked
if (navLinksItems) {
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks) navLinks.classList.remove('active');
            if (hamburger) {
                const icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });
}

// Helper Function for Load More functionality to be reusable
function setupLoadMore(buttonId, hiddenItemClass, sectionId){
    const btn = document.getElementById(buttonId);
     const items = document.querySelectorAll(hiddenItemClass);

     if (btn) {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-chevron-down')) {
                // Expand