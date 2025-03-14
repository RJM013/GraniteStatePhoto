/**
 * Enhanced Navigation JavaScript - Complete Working Version
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - Navigation script initialized');
    
    // Elements
    const header = document.querySelector('.enhanced-header');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    const dropdownItems = document.querySelectorAll('.has-dropdown');
    const body = document.body;
    
    // Debug info
    console.log('Navigation elements loaded:', {
        header: !!header,
        navToggle: !!navToggle,
        navMenu: !!navMenu,
        navOverlay: !!navOverlay,
        dropdownItems: dropdownItems.length
    });
    
    // 1. Shrink header on scroll
    function handleScroll() {
        if (header) {
            if (window.scrollY > 30) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    }
    
    // Initial call and event listener for scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    // 2. FIXED Mobile menu toggle - Replace with new implementation
    // Clone and replace to remove any existing event listeners
    if (navToggle) {
        const newToggle = navToggle.cloneNode(true);
        navToggle.parentNode.replaceChild(newToggle, navToggle);
        
        // Add the event listener to the new button
        newToggle.addEventListener('click', function(e) {
            // Critical: Stop event propagation
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Hamburger clicked - toggling menu');
            
            // Simple toggle
            const isCurrentlyOpen = body.classList.contains('menu-open');
            
            if (isCurrentlyOpen) {
                body.classList.remove('menu-open');
                console.log('Menu closed');
            } else {
                body.classList.add('menu-open');
                console.log('Menu opened');
            }
        });
    } else {
        console.error('Navigation toggle button not found!');
    }
    
    // Ensure overlay closes menu when clicked
    if (navOverlay) {
        navOverlay.addEventListener('click', function(e) {
            // Prevent event bubbling
            e.stopPropagation();
            
            console.log('Overlay clicked - closing menu');
            body.classList.remove('menu-open');
        });
    }
    
    // 3. Mobile dropdown toggle
    dropdownItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        
        if (link) {
            // For mobile: treat click on dropdown parent as toggle
            link.addEventListener('click', function(e) {
                // Only for mobile view
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    e.stopPropagation(); // Stop bubbling to prevent menu close
                    
                    console.log('Dropdown toggle clicked');
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
        }
    });
    
    // 4. Close mobile menu on window resize (if going to desktop)
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 992 && body.classList.contains('menu-open')) {
                console.log('Window resized to desktop - closing mobile menu');
                body.classList.remove('menu-open');
                
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
        const currentPath = window.location.pathname;
        const currentPage = currentPath.split('/').pop() || 'index.html';
        console.log('Current page:', currentPage);
        
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            // Handle both direct links and dropdown links
            const href = link.getAttribute('href');
            if (href && href !== '#') {
                // Match either exact path or just the filename
                const isActive = href === currentPage || 
                               currentPath.endsWith('/' + href);
                
                if (isActive) {
                    console.log('Setting active link:', href);
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
            }
        });
    }
    
    setActiveMenuItem();
    
    // 6. Close mobile menu when clicking on a regular link
    const allNavLinks = document.querySelectorAll('.nav-link, .dropdown-link');
    
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't close if it's a dropdown toggle
            if (window.innerWidth <= 992) {
                const isDropdownToggle = this.closest('.has-dropdown') && 
                                        this.closest('.has-dropdown').querySelector('.nav-link') === this;
                
                // Only close menu if it's not a dropdown toggle
                if (!isDropdownToggle) {
                    console.log('Link clicked - closing menu');
                    body.classList.remove('menu-open');
                }
            }
        });
    });
    
    // 7. Add hover functionality for desktop
    dropdownItems.forEach(item => {
        // For desktop only
        item.addEventListener('mouseenter', function() {
            if (window.innerWidth > 992) {
                const indicator = this.querySelector('.dropdown-indicator');
                if (indicator) {
                    indicator.style.transform = 'rotate(180deg)';
                }
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (window.innerWidth > 992) {
                const indicator = this.querySelector('.dropdown-indicator');
                if (indicator) {
                    indicator.style.transform = 'rotate(0)';
                }
            }
        });
    });
    
    // 8. Handle keyboard navigation for accessibility
    document.addEventListener('keydown', function(e) {
        // Escape key to close mobile menu
        if (e.key === 'Escape' && body.classList.contains('menu-open')) {
            console.log('Escape key pressed - closing menu');
            body.classList.remove('menu-open');
        }
    });
    
    // 9. Check for outside clicks to close menu
    // Using capture phase to handle events before they reach other handlers
    document.addEventListener('click', function(e) {
        // Only handle if menu is open
        if (body.classList.contains('menu-open')) {
            // If click is outside menu and not on toggle button
            if (navMenu && !navMenu.contains(e.target) && !e.target.closest('.nav-toggle')) {
                console.log('Outside click detected - closing menu');
                body.classList.remove('menu-open');
            }
        }
    }, true); // Use capture phase
    
    // 10. Enable active states on mobile touch devices
    document.addEventListener('touchstart', function() {
        // This empty handler enables :active pseudo-classes on mobile
    }, false);
    
    console.log('Navigation initialization complete');
});