// Simple and Working Slider Implementation
class SimpleSlider {
    constructor(container) {
        this.container = container;
        this.track = container.querySelector('.hero-slider-track');
        this.slides = container.querySelectorAll('.hero-slide');
        this.prevBtn = container.querySelector('.hero-slider-prev');
        this.nextBtn = container.querySelector('.hero-slider-next');
        this.dotsContainer = container.querySelector('.hero-slider-dots');
        
        this.currentIndex = 0;
        this.totalSlides = this.slides.length;
        
        this.init();
    }
    
    init() {
        if (this.slides.length === 0) {
            console.error('No slides found');
            return;
        }
        
        console.log('Initializing SimpleSlider with', this.totalSlides, 'slides');
        this.createDots();
        this.updateSlider();
        this.bindEvents();
    }
    
    createDots() {
        if (!this.dotsContainer) return;
        
        this.dotsContainer.innerHTML = '';
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('span');
            dot.className = 'hero-slider-dot';
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotsContainer.appendChild(dot);
        }
    }
    
    updateSlider() {
        const translateX = -this.currentIndex * 100;
        this.track.style.transform = `translateX(${translateX}%)`;
        
        // Update dots
        const dots = this.dotsContainer.querySelectorAll('.hero-slider-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
        
        console.log('Current slide:', this.currentIndex + 1);
    }
    
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        this.updateSlider();
    }
    
    prev() {
        this.currentIndex = this.currentIndex === 0 ? this.totalSlides - 1 : this.currentIndex - 1;
        this.updateSlider();
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.updateSlider();
    }
    
    bindEvents() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }
        
        // Touch events
        let startX = 0;
        let endX = 0;
        
        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });
        
        this.container.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
        }, { passive: true });
        
        // Keyboard
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.hero-slider-wrapper');
    if (sliderWrapper) {
        window.slider = new SimpleSlider(sliderWrapper);
        console.log('SimpleSlider ready!');
    }
}); 