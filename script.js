// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Hero buttons functionality
    const learnMoreBtn = document.getElementById('learn-more-btn');
    const galleryBtn = document.getElementById('gallery-btn');
    
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            const historiaSection = document.getElementById('historia');
            
            window.scrollTo({
                top: historiaSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    }
    
    if (galleryBtn) {
        galleryBtn.addEventListener('click', function() {
            const galeriaSection = document.getElementById('galeria');
            
            window.scrollTo({
                top: galeriaSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    }
    
    // Scroll indicator functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const historiaSection = document.getElementById('historia');
            
            window.scrollTo({
                top: historiaSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    }
    
    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Proszę wypełnić wszystkie pola formularza.', 'error');
                return;
            }
            
            // Simulate form submission (in a real application, you would send data to a server)
            showNotification('Dziękujemy za wiadomość! Odpowiemy najszybciej jak to możliwe.', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Animated appearance of plane cards on scroll
    const planeCards = document.querySelectorAll('.plane-card');
    
    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Add animation class when scrolling
    function handleScroll() {
        planeCards.forEach(card => {
            if (isInViewport(card) && !card.classList.contains('animated')) {
                card.classList.add('animated');
            }
        });
    }
    
    // Initial check and add scroll event listener
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    // Notification function
    function showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Add to DOM
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Add CSS for notifications
    const notificationStyles = document.createElement('style');
    notificationStyles.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 5px;
            color: white;
            font-weight: 500;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.3s, transform 0.3s;
            z-index: 1000;
        }
        
        .notification.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        .notification.success {
            background-color: #28a745;
        }
        
        .notification.error {
            background-color: #dc3545;
        }
        
        .plane-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.5s, transform 0.5s;
        }
        
        .plane-card.animated {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(notificationStyles);
});
