const button = document.querySelector('#slide');
const info = document.querySelector('#slide').parentElement;

let clicked = false;

const slideFunc = () => {
    if (clicked == false) {
        info.classList.add("slide-animation");
        clicked = true
        console.log("clicked")
    }
    else {
        info.classList.remove("slide-animation");
        clicked = false;
    }
}

button.addEventListener('click', slideFunc);