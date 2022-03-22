//VARIABILI
let statoMenu = 'chiuso';

const burger = document.querySelector('.burger');

let statoMenuMobile = 'chiuso';

const burgerMobile = document.querySelector('.burger-mobile');

let arrow = document.querySelector('.arrow');


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

arrow.addEventListener('click', ()=>{ //FRECCIA IN HERO CHE PORTA LEGGERMENTE GIU
    
    let rootElement = document.documentElement

    rootElement.scrollTo({
        top: 400,
        behavior: "smooth"
    })
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

window.addEventListener('scroll', ()=>{ //ANIMAZIONE PER ENTRATA TESTO SU SCROLL - SECTION 2 TEXT
    //sezione 2 testo
    let txt = document.querySelector('.section2-text');
    let conentPosition = txt.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
  
  
    if(conentPosition < screenPosition){
  
      txt.classList.add('active');
      txt.classList.add('animate__animated', 'animate__fadeInTopLeft');
  
    }
    else{
      txt.classList.remove('animate__animated', 'animate__fadeInTopLeft');
      txt.classList.remove('active');
    }
  
});

