document.addEventListener('DOMContentLoaded', () => {
    // 1. Efeito de rolagem no Header
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    // 2. Lógica do Menu Hambúrguer (Mobile)
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            menuIcon.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'initial';
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'initial';
            });
        });

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

    // 4. Lógica do Formulário via E-mail
    const emailForm = document.getElementById('emailForm');
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const descricao = document.getElementById('descricao').value;
            const emailDestino = "eletronicaguterres@guterres.com.br"; 
            
            if(nome && descricao) {
                const assunto = encodeURIComponent(`Solicitação de Orçamento - ${nome}`);
                const corpo = encodeURIComponent(
                    `Olá, Equipe Guterres Eng.\n\n` +
                    `Nova solicitação de orçamento recebida pelo site:\n\n` +
                    `Nome/Empresa: ${nome}\n` +
                    `Descrição da Necessidade: ${descricao}\n\n` +
                    `---\n` +
                    `Enviado via Guterres Engenharia Eletrônica.`
                );
                
                const mailtoUrl = `mailto:${emailDestino}?subject=${assunto}&body=${corpo}`;
                
                // Técnica de fallback: cria um link invisível e simula o clique
                // Isso funciona melhor que window.location.href em alguns navegadores
                const link = document.createElement('a');
                link.href = mailtoUrl;
                link.click();
            } else {
                alert("Por favor, preencha todos os campos.");
            }
        });
    }
});
