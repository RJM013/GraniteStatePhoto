// Add this to your existing dividers.js file
document.addEventListener('DOMContentLoaded', function() {
    
    // Function specifically for handling the mountains in the about section
    function adjustMountainBackground() {
        const mountainBackground = document.querySelector('.mountain-background');
        const mountainImage = mountainBackground ? mountainBackground.querySelector('.mountain-image') : null;
        
        if (!mountainBackground || !mountainImage) return;
        
        const aboutSection = document.querySelector('.about');
        if (!aboutSection) return;
        
        const viewportWidth = window.innerWidth;
        
        // Determine the scale based on viewport width
        let scale = 0.75; // Default scale for large screens
        let opacity = 0.6; // Default opacity
        
        if (viewportWidth < 992) {
            scale = 0.45; // Medium screens
            opacity = 0.65; // Slight opacity adjustment
        } else if (viewportWidth < 576) {
            scale = 0.25; // Small screens
            opacity = 0.7; // More visible on small screens
        }
        
        // Apply transformations
        mountainImage.style.transform = `translateX(-50%) scale(${scale})`;
        mountainImage.style.opacity = opacity;
        
        // Make sure the background area is large enough
        const aboutHeight = aboutSection.offsetHeight;
        mountainBackground.style.height = `${aboutHeight}px`;
        
        // Fix any Safari rendering issues by forcing a repaint
        setTimeout(() => {
            mountainBackground.style.transform = 'translateZ(0)';
        }, 100);
    }
    
    // Run adjustment on page load
    adjustMountainBackground();
    
    // Adjust on window resize
    window.addEventListener('resize', adjustMountainBackground);
    
    // Run again after all images have loaded
    window.addEventListener('load', adjustMountainBackground);
});