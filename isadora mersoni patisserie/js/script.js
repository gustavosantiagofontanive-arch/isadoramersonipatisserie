document.addEventListener('DOMContentLoaded', () => {
    
    // --- Menu Mobile Toggle ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenu.classList.toggle('is-active');
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenu.classList.remove('is-active');
        });
    });

    // --- Mudança de Navbar ao rolar (Scroll Effect) ---
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });

    // --- Simulação de Envio de Formulário ---
    const form = document.querySelector('.order-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Captura os dados (apenas demonstração visual)
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Enviando...';
        btn.style.opacity = '0.7';

        setTimeout(() => {
            alert('Obrigado! Sua solicitação de orçamento foi enviada. Entraremos em contato em breve pelo WhatsApp.');
            form.reset();
            btn.innerText = originalText;
            btn.style.opacity = '1';
        }, 1500);
    });
});