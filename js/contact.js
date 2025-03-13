/**
 * Contact form validation and submission
 */

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Basic form validation
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (!firstName || !lastName || !email || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Prepare form data
            const formData = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: document.getElementById('phone').value,
                subject: subject,
                serviceType: document.getElementById('service-type').value,
                message: message,
                timestamp: new Date().toISOString()
            };
            
            // For demonstration purposes - in a real implementation, you would send data to the backend
            try {
                // Get API endpoint from environment variable or use default path
                const apiEndpoint = process.env.API_ENDPOINT || '/api';
                
                // If in development mode or testing, just show success message
                if (process.env.NODE_ENV === 'development' || !apiEndpoint.includes('http')) {
                    console.log('Form data:', formData);
                    alert('Thank you for your message! We will get back to you soon.');
                    contactForm.reset();
                    return;
                }
                
                // Send data to API
                const response = await fetch(`${apiEndpoint}/contact`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                
                if (response.ok) {
                    alert('Thank you for your message! We will get back to you soon.');
                    contactForm.reset();
                } else {
                    alert('There was an error submitting the form. Please try again later.');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('There was an error submitting the form. Please try again later.');
            }
        });
    }
});