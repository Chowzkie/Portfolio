

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            // Prevents the default browser redirect to Formspree
            e.preventDefault();
            
            // UI State: Loading
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';

            const formData = new FormData(contactForm);

            try {
                // Sends data to your Formspree endpoint: mjgknkgr
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // SUCCESS: Automatically clear all characters from input fields
                    contactForm.reset();
                    
                    // Visual Feedback: Success
                    submitBtn.innerHTML = 'Sent Successfully! <i class="bi bi-check-lg"></i>';
                    submitBtn.classList.replace('btn-custom', 'btn-success');

                    // Reset button back to original state after 3 seconds
                    setTimeout(() => {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalText;
                        submitBtn.classList.replace('btn-success', 'btn-custom');
                    }, 3000);
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                // Error State
                submitBtn.innerHTML = 'Error. Try again.';
                submitBtn.disabled = false;
            }
        });
    }
});