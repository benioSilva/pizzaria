const um = document.querySelector('.um');
const nm  = document.querySelector('.nm');
um.addEventListener('click', () => {
        um.classList.toggle('ativo');
        nm.classList.toggle('ativo');
    })
