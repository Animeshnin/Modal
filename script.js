const modalBtn = document.querySelector('#open-modal-btn')
const closeBtn = document.querySelector('#close-my-modal-btn')
const modal = document.querySelector('.modal')

modalBtn.addEventListener('click', () => {
    modal.classList.add('open')
    console.log('asd')
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('open')
})

window.addEventListener('keydown', (e) => {
    if(e.key == "Escape"){
     modal.classList.remove('open')
    }
})

