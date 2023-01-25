let btBurger = document.getElementById('burger');
let menuMobil = document.getElementById('menu');
let croix = document.getElementById('croix')
let  btTriangle= document.getElementById('triangle');
let sousmenu = document.getElementById('sousmenu');
let croix2 = document.getElementById('croix2');
let fleche =document.getElementById('fleche');
let divFomulaire = document.getElementById('fomulaire');
let divCarte = document.getElementById('carte');

divCarte.style.height=divFomulaire.clientHeight + "px";

btBurger.addEventListener('click', function()
{
    menuMobil.classList.toggle('active')
    });

croix.addEventListener('click', function(){
    menuMobil.classList.remove('active')
});


btTriangle.addEventListener('click',function(){
        sousmenu.classList.toggle('active')
    });

croix2.addEventListener('click', function(){
    sousmenu.classList.remove('active');
    menuMobil.classList.remove('active');
});

fleche.addEventListener('click', function(){
    sousmenu.classList.remove('active');
})
