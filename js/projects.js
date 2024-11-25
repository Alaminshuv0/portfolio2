const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 170){
        navbar.classList.add('bg');
    }
    else{
        navbar.classList.remove('bg');
    }
    console.log(scrollY);
})