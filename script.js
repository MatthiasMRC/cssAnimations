// Modification navbar scrollY 

const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(window.scrollY > 30){
        nav.classList.add('scroll');
    }else{
        nav.classList.remove('scroll');
    }
});

// Typing animation script
var typed = new Typed(".typing", {
    strings:["Developper.","Freelancer.","Autodidacte."],
    typeSpeed:30,
    backSpeed:60,
    loop:true,
});

