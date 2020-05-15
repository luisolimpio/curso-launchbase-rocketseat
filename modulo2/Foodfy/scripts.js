const modalOverlay = document.querySelector('.modal-overlay')
const modalContent = document.querySelector('.modal-content')
const dishes = document.querySelectorAll('.dish')

for(let dish of dishes) {
    dish.addEventListener("click", function() {
        const dish_id = dish.getAttribute("id")
        const dish_h1 = dish.querySelector("h1")
        const dish_h2 = dish.querySelector("h2")
        modalOverlay.classList.add('active')
        modalContent.querySelector("img").src = `/assets/${dish_id}.png`
        modalContent.querySelector("h1").replaceWith(dish_h1)
        modalContent.querySelector("h2").replaceWith(dish_h2)
    })
}

modalContent.querySelector("a").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalContent.querySelector("img").src = ""
})