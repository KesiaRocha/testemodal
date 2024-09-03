// Seleciona o botão que abre o modal
const openModalButton = document.getElementById('openModalButton');

// Seleciona o modal
const modal = document.getElementById('modal');

// Seleciona o botão de fechar do modal
const closeModalButton = document.getElementById('closeModalButton');

// Seleciona a skill bars
const skillBars = document.getElementById('skillBars');

// Quando o usuário clica no botão, abre o modal e mostra as skill bars
openModalButton.onclick = function() {
    modal.style.display = 'block';
    skillBars.style.display = 'block'; // Mostra as skill bars
}

// Quando o usuário clica no botão de fechar, fecha o modal e esconde as skill bars
closeModalButton.onclick = function() {
    modal.style.display = 'none';
    skillBars.style.display = 'none'; // Esconde as skill bars
}

// Quando o usuário clica fora do conteúdo do modal, fecha o modal e esconde as skill bars
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        skillBars.style.display = 'none'; // Esconde as skill bars
    }
}
