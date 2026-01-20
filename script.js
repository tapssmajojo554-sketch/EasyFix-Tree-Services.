/* ============================================
   EasyFix Tree Services - JavaScript
   ============================================ */

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Scroll to Contact
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// FAQ Toggle
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle current FAQ
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Form Submission Handler
function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    // Create WhatsApp message
    const whatsappMessage = `Hello EasyFix Tree Services!

I would like to inquire about your services.

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Message: ${message}`;
    
    // Send via WhatsApp
    const whatsappLink = `https://wa.me/27729918350?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank');
    
    // Reset form
    event.target.reset();
    
    // Show confirmation
    alert('Your message has been sent to WhatsApp. We will get back to you soon!');
}

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all service cards, testimonial cards, and portfolio items
document.querySelectorAll('.service-card, .testimonial-card, .portfolio-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Active Navigation Link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`a[href="#${sectionId}"]`);
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            if (navLink) {
                document.querySelectorAll('.nav-menu a').forEach(link => {
                    link.style.color = '';
                });
                navLink.style.color = 'var(--primary-green)';
                navLink.style.fontWeight = '700';
            }
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    } else {
        // Scrolling up
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('EasyFix Tree Services website loaded successfully!');
    
    // Add animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 0.8s ease';
    }
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Press 'C' to go to contact
    if (e.key === 'c' || e.key === 'C') {
        scrollToContact();
    }
    // Press 'S' to go to services
    if (e.key === 's' || e.key === 'S') {
        scrollToSection('services');
    }
    // Press 'W' to open WhatsApp
    if (e.key === 'w' || e.key === 'W') {
        window.open('https://wa.me/27729918350?text=Hi%20EasyFix%20Tree%20Services%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20tree%20services.', '_blank');
    }
});

// Performance monitoring
window.addEventListener('load', () => {
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time: ' + pageLoadTime + 'ms');
    }
});
