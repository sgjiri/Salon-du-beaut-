var btBurger = document.getElementById('burger');
var menuMobil = document.getElementById('menu');
var croix = document.getElementById('croix')
var  btPrestations= document.getElementById('prestations');
var sousmenu = document.getElementById('sousmenu');
btBurger.addEventListener('click', function()
{
    menuMobil.classList.toggle('active')
    });

croix.addEventListener('click', function(){
    menuMobil.classList.remove('active')
});


if(menuMobil.class = 'active')
{
    btPrestations.addEventListener('click', function(){
        sousmenu.classList.toggle('active')
    })
    
};