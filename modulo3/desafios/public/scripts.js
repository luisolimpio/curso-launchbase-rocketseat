const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${videoId}`
    })
}

document.querySelector('.maximize-modal').addEventListener("click", function(){
    modal.classList.contains('maximize') ? modal.classList.remove('maximize') : modal.classList.add('maximize')
})

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
    modal.classList.remove('maximize')
})
