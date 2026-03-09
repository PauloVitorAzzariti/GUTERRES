// Efeito de rolagem no Header
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('scrolled', window.scrollY > 100);
});

// Pausar carrossel ao passar o mouse
const track = document.querySelector('.testimonial-track');
track.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
track.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');

// Navegação suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Lógica do Formulário WhatsApp
const whatsappForm = document.getElementById('whatsappForm');

if(whatsappForm) {
    whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Dados do formulário
        const nome = document.getElementById('nome').value;
        const descricao = document.getElementById('descricao').value;
        
        // Número da cliente (apenas números)
        const telefoneCliente = "5521982774699"; 
        
        // Formatação da mensagem
        const mensagem = `*Solicitação de Orçamento - Guterres Eng*%0A%0A` +
                         `*Nome:* ${nome}%0A` +
                         `*Descrição:* ${descricao}`;
        
        // URL do WhatsApp
        const url = `https://wa.me/${telefoneCliente}?text=${mensagem}`;
        
        // Abre em nova aba
        window.open(url, '_blank');
    });
}