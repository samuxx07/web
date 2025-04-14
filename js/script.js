document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Form validation for PayPal form
    const payForm = document.querySelector('.pay-form');
    if (payForm) {
        payForm.addEventListener('submit', function(e) {
            const planSelect = document.getElementById('pay-plan');
            const amountInput = document.getElementById('pay-amount');
            
            if (planSelect.value === '') {
                e.preventDefault();
                alert('Por favor selecciona un plan');
                planSelect.focus();
                return false;
            }
            
            if (amountInput.value === '' || amountInput.value <= 0) {
                e.preventDefault();
                alert('Por favor ingresa un monto válido');
                amountInput.focus();
                return false;
            }
            
            // If everything is OK, the form will submit to PayPal
        });
    }
    
    // Auto-fill amount based on selected plan
    const planSelect = document.getElementById('pay-plan');
    const amountInput = document.getElementById('pay-amount');
    
    if (planSelect && amountInput) {
        planSelect.addEventListener('change', function() {
            switch(this.value) {
                case 'Plan Mensual - StroxCord':
                    amountInput.value = '20.00';
                    break;
                case 'Plan Trimestral - StroxCord':
                    amountInput.value = '50.00';
                    break;
                case 'Plan Anual - StroxCord':
                    amountInput.value = '120.00';
                    break;
                case 'Plan Vitalicio - StroxCord':
                    amountInput.value = '310.00';
                    break;
                default:
                    amountInput.value = '';
            }
        });
    }
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.info-card, .pricing-card, .pay-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    window.addEventListener('load', function() {
        const elements = document.querySelectorAll('.info-card, .pricing-card, .pay-card');
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s