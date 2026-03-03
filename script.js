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
                 items.forEach(item => {
                    item.classList.remove('hidden-gallery-item');
                    item.style.animation = 'fadeIn 0.5s ease forwards';
                });
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
                this.title = "අඩු කරන්න";
            } else {
                // Collapse
                items.forEach(item => {
                    item.classList.remove('hidden-gallery-item');
                    item.style.animation = 'fadeIn 0.5s ease forwards';
                }); 
                icon.classList.remove('fa-chevron-down');
                 icon.classList.add('fa-chevron-up');
                 this.title = "අඩු කරන්න";
            } else {
                // Collapse
                items.forEach(item => {
                    item.classList.add('hidden-gallery-item');
                });
                icon.classList.remove('fa-chevron-up');
                 icon.classList.add('fa-chevron-down');
                  this.title = "තවත් පින්තූර බලන්න";
                  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}
             // Initialize Load More for Photo Gallery       
             setupLoadMore('gallery-load-more', '.gallery-hidden', 'photo-gallery');

             // Initialize Load More for History
             setupLoadMore('history-load-more', '.history-hidden', 'history');

             // Initialize Load More for Social Services
             setupLoadMore('social-load-more', '.social-hidden', 'social-services');
            
             // Video Carousel Logic
             // Video Carousel Logic

             const videoTrackContainer = document.getElementById('video-track-container');
             const prevBtn = document.getElementById('video-prev');
             const nextBtn = document.getElementById('video-next');

             const scrollAmount = 350;// එක පාරකට කොච්චර දුර යනවද කියන එක
             if (nextBtn && videoTrackContainer) {
                 nextBtn.addEventListener('click', () => {

