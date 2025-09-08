// BizHKD - AI Ghi Sổ Kế Toán
(function() {
    'use strict';

    // DOM Elements
    const navbar = document.getElementById('navbar');
    const backToTopBtn = document.getElementById('backToTop');
    const playButton = document.querySelector('.play-button');

    // Navbar scroll effect
    function handleNavbarScroll() {
        if (window.scrollY > 100) {
            navbar.classList.add('shadow-lg');
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    }

    // Back to top button
    function handleBackToTop() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Smooth scrolling for navigation links
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            });
        });
    }

    // Intersection Observer for animations
    function initAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const animateElements = document.querySelectorAll('.feature-card, .pricing-card, .demo-content');
        animateElements.forEach(el => {
            el.classList.add('loading');
            observer.observe(el);
        });
    }

    // Play button interaction
    function initPlayButton() {
        if (playButton) {
            playButton.addEventListener('click', function() {
                this.style.transform = 'translate(-50%, -50%) scale(0.9)';
                setTimeout(() => {
                    this.style.transform = 'translate(-50%, -50%) scale(1.1)';
                }, 150);
                console.log('Play button clicked');
            });
        }
    }

    // Initialize everything
    function init() {
        initSmoothScrolling();
        initAnimations();
        initPlayButton();
        
        window.addEventListener('scroll', () => {
            handleNavbarScroll();
            handleBackToTop();
        });
        
        backToTopBtn.addEventListener('click', scrollToTop);
        
        console.log('BizHKD website initialized!');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
