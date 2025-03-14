/**
 * Emergency debugging script for categories section
 * Add this to your page to diagnose why categories aren't showing
 */
document.addEventListener('DOMContentLoaded', function() {
    // Check if elements exist
    const categoriesSection = document.querySelector('.fullscreen-categories');
    const categorySlices = document.querySelectorAll('.category-slice');
    const header = document.querySelector('.categories-header');
    
    console.log('-------- CATEGORIES DEBUGGING --------');
    console.log('Categories section exists:', !!categoriesSection);
    console.log('Number of category slices:', categorySlices.length);
    console.log('Header exists:', !!header);
    
    if (categoriesSection) {
        // Log computed styles
        const styles = window.getComputedStyle(categoriesSection);
        console.log('Categories container computed styles:');
        console.log('- Display:', styles.display);
        console.log('- Height:', styles.height);
        console.log('- Visibility:', styles.visibility);
        console.log('- Opacity:', styles.opacity);
        console.log('- Position:', styles.position);
        console.log('- Z-index:', styles.zIndex);
        
        // Check if it has dimensions
        const rect = categoriesSection.getBoundingClientRect();
        console.log('Categories container dimensions:');
        console.log('- Width:', rect.width);
        console.log('- Height:', rect.height);
        console.log('- Top position:', rect.top);
        console.log('- Bottom position:', rect.bottom);
        
        // Check if it's in the viewport
        const isInViewport = 
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        
        console.log('Is within viewport:', isInViewport);
        
        // Apply emergency styling
        categoriesSection.style.display = 'block';
        categoriesSection.style.height = '600px';
        categoriesSection.style.border = '5px solid red';
        categoriesSection.style.backgroundColor = 'rgba(255,0,0,0.1)';
        categoriesSection.style.position = 'relative';
        categoriesSection.style.zIndex = '9999';
        categoriesSection.style.opacity = '1';
        categoriesSection.style.visibility = 'visible';
        
        console.log('Emergency styling applied to container');
        
        // Create a debug message
        const debugMsg = document.createElement('div');
        debugMsg.style.position = 'absolute';
        debugMsg.style.top = '0';
        debugMsg.style.left = '0';
        debugMsg.style.width = '100%';
        debugMsg.style.padding = '10px';
        debugMsg.style.backgroundColor = 'red';
        debugMsg.style.color = 'white';
        debugMsg.style.textAlign = 'center';
        debugMsg.style.zIndex = '10000';
        debugMsg.innerHTML = 'CATEGORIES DEBUG: This section should be visible now';
        
        categoriesSection.prepend(debugMsg);
    } else {
        console.error('Categories section not found in the DOM!');
        
        // Find where it might be in the HTML
        const html = document.documentElement.innerHTML;
        const hasCategoriesHTML = html.includes('fullscreen-categories');
        console.log('HTML contains fullscreen-categories class:', hasCategoriesHTML);
        
        // Create a placeholder to show where it should be
        const placeholder = document.createElement('div');
        placeholder.style.width = '100%';
        placeholder.style.height = '200px';
        placeholder.style.backgroundColor = 'red';
        placeholder.style.color = 'white';
        placeholder.style.display = 'flex';
        placeholder.style.alignItems = 'center';
        placeholder.style.justifyContent = 'center';
        placeholder.style.margin = '50px 0';
        placeholder.innerHTML = '<h2>CATEGORIES SECTION MISSING</h2>';
        
        // Find the about section to insert after
        const aboutSection = document.querySelector('.about');
        if (aboutSection) {
            aboutSection.after(placeholder);
            console.log('Created placeholder after about section');
        } else {
            // Add to body if about section not found
            document.body.appendChild(placeholder);
            console.log('Created placeholder at end of body');
        }
    }
    
    // Check individual category slices
    categorySlices.forEach((slice, index) => {
        console.log(`Category slice ${index+1}:`);
        
        // Check image
        const img = slice.querySelector('.slice-image img');
        if (img) {
            console.log(`- Image src: ${img.src}`);
            
            // Check if image actually loaded
            console.log(`- Image complete: ${img.complete}`);
            console.log(`- Image natural dimensions: ${img.naturalWidth}×${img.naturalHeight}`);
            
            // Apply emergency styling to the image
            img.style.opacity = '0.7';
            img.style.border = '2px solid green';
        } else {
            console.error(`- No image found in slice ${index+1}`);
        }
        
        // Apply emergency styling to the slice
        slice.style.float = 'left';
        slice.style.width = '25%';
        slice.style.height = '100%';
        slice.style.position = 'relative';
        slice.style.display = 'block';
        slice.style.border = '3px solid blue';
        slice.style.backgroundColor = 'rgba(0,0,255,0.1)';
        slice.style.opacity = '1';
        slice.style.visibility = 'visible';
        
        // Force the content to be visible
        const content = slice.querySelector('.slice-content');
        if (content) {
            content.style.position = 'absolute';
            content.style.top = '0';
            content.style.left = '0';
            content.style.width = '100%';
            content.style.height = '100%';
            content.style.zIndex = '2';
            content.style.backgroundColor = 'rgba(255,255,0,0.2)';
        }
        
        // Force text to be visible
        const textWrapper = slice.querySelector('.slice-text-wrapper');
        if (textWrapper) {
            textWrapper.style.backgroundColor = 'rgba(0,0,0,0.7)';
            textWrapper.style.color = 'white';
            textWrapper.style.opacity = '1';
            textWrapper.style.visibility = 'visible';
            textWrapper.style.display = 'block';
            textWrapper.style.padding = '15px';
            textWrapper.style.position = 'relative';
            textWrapper.style.top = '50%';
            textWrapper.style.transform = 'translateY(-50%)';
        }
    });
    
    console.log('------------------------------------');
});