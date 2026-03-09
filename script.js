document.addEventListener('DOMContentLoaded', () => {
    // 1. Efeito de rolagem no Header
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    // 2. Lógica do Menu Hambúrguer
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            menuIcon.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Impede o scroll do corpo quando o menu está aberto
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'initial';
        });

        // Fecha o menu ao clicar em qualquer link
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'initial';
            });
        });

        // Fecha o menu se clicar fora dele (na parte escura da tela)
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !menuIcon.contains(e.target)) {
                menuIcon.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'initial';
            }
        });
    }

    // 3. Pausar carrossel ao passar o mouse
    const track = document.querySelector('.testimonial-track');
    if (track) {
        track.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
        track.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
    }

    // 4. Lógica do Formulário WhatsApp
    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            const descricao = document.getElementById('descricao').value;
            const telefoneCliente = "5521982774699"; 
            
            if(nome && descricao) {
                const mensagem = `*Solicitação de Orçamento - Guterres Eng*%0A%0A` +
                                 `*Nome:* ${nome}%0A` +
                                 `*Descrição:* ${descricao}`;
                
                const url = `https://wa.me/${telefoneCliente}?text=${mensagem}`;
                window.open(url, '_blank');
            } else {
                alert("Por favor, preencha todos os campos.");
            }
        });
    }
});
