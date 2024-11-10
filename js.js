const cursor = document.getElementById("cursor")
const thatsvg = document.getElementById("blackDiv")

const OnAnimation = () => {
    if(window.scrollY > 500){
        cursor.classList.add("cursorsAnim")
        thatsvg.classList.add("divDecrease")
        window.removeEventListener('scroll', OnAnimation);
    }
}
window.addEventListener('scroll',OnAnimation);