document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('testimonialSlider');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!slider) return;
    
    // Get all testimonial cards
    const originalCards = Array.from(document.querySelectorAll('.testimonial-card'));
    const totalSlides = originalCards.length;
    
    if (totalSlides === 0) return;
    
    let currentIndex = 0;
    let isTransitioning = false;
    
    // Create infinite carousel by duplicating cards
    function createInfiniteCarousel() {
        // Clear existing content
        slider.innerHTML = '';
        
        // Create array with cards: [last, first, second, third, first, last]
        const carouselCards = [
            originalCards[totalSlides - 1].cloneNode(true), // Last card (left)
            ...originalCards.map(card => card.cloneNode(true)), // All original cards
            originalCards[0].cloneNode(true) // First card (right)
        ];
        
        // Add all cards to slider
        carouselCards.forEach((card, index) => {
            card.classList.remove('active');
            slider.appendChild(card);
        });
        
        // Set initial position (show first original card in center)
        currentIndex = 1; // Index of first original card
        updateCarousel();
    }
    
    // Update carousel display with sliding motion
    function updateCarousel() {
        const cards = slider.querySelectorAll('.testimonial-card');
        const cardWidth = getCardWidth();
        const gap = 48; // Increased gap between cards (3rem = 48px)
        const totalCardWidth = cardWidth + gap;
        
        // Calculate the center position
        const centerOffset = (slider.offsetWidth - cardWidth) / 2;
        
        // Position each card
        cards.forEach((card, index) => {
            const relativeIndex = index - currentIndex;
            const position = centerOffset + (relativeIndex * totalCardWidth);
            
            // Apply transform to slide the card
            card.style.transform = `translateX(${position}px)`;
            
            // Update active state and styling based on position
            if (relativeIndex === 0) {
                // Center card - active
                card.classList.add('active');
                card.style.opacity = '1';
                card.style.transform += ' scale(1)';
            } else if (Math.abs(relativeIndex) === 1) {
                // Adjacent cards - visible but dimmed
                card.classList.remove('active');
                card.style.opacity = '0.6';
                card.style.transform += ' scale(0.9)';
            } else {
                // Far cards - hidden
                card.classList.remove('active');
                card.style.opacity = '0';
                card.style.transform += ' scale(0.8)';
            }
        });
        
        // Update navigation buttons
        updateNavigationButtons();
        
        // Update dots
        updateDots();
    }
    
    // Get card width based on screen size
    function getCardWidth() {
        if (window.innerWidth >= 1200) return 450;
        if (window.innerWidth <= 576) return 280;
        if (window.innerWidth <= 680) return 300;
        return 400;
    }
    
    // Update navigation buttons state
    function updateNavigationButtons() {
        if (prevBtn && nextBtn) {
            // Always enable buttons for infinite carousel
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        }
    }
    
    // Update pagination dots
    function updateDots() {
        const realIndex = getRealIndex();
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === realIndex);
        });
    }
    
    // Get the real index (0 to totalSlides-1) for dots
    function getRealIndex() {
        if (currentIndex === 0) return totalSlides - 1; // Last card
        if (currentIndex === totalSlides + 1) return 0; // First card
        return currentIndex - 1; // Middle cards
    }
    
    // Go to next slide with infinite loop
    function nextSlide() {
        if (isTransitioning) return;
        
        isTransitioning = true;
        currentIndex++;
        
        // If we're at the last duplicate, reset to first original
        if (currentIndex >= totalSlides + 1) {
            currentIndex = 1;
            // Immediately jump to first original without animation
            setTimeout(() => {
                updateCarousel();
                isTransitioning = false;
            }, 50);
        } else {
            updateCarousel();
            setTimeout(() => {
                isTransitioning = false;
            }, 500);
        }
    }
    
    // Go to previous slide with infinite loop
    function prevSlide() {
        if (isTransitioning) return;
        
        isTransitioning = true;
        currentIndex--;
        
        // If we're at the first duplicate, reset to last original
        if (currentIndex <= 0) {
            currentIndex = totalSlides;
            // Immediately jump to last original without animation
            setTimeout(() => {
                updateCarousel();
                isTransitioning = false;
            }, 50);
        } else {
            updateCarousel();
            setTimeout(() => {
                isTransitioning = false;
            }, 500);
        }
    }
    
    // Go to specific slide by dot click
    function goToSlide(slideIndex) {
        if (isTransitioning) return;
        
        isTransitioning = true;
        currentIndex = slideIndex + 1; // +1 because of the duplicate at the beginning
        updateCarousel();
        
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }
    
    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    slider.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                nextSlide();
            } else {
                // Swipe right - previous slide
                prevSlide();
            }
        }
    }
    
    // Click on side cards to navigate
    slider.addEventListener('click', (e) => {
        const clickedCard = e.target.closest('.testimonial-card');
        if (!clickedCard) return;
        
        const cards = slider.querySelectorAll('.testimonial-card');
        const clickedIndex = Array.from(cards).indexOf(clickedCard);
        
        if (clickedIndex !== currentIndex) {
            if (clickedIndex < currentIndex) {
                prevSlide();
            } else {
                nextSlide();
            }
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        // Recreate carousel on resize to ensure proper layout
        createInfiniteCarousel();
    });
    
    // Initialize the carousel
    createInfiniteCarousel();
});