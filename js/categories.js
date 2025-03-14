/**
 * Categories Section - Clean Version
 * Minimal JS with no dependencies
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const categories = document.querySelectorAll('.gs-category');
    
    // Skip if no categories found
    if (!categories.length) return;
    
    // Check if this is a touch-enabled device
    const isTouchDevice = ('ontouchstart' in window) || 
                         (navigator.maxTouchPoints > 0) || 
                         (navigator.msMaxTouchPoints > 0);
    
    if (isTouchDevice) {
        // For touch devices, add tap functionality
        categories.forEach(category => {
            category.addEventListener('click', function(e) {
                // Don't interfere with the Learn More button
                if (e.target.classList.contains('gs-button')) return;
                
                // Prevent navigation
                e.preventDefault();
                
                // Remove tapped class from other categories
                categories.forEach(c => {
                    if (c !== this) c.classList.remove('tapped');
                });
                
                // Toggle tapped state on this category
                this.classList.toggle('tapped');
            });
        });
        
        // Close tapped state when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.gs-category')) {
                categories.forEach(category => {
                    category.classList.remove('tapped');
                });
            }
        });
    }
    
    // Adjust height for small screens
    function adjustHeight() {
        const categoriesContainer = document.querySelector('.gs-categories');
        if (!categoriesContainer) return;
        
        // On desktop
        if (window.innerWidth > 768) {
            // Fix height at 500px or 70vh, whichever is smaller
            const maxHeight = Math.min(500, window.innerHeight * 0.7);
            categoriesContainer.style.height = `${maxHeight}px`;
            
            // Reset category heights
            categories.forEach(category => {
                category.style.height = '100%';
            });
        } else {
            // On mobile, let categories stack
            categoriesContainer.style.height = 'auto';
            
            // Set a fixed height for each category
            categories.forEach(category => {
                category.style.height = '250px';
            });
        }
    }
    
    // Run on load and resize
    adjustHeight();
    window.addEventListener('resize', adjustHeight);
    
    // Add a small delay to ensure images are loaded
    setTimeout(function() {
        // Add a class to signify initialization is complete
        document.querySelector('.gs-categories').classList.add('gs-initialized');
    }, 100);
});


/**
 * Additional JavaScript to fix spacing issues
 * Add this to your categories.js file
 */

// Fix for bottom spacing issues
document.addEventListener('DOMContentLoaded', function() {
    const categoriesSection = document.querySelector('.gs-categories');
    if (!categoriesSection) return;
    
    // Fix bottom spacing issues
    function fixSpacing() {
        // Get the next element after categories
        const nextElement = categoriesSection.nextElementSibling;
        
        // Force proper dimensions on the categories container
        const rect = categoriesSection.getBoundingClientRect();
        
        // Debug the dimensions to console
        console.log("Categories dimensions:", {
            width: rect.width,
            height: rect.height,
            top: rect.top,
            bottom: rect.bottom
        });
        
        // Find any gap between categories and the next element
        if (nextElement) {
            const nextRect = nextElement.getBoundingClientRect();
            const gap = nextRect.top - rect.bottom;
            
            console.log("Gap to next element:", gap);
            
            // If there's a gap and we're not on mobile
            if (gap > 1 && window.innerWidth > 768) {
                // Adjust the height to close the gap
                categoriesSection.style.height = (rect.height + gap) + 'px';
                console.log("Adjusted height to close gap");
            }
        }
        
        // Force the images to fully fill their containers
        document.querySelectorAll('.gs-category-image').forEach(imgContainer => {
            imgContainer.style.height = '100%';
            imgContainer.style.overflow = 'hidden';
        });
        
        document.querySelectorAll('.gs-category-image img').forEach(img => {
            img.style.minHeight = '100%';
            img.style.objectFit = 'cover';
            img.style.margin = '0';
            img.style.display = 'block';
        });
    }
    
    // Run on load, after images load, and on resize
    fixSpacing();
    window.addEventListener('load', fixSpacing);
    window.addEventListener('resize', fixSpacing);
    
    // Force fix after a delay to ensure everything has rendered
    setTimeout(fixSpacing, 500);
});