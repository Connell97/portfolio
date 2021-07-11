const buttons = document.querySelectorAll('.slide');
let active = false;

const toggleSlide = (event) => {
    let button = event.target;
    if (button.parentElement.classList.contains("slide-animation") == true) {
        button.parentElement.classList.toggle("slide-animation");
        button.classList.toggle("arrow-rotate");
    }
    else {
        button.parentElement.classList.toggle("slide-animation");
        button.classList.toggle("arrow-rotate");
    }
}

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", toggleSlide);
}