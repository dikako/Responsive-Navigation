const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    const navLink = document.querySelectorAll('.nav-link li');
    

    burger.addEventListener('click', ()=>{
        //togngle nav
        nav.classList.toggle('nav-active');

          //animasi link
        navLink.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //burger animasi
        burger.classList.toggle('toggle');
    })
}

navSlide();