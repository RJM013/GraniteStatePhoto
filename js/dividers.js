// dividers.js - Handles SVG insertion and dynamic adjustments for dividers

document.addEventListener('DOMContentLoaded', function() {
  // Wave Divider
  const waveElements = document.querySelectorAll('.divider-wave');
  waveElements.forEach(element => {
      element.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
      </svg>
      `;
  });
  
  // Triangle Divider
  const triangleElements = document.querySelectorAll('.divider-triangle');
  triangleElements.forEach(element => {
      element.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"></path>
      </svg>
      `;
  });
  
  // Curve Divider
  const curveElements = document.querySelectorAll('.divider-curve');
  curveElements.forEach(element => {
      element.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"></path>
      </svg>
      `;
  });
  
  // Slant Divider
  const slantElements = document.querySelectorAll('.divider-slant');
  slantElements.forEach(element => {
      element.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 892.25 114.72 1200 0z"></path>
      </svg>
      `;
  });
  
  // Function to adjust mountain divider size - general function used for mountains not in the about section
  function adjustMountainDivider() {
      const mountainDividers = document.querySelectorAll('.divider-mountains:not(.about-mountains)');
      
      mountainDividers.forEach(mountainDivider => {
          const mountainImage = mountainDivider.querySelector('.mountain-image');
          if (!mountainImage) return;
          
          const viewportWidth = window.innerWidth;
          
          // Calculate ideal height based on viewport
          let idealHeight = Math.min(200, Math.max(80, viewportWidth * 0.08 + 80));
          
          // Apply dynamic height to the container
          mountainDivider.style.height = `${idealHeight}px`;
          
          // Calculate scale factor based on viewport width
          let scaleFactor = 1; // Default scale
          
          if (viewportWidth > 1400) {
              scaleFactor = 1.2; // Scale up on very large screens
          } else if (viewportWidth > 992) {
              scaleFactor = 1.1; // Slightly larger on large screens
          } else if (viewportWidth < 576) {
              scaleFactor = 0.8; // Scale down on very small screens
          }
          
          // Calculate visual center offset for different viewport widths
          let offsetPercentage = 0; // Default no offset
          
          // Different offsets for different viewport sizes
          if (viewportWidth > 1200) {
              offsetPercentage = -5; // Move 5% to the left for large screens
          } else if (viewportWidth > 768) {
              offsetPercentage = -2; // Move 2% to the left for medium screens
          } else {
              offsetPercentage = 0; // No offset for small screens
          }
          
          // Apply transform with both scaling and offset
          mountainImage.style.transform = `translateX(calc(-50% + ${offsetPercentage}%)) scale(${scaleFactor})`;
      });
  }
  
  // Function specifically for handling the mountains in the about section
  function adjustAboutMountains() {
      const aboutMountains = document.querySelector('.about-mountains');
      const mountainImage = aboutMountains ? aboutMountains.querySelector('.mountain-image') : null;
      
      if (!aboutMountains || !mountainImage) return;
      
      const aboutSection = document.querySelector('.about-section');
      if (!aboutSection) return;
      
      const viewportWidth = window.innerWidth;
      const aboutContentWidth = document.querySelector('.about-content')?.offsetWidth || 0;
      
      // Set the mountain container to be full width of the about section
      aboutMountains.style.width = '100%';
      
      // Determine the scale based on viewport width
      let scale = 1.5; // Default scale for large screens
      
      if (viewportWidth < 992) {
          scale = 1.2; // Medium screens
      } else if (viewportWidth < 576) {
          scale = 1.0; // Small screens
      }
      
      // Ensure the mountain image is visible and positioned correctly
      mountainImage.style.width = '100%';
      mountainImage.style.height = 'auto';
      mountainImage.style.left = '50%';
      mountainImage.style.bottom = '0';
      mountainImage.style.transform = `translateX(-50%) scale(${scale})`;
      
      // Make sure the mountains can be seen
      aboutMountains.style.overflow = 'visible';
      aboutSection.style.overflow = 'visible';
      
      // Fix any Safari rendering issues by forcing a repaint
      setTimeout(() => {
          aboutMountains.style.transform = 'translateZ(0)';
      }, 100);
  }
  
  // Run adjustments once on page load
  adjustMountainDivider();
  adjustAboutMountains();
  
  // Adjust on window resize
  window.addEventListener('resize', () => {
      adjustMountainDivider();
      adjustAboutMountains();
  });
});