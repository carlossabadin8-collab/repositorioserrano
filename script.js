// Navegación entre páginas
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

// Evento para cambiar de página
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const pageName = link.getAttribute('data-page');
        
        // Remover clase active de todos los links
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Ocultar todas las páginas
        pages.forEach(page => page.classList.remove('active'));
        
        // Mostrar la página seleccionada
        document.getElementById(pageName).classList.add('active');
        
        // Cerrar menú móvil si está abierto
        navLinksContainer.classList.remove('active');
        hamburger.classList.remove('active');
        
        // Scroll al inicio
        window.scrollTo(0, 0);
    });
});

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Función para scroll a contacto
function scrollToContacto() {
    const contactLink = document.querySelector('[data-page="contacto"]');
    contactLink.click();
}

// Manejo del formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Obtener valores del formulario
        const nombre = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const telefono = contactForm.querySelector('input[type="tel"]').value;
        const mensaje = contactForm.querySelector('textarea').value;
        
        // Aquí puedes integrar un servicio de email o API
        // Por ahora mostramos un mensaje de éxito
        
        // Crear mensaje de WhatsApp para que el usuario copie
        const whatsappMessage = `Hola, soy ${nombre}. Mi email es ${email}, teléfono ${telefono}. Mi mensaje: ${mensaje}`;
        const whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Mostrar alerta de éxito
        alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
        
        // Limpiar formulario
        contactForm.reset();
    });
}

// Efecto de fade-in para elementos al hacer scroll
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

// Aplicar observer a elementos
document.querySelectorAll('.feature-card, .service-item, .review-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
    observer.observe(element);
});

// Cerrar menú móvil al hacer click en la página
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navLinksContainer.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Validación básica del formulario
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                input.style.borderColor = '#ff6b6b';
            } else {
                input.style.borderColor = '#FFD700';
            }
        } else if (input.type === 'tel') {
            if (input.value.length < 9) {
                input.style.borderColor = '#ff6b6b';
            } else {
                input.style.borderColor = '#FFD700';
            }
        }
    });
});

// Smooth scroll mejorado
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
