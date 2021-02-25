const nav = document.querySelector('.nav');
const backTop = document.querySelector('#top');
let height = backTop.clientHeight;

window.addEventListener('scroll', () => {
    if(window.scrollY > height){
        nav.classList.add('scroll');
    } else{
        nav.classList.remove('scroll');
    }
})