// Enhance hexagon hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Get all hexagon cells
    const hexCells = document.querySelectorAll('.hex-cell');
    
    // Add enhanced hover effects
    hexCells.forEach((cell, index) => {
        // Start with different z-indices to prevent layout issues
        cell.style.zIndex = 1;
        
        // Mouse enter event
        cell.addEventListener('mouseenter', function() {
            // Force higher z-index on hover
            this.style.zIndex = 10;
            
            // Get the secondary images
            const secondaryImgs = this.querySelectorAll('.hex-secondary');
            
            // Ensure they're visible
            secondaryImgs.forEach(img => {
                img.style.opacity = '1';
            });
            
            // Add a hover active class for extra CSS targeting
            this.classList.add('hex-hover-active');
        });
        
        // Mouse leave event
        cell.addEventListener('mouseleave', function() {
            // Reset z-index after a small delay to allow transition to complete
            setTimeout(() => {
                if (!this.matches(':hover')) {
                    this.style.zIndex = 1;
                }
            }, 400);
            
            // Remove hover active class
            this.classList.remove('hex-hover-active');
        });
    });

    // Add CSS for manual hover class
    const style = document.createElement('style');
    style.innerHTML = `
        .hex-cell.hex-hover-active .hex-secondary:nth-child(2) {
            transform: translate(30%, -15%) scale(0.85) rotate(8deg) !important;
        }
        
        .hex-cell.hex-hover-active .hex-secondary:nth-child(3) {
            transform: translate(-30%, 15%) scale(0.85) rotate(-8deg) !important;
        }
        
        /* Fix for mobile devices that don't support hover properly */
        @media (hover: none) {
            .hex-cell:active {
                transform: translateY(-10px);
            }
            
            .hex-cell:active .hex-secondary {
                opacity: 1 !important;
            }
        }
    `;
    document.head.appendChild(style);
});