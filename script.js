const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 1;

let int = setInterval(blurring, 120);

function blurring() {
    load ++
    if(load > 99) {
        clearInterval(int);
    }
    loadingText.innerText = `${load}%`
    loadingText.style.opacity = (100-load)/30;
    bg.style.filter = `blur(${(100-load)/10}px)`
}