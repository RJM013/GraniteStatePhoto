document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const closeBtn = document.getElementById('lightbox-close');
    const downloadBtn = document.getElementById('lightbox-download');
    const counter = document.getElementById('lightbox-counter');
    const lightboxOverlay = document.getElementById('lightbox-overlay');

    let currentPhotoIndex = 0;
    let photoUrls = [];
    let touchStartX = 0;
    let touchEndX = 0;

    // Lightbox functionality
    function openLightbox() {
        lightboxImg.src = photoUrls[currentPhotoIndex];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        updateNavigationButtons();
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    function showNextPhoto() {
        if (currentPhotoIndex < photoUrls.length - 1) {
            currentPhotoIndex++;
            lightboxImg.src = photoUrls[currentPhotoIndex];
            updateNavigationButtons();
        }
    }

    function showPrevPhoto() {
        if (currentPhotoIndex > 0) {
            currentPhotoIndex--;
            lightboxImg.src = photoUrls[currentPhotoIndex];
            updateNavigationButtons();
        }
    }

    function updateNavigationButtons() {
        prevBtn.style.opacity = currentPhotoIndex > 0 ? '1' : '0.5';
        nextBtn.style.opacity = currentPhotoIndex < photoUrls.length - 1 ? '1' : '0.5';
        // Update counter
        counter.textContent = `${currentPhotoIndex + 1} / ${photoUrls.length}`;
    }

    // Event listeners for lightbox navigation
    prevBtn.addEventListener('click', showPrevPhoto);
    nextBtn.addEventListener('click', showNextPhoto);
    closeBtn.addEventListener('click', closeLightbox);

    // Download button functionality
    downloadBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent lightbox from closing
        const currentImageUrl = photoUrls[currentPhotoIndex];
        const fileName = currentImageUrl.split('/').pop();
        
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = currentImageUrl;
        link.download = fileName;
        link.target = '_blank';
        
        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'ArrowLeft':
                showPrevPhoto();
                break;
            case 'ArrowRight':
                showNextPhoto();
                break;
            case 'Escape':
                closeLightbox();
                break;
        }
    });

    // Touch swipe functionality
    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance for a swipe
        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                showPrevPhoto(); // Swipe right
            } else {
                showNextPhoto(); // Swipe left
            }
        }
    }

    // Update the click handlers
    lightbox.addEventListener('click', (e) => {
        // If the click is directly on the lightbox (background)
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close lightbox when clicking the overlay
    lightboxOverlay.addEventListener('click', closeLightbox);

    // Export functions for use in gallery.html
    window.lightbox = {
        open: openLightbox,
        close: closeLightbox,
        setPhotos: (urls) => {
            photoUrls = urls;
        },
        setCurrentIndex: (index) => {
            currentPhotoIndex = index;
        }
    };
}); 