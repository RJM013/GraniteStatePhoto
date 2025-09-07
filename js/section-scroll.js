/**
 * Fixed and improved section animations script
 * Resolves issues with section header targeting and animation timing
 */
document.addEventListener('DOMContentLoaded', function() {
    
    // Check if browser supports Intersection Observer
    if ('IntersectionObserver' in window) {
        // Elements to observe for scrolling into view
        const sections = document.querySelectorAll('section');
        const sectionHeaders = document.querySelectorAll('.section-header');
        const contentBlocks = document.querySelectorAll('.content-card, .gallery-card, .testimonial-card, .pricing-card, .faq-item');
        
        // Create intersection observer for sections
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Add animation class when section comes into view
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    // Unobserve after animation is triggered
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, {
            root: null, // viewport
            threshold: 0.15, // trigger when 15% of the element is visible
            rootMargin: '0px 0px -10% 0px' // slightly before element enters viewport
        });
        
        // Create observer for headers with different timing
        const headerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const title = entry.target.querySelector('.section-title');
                    const subtitle = entry.target.querySelector('.section-subtitle');
        
                    if (title) {
                        title.classList.add('animate-in');
                        setTimeout(() => {
                            if (subtitle) subtitle.classList.add('animate-in');
                        }, 200);
                    }
                    headerObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5,  // Reduced from 0.7
            rootMargin: '0px 0px -5% 0px' // Adjusted root margin
        });
        
        
        // Create observer for content blocks with staggered reveal
        const contentObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Calculate delay based on position in parent
                    let delay = 0;
                    
                    // Only calculate index-based delay if we have a parent with multiple children
                    const parent = entry.target.parentElement;
                    if (parent && parent.children.length > 1) {
                        const siblings = Array.from(parent.children);
                        const index = siblings.indexOf(entry.target);
                        delay = index * 100; // 100ms delay between each item
                    }
                    
                    // Apply delayed animation
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, delay);
                    
                    contentObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -5% 0px'
        });
        
        // Check if we're on a small screen where animations should be disabled
        const isSmallScreen = window.innerWidth <= 576;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (!isSmallScreen && !prefersReducedMotion) {
            // Only observe elements if animations should run
            sections.forEach(section => sectionObserver.observe(section));
            sectionHeaders.forEach(header => headerObserver.observe(header));
            contentBlocks.forEach(block => contentObserver.observe(block));
        } else {
            // If animations are disabled, make sure everything is visible
            sections.forEach(section => section.classList.add('in-view'));
            document.querySelectorAll('.section-title, .section-subtitle').forEach(el => {
                el.classList.add('animate-in');
            });
            contentBlocks.forEach(block => block.classList.add('animate-in'));
        }
    }
    
    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only process if it's a valid anchor link
            if (targetId !== '#' && document.querySelector(targetId)) {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                const headerOffset = 100; // Adjust for fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Category slices touch device handling
    const categorySlices = document.querySelectorAll('.category-slice');
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        categorySlices.forEach(slice => {
            let tapped = false;
            
            // Handle touch events on mobile
            slice.addEventListener('touchstart', function(e) {
                if (!tapped) {
                    e.preventDefault();
                    // Reset other slices
                    categorySlices.forEach(s => {
                        if (s !== slice) s.classList.remove('tapped');
                    });
                    
                    slice.classList.add('tapped');
                    tapped = true;
                    
                    // Reset after delay
                    setTimeout(() => {
                        tapped = false;
                    }, 3000);
                }
            });
        });
    }
    
    // Add scroll indicator for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        // Check if scroll indicator already exists
        if (!document.querySelector('.scroll-indicator')) {
            const scrollIndicator = document.createElement('div');
            scrollIndicator.className = 'scroll-indicator';
            scrollIndicator.innerHTML = '<div class="scroll-icon"><i class="fas fa-chevron-down"></i></div>';
            hero.appendChild(scrollIndicator);
            
            // Scroll to categories when clicked
            scrollIndicator.addEventListener('click', () => {
                const categories = document.querySelector('.fullscreen-categories');
                if (categories) {
                    categories.scrollIntoView({ behavior: 'smooth' });
                }
            });
            
            // Fade out scroll indicator on scroll
            window.addEventListener('scroll', () => {
                const scrollPosition = window.scrollY;
                if (scrollPosition > 100) {
                    scrollIndicator.style.opacity = '0';
                } else {
                    scrollIndicator.style.opacity = '1';
                }
            });
        }
    }
    
    // Initialize section transitions
    const setupSectionTransitions = () => {
        // Add wave dividers between specific sections if needed
        const addDivider = (beforeSection, afterSection, type = 'wave') => {
            const beforeEl = document.querySelector(beforeSection);
            const afterEl = document.querySelector(afterSection);
            
            if (beforeEl && afterEl && !beforeEl.nextElementSibling.classList.contains('section-divider')) {
                const divider = document.createElement('div');
                divider.className = `section-divider ${type}-divider`;
                
                if (type === 'wave') {
                    divider.innerHTML = `<svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>`;
                } else if (type === 'angle') {
                    divider.innerHTML = `<svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
                    </svg>`;
                }
                
                beforeEl.parentNode.insertBefore(divider, afterEl);
            }
        };
        
        // Optional: Add dividers between specific sections
        // addDivider('.about', '.testimonials', 'angle');
        // addDivider('.testimonials', '.pricing-section', 'wave');
    };
    
    setupSectionTransitions();
    
    // Testimonial functionality moved to testimonials.js
});