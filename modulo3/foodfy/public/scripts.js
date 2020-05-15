const dishes = document.querySelectorAll('.dish')
const icons = document.querySelectorAll('i')

for(let dish of dishes) {
    dish.addEventListener("click", function() {
    dish_id = dish.getAttribute("id")
    window.location.href = `/recipe/${dish_id}`
    })
}

for(let icon of icons) {
    icon.addEventListener("click", function() {
        const icon_id = icon.getAttribute("id")
        const element = document.querySelector(`.content-${icon_id}`)
        const text = element

        if(element.classList.contains("active")) {
            element.classList.remove("active")
            icon.innerHTML = "visibility"
        }
        else {
            element.classList.add("active")
            icon.innerHTML = "visibility_off"
        }
    })
}