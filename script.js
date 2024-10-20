// Seleciona todas as imagens da galeria
const images = document.querySelectorAll('.gallery img');

// Seleciona o modal e os elementos dentro dele
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0; // Índice atual da imagem

// Função para exibir o modal com a imagem clicada
function showModal(index) {
    currentIndex = index;
    modalImg.src = images[currentIndex].src; // Define a imagem no modal
    modal.style.display = 'flex'; // Exibe o modal
}

// Função para exibir a próxima imagem
function showNext() {
    currentIndex = (currentIndex + 1) % images.length; // Vai para a próxima imagem ou volta ao início
    showModal(currentIndex);
}

// Função para exibir a imagem anterior
function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Volta para a imagem anterior ou vai para a última
    showModal(currentIndex);
}

// Adiciona evento de clique para cada imagem da galeria
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        showModal(index); // Exibe o modal com a imagem clicada
    });
});

// Fecha o modal ao clicar fora da imagem
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none'; // Oculta o modal
    }
});

// Eventos de clique para as setas de navegação
nextBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que o clique feche o modal
    showNext();
});

prevBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que o clique feche o modal
    showPrev();
});