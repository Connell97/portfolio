const buttons = document.querySelectorAll('.slide');
let active = false;

const delay = (duration) => new Promise((resolve) => setTimeout(resolve, duration));

const toggleSlide = async (event) => {
    let button = event.target.parentElement;
    if (button.classList.contains("slide-animation") == true) {
        button.classList.toggle("slide-animation");
        await delay(1000);
        event.target.src="images/icons/outline_chevron_right_black_48dp.png";
    }
    else {
        button.classList.toggle("slide-animation");
        await delay(300);
        event.target.src="images/icons/outline_chevron_left_black_48dp.png";
    }
}

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("mouseover", toggleSlide);
}