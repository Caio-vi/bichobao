 const indexfotos = [
    'imagens/Avelar Fotografia-1622.jpg',
    'imagens/Avelar Fotografia-1795.jpg',
    'imagens/Avelar Fotografia-1817.jpg'
];

const sobrefotos = [
    'imagens/Avelar Fotografia-1622.jpg',
    'imagens/Avelar Fotografia-1795.jpg', 
    'imagens/Avelar Fotografia-1817.jpg',
    'imagens/Avelar Fotografia-3652.jpg',
    'imagens/Avelar Fotografia-3660.jpg',
    'imagens/Avelar Fotografia-3673 copy.jpg',
    'imagens/Avelar Fotografia-3673.jpg',
    'imagens/Avelar Fotografia-3685.jpg',
    'imagens/Estúdio Avellar-7378.jpg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.20 (1).jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.20 (2).jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.20.jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.21 (1).jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.21.jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.22 (1).jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.22.jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.23 (1).jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.23 (2).jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.23.jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.24 (1).jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.24.jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.25 (1).jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.25 (2).jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.25.jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.26.jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.42.jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.43.jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.45.jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.46.jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.47.jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.48.jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.49.jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.50.jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.51.jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.52.jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.53 (1).jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.53 (2).jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.53.jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.55 (1).jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.55.jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.56.jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.57.jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.58 (1).jpeg',
    'imagens/WhatsApp Image 2025-10-16 at 19.23.58.jpeg',
    'imagens/WhatsApp Image 2025-10-25 at 18.41.40 (1).jpeg',
    'imagens/WhatsApp Image 2025-10-25 at 18.41.40 (2).jpeg',
    'imagens/WhatsApp Image 2025-10-25 at 18.41.40 (3).jpeg',
    'imagens/WhatsApp Image 2025-10-25 at 18.41.40.jpeg',
    'imagens/WhatsApp Image 2025-10-25 at 18.41.41 (1).jpeg',
    'imagens/WhatsApp Image 2025-10-25 at 18.41.41 (2).jpeg',
    'imagens/WhatsApp Image 2025-10-25 at 18.41.41 (3).jpeg',
    'imagens/WhatsApp Image 2025-10-25 at 18.41.41 (4).jpeg',
    'imagens/WhatsApp Image 2025-10-25 at 18.41.41.jpeg',
    'imagens/WhatsApp Image 2025-10-25 at 18.42.12 (1).jpeg',
    'imagens/WhatsApp Image 2025-10-25 at 18.42.12 (2).jpeg',
    'imagens/WhatsApp Image 2025-10-25 at 18.42.12.jpeg',
    'imagens/WhatsApp Image 2025-10-25 at 18.42.13 (1).jpeg',
    'imagens/WhatsApp Image 2025-10-25 at 18.42.13.jpeg'
];

let indiceAtual = 0;

function proximaimagem(){
    const slides = document.getElementsByClassName("slide");

    indiceAtual = (indiceAtual + 1) % sobrefotos.length;

    for(let i = 0; i < slides.length; i++){
        slides[i].style.opacity = '0';
        slides[i].style.transform = 'translateX(40px)';

        setTimeout(() => {
            slides[i].src = sobrefotos[indiceAtual];
            slides[i].style.opacity = '1';
            slides[i].style.transform = 'translateX(0px)';
        }, 1000);
    }
}

setInterval(proximaimagem, 3000);

window.addEventListener('load', function() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].src = sobrefotos[0];
    }
});

function agendar() {
  window.location.href = "agendar.html";
}

function agendarWhatsApp(servico) {
  const mensagens = {
    consulta: "Olá! Gostaria de agendar uma consulta geral.",
    cirurgia: "Olá! Gostaria de um orçamento para cirurgia.",
    oncologia: "Olá! Gostaria de agendar consulta de oncologia.",
    dermatologia: "Olá! Gostaria de agendar consulta de dermatologia.",
    silvestres: "Olá! Gostaria de agendar consulta para animal silvestre.",
    vacinacao: "Olá! Gostaria de informações sobre vacinação.",
    ultra: "Olá! Gostaria de saber mais sobre o exame de ultrassonografia.",
    radiografia: "Olá! Gostaria de saber mais sobre o exame de radiografia.",
    hemograma: "Olá! Gostaria de saber mais sobre o exame de hemograma.",
    "urina-fezes": "Olá! Gostaria de saber mais sobre exames de urina e fezes.",
  };

  const mensagem = mensagens[servico];
  const numero = "5535998181384";

  const url = `https://wa.me/${"5535998181384"}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}

function sobre() {
  window.location.href = "sobre.html";
}

function contatos() {
  window.location.href = "contato.html";
}
