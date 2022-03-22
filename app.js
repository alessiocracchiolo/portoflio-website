//VARIABILI
let statoMenu = 'chiuso';

const burger = document.querySelector('.burger');

let statoMenuMobile = 'chiuso';

const burgerMobile = document.querySelector('.burger-mobile');



//EVENT LISTENER 

burger.addEventListener("click", ()=>{

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

burgerMobile.addEventListener("click", ()=>{

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
