const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

yesButton.addEventListener('click', () => {
    const gif = document.getElementById('gif');
    gif.hidden = false;
});

noButton.addEventListener('mouseover', () => {
    const randomX = Math.floor(Math.random() * window.innerWidth - 100);
    const randomY = Math.floor(Math.random() * window.innerHeight - 100);
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});