let btBurger = document.getElementById('burger');
let menuMobil = document.getElementById('menu');
let croix = document.getElementById('croix')
let  btTriangle= document.getElementById('triangle');
let sousmenu = document.getElementById('sousmenu');
btBurger.addEventListener('click', function()
{
    menuMobil.classList.toggle('active')
    });

croix.addEventListener('click', function(){
    menuMobil.classList.remove('active')
});



menuMobil.class = ('active')
{
    btTriangle.addEventListener('click', function(){
        sousmenu.classList.toggle('active')
    })
    
};