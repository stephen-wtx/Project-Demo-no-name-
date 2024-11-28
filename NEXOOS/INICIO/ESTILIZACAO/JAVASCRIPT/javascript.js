function handleKeyPress(event) {
    if (event.key === 'Enter') {
        search();
    }
}

function search() {
    const query = document.getElementById('search-field').value;
    if (query) {
        alert('Você pesquisou por: ' + query);
    } else {
        alert('Por favor, insira um termo de pesquisa.');
    }
}

function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown .dropdown-content');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

const hamMenu = document.querySelector('.ham-menu');
        
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})