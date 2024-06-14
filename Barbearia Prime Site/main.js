document.addEventListener('DOMContentLoaded', function() {
    const avaliacaoItem = document.querySelector('.menu-desktop ul li:nth-child(4)'); // seleciona o item de avaliação

    avaliacaoItem.addEventListener('click', function() {
        const popupOverlay = document.getElementById('popup-overlay');
        popupOverlay.style.display = 'flex'; // exibe o pop-up
    });

    // Função para fechar o pop-up
    const closeBtn = document.getElementById('close-btn');
    closeBtn.addEventListener('click', function() {
        const popupOverlay = document.getElementById('popup-overlay');
        popupOverlay.style.display = 'none'; // fecha o pop-up
    });
});
