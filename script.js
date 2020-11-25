
const nav = document.querySelector('.navbar');
const btnanimation = document.querySelector('.btnAnimations');

//scroll smooth to
btnanimation.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});



// Modification navbar scrollY 
window.addEventListener('scroll', () => {
    if(window.scrollY > 30){
        nav.classList.add('scroll');
    }else{
        nav.classList.remove('scroll');
    }
});





