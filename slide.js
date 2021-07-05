const info = document.querySelector('slide');
let clicked = false;

info.addEventListener('click', slideFunc);

slideFunc = () => {
    if (clicked == false) {
        info.classList.add("slide-animation");
    }
    else {
        info.classList.remove("slide-animation");
        clicked = false;
    }
}