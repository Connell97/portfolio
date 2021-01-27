const hoverElement = document.getElementById('liverpool');
const bgElement = document.getElementById('greeting-bg');

hoverElement.addEventListener('mouseover', hovered);
hoverElement.addEventListener('mouseout', notHovered);

function hovered() {
    bgElement.classList.add('red-home-bg');
}

function notHovered() {
    bgElement.classList.remove('red-home-bg');
}