//VARIABILI
let statoMenu = 'chiuso';

const burger = document.querySelector('.burger');

let statoMenuMobile = 'chiuso';

const burgerMobile = document.querySelector('.burger-mobile');



//EVENT LISTENER 

burger.addEventListener("click", ()=>{ //APERTURA E CHIUSURA NAVBAR

    const menu = document.querySelector('.menu')

    if(statoMenu == 'chiuso'){

        burger.children[0].className = 'fa-solid fa-circle-xmark';
        menu.classList.toggle('open-menu');
        statoMenu = 'aperto';
    }
    else{

        burger.children[0].className = 'fa-solid fa-burger';
        menu.classList.remove('open-menu');
        statoMenu = 'chiuso';

    }

})

burgerMobile.addEventListener("click", ()=>{ //APERTURA E CHIUSURA NAVBAR MOBILE

    const menu = document.querySelector('.menu-mobile')

    if(statoMenuMobile == 'chiuso'){

        burgerMobile.children[0].className = 'fa-solid fa-circle-xmark';
        menu.classList.toggle('open-menu-mobile');
        statoMenuMobile = 'aperto';
    }
    else{
        
        burgerMobile.children[0].className = 'fa-solid fa-burger';
        menu.classList.remove('open-menu-mobile');
        statoMenuMobile = 'chiuso';
    }

})

window.addEventListener('scroll', ()=>{ //ANIMAZIONE PER ENTRATA TESTO SU SCROLL - INTRO TEXT
  
    let introTxt = document.querySelector('.intro-text');  //intro text
    let conentPosition = introTxt.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
  
  
    if(conentPosition < screenPosition){
  
      introTxt.classList.add('animate__animated', 'animate__fadeInTopRight');
  
    }
    else{
  
      introTxt.classList.remove('animate__animated', 'animate__fadeInTopRight');
  
    }
  
  });
