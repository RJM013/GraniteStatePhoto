/**
 * Enhanced Navigation JavaScript
 */
document.addEventListener('DOMContentLoaded', function() {
    
    // Elements
    const header = document.querySelector('.enhanced-header');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    const dropdownItems = document.querySelectorAll('.has-dropdown');
    const body = document.body;
    
    // 1. Shrink header on scroll
    function handleScroll() {
        if (window.scrollY > 30) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Initial call and event listener for scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    // 2. Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            toggleMenu();
        });
    }
    
    // Close menu when clicking overlay
    if (navOverlay) {
        navOverlay.addEventListener('click', function() {
            toggleMenu(false);
        });
    }
    
    function toggleMenu(open = undefined) {
        // If open is undefined, toggle based on current state
        // If open is defined (true/false), set to that state
        const shouldOpen = open !== undefined ? open : !body.classList.contains('menu-open');
        
        if (shouldOpen) {
            body.classList.add('menu-open');
        } else {
            body.classList.remove('menu-open');
        }
    }
    
    // 3. Mobile dropdown toggle
    dropdownItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        
        // For mobile: treat click on dropdown parent as toggle
        link.addEventListener('click', function(e) {
            // Only for mobile view
            if (window.innerWidth <= 992) {
                e.preventDefault();
                item.classList.toggle('dropdown-open');
                
                // Toggle dropdown indicator rotation
                const indicator = this.querySelector('.dropdown-indicator');
                if (indicator) {
                    indicator.style.transform = item.classList.contains('dropdown-open') 
                        ? 'rotate(180deg)' 
                        : 'rotate(0)';
                }
            }
        });
    });
    
    // 4. Close mobile menu on window resize (if going to desktop)
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 992 && body.classList.contains('menu-open')) {
                toggleMenu(false);
                
                // Reset any open dropdowns
                dropdownItems.forEach(item => {
                    item.classList.remove('dropdown-open');
                    const indicator = item.querySelector('.dropdown-indicator');
                    if (indicator) {
                        indicator.style.transform = 'rotate(0)';
                    }
                });
            }
        }, 250);
    });
    
    // 5. Active menu item based on current page
    function setActiveMenuItem() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            // Handle both direct links and dropdown links
            const href = link.getAttribute('href');
            if (href && href !== '#' && href === currentPage) {
                link.classList.add('active');
                
                // If it's in a dropdown, highlight parent too
                const parentItem = link.closest('.has-dropdown');
                if (parentItem) {
                    const parentLink = parentItem.querySelector('.nav-link');
                    if (parentLink) {
                        parentLink.classList.add('active');
                    }
                }
            }
        });
    }
    
    setActiveMenuItem();
    
    // 6. Close mobile menu when clicking on a link
    const allNavLinks = document.querySelectorAll('.nav-link, .dropdown-link');
    
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't close if it's a dropdown toggle
            if (window.innerWidth <= 992) {
                const isDropdownToggle = this.closest('.has-dropdown') && 
                                        this.closest('.has-dropdown').querySelector('.nav-link') === this;
                
                if (!isDropdownToggle) {
                    toggleMenu(false);
                }
            }
        });
    });
    
    // 7. Add hover functionality for desktop
    dropdownItems.forEach(item => {
        // For desktop only
        item.addEventListener('mouseenter', function() {
            if (window.innerWidth > 992) {
                this.querySelector('.dropdown-indicator').style.transform = 'rotate(180deg)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (window.innerWidth > 992) {
                this.querySelector('.dropdown-indicator').style.transform = 'rotate(0)';
            }
        });
    });
    
    // 8. Handle keyboard navigation for accessibility
    document.addEventListener('keydown', function(e) {
        // Escape key to close mobile menu
        if (e.key === 'Escape' && body.classList.contains('menu-open')) {
            toggleMenu(false);
        }
    });
    
    // Make dropdown items focusable for keyboard navigation
    dropdownItems.forEach(item => {
        const dropdownLinks = item.querySelectorAll('.dropdown-link');
        
        item.addEventListener('focusin', function() {
            if (window.innerWidth > 992) {
                this.classList.add('dropdown-open');
            }
        });
        
        // Close dropdown when focus leaves
        const lastLink = dropdownLinks[dropdownLinks.length - 1];
        if (lastLink) {
            lastLink.addEventListener('blur', function(e) {
                if (window.innerWidth > 992 && !item.contains(e.relatedTarget)) {
                    item.classList.remove('dropdown-open');
                }
            });
        }
    });
});