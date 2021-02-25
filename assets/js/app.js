// navigation 
	// recuperation des variables
    const burger = document.querySelector('#burger-nav'); //burger qui contient h1 + les deux span
    const spancheck = document.querySelector('.span-burger');
    const spancheck1 = document.querySelector('.span-burger1');
    const ul = document.querySelector('#ul'); // ul qui se déplace de haut en bas

    var linkNav = document.querySelector('.link-nav');
    var linkNav1 = document.querySelector('.link-nav1');
    var linkNav2 = document.querySelector('.link-nav2');
    var linkNav3 = document.querySelector('.link-nav3');
    var linkNav4 = document.querySelector('.link-nav4');
    
    // si on clic sur le menu burger
        // on ajoute les class
        burger.onclick = function(){
            ul.classList.toggle('translate');
            spancheck.classList.toggle('rotate1');
            spancheck1.classList.toggle('rotate2');
        };
    // clic sur les  liens qui permettent de scroll + fermer la nav
        linkNav.onclick = function(){
            ul.classList.toggle('translate');
            spancheck.classList.toggle('rotate1');
            spancheck1.classList.toggle('rotate2');
        };
        linkNav1.onclick = function(){
            ul.classList.toggle('translate');
            spancheck.classList.toggle('rotate1');
            spancheck1.classList.toggle('rotate2');
        };
        linkNav2.onclick = function(){
            ul.classList.toggle('translate');
            spancheck.classList.toggle('rotate1');
            spancheck1.classList.toggle('rotate2');
        };
        linkNav3.onclick = function(){
            ul.classList.toggle('translate');
            spancheck.classList.toggle('rotate1');
            spancheck1.classList.toggle('rotate2');
        };
        linkNav4.onclick = function(){
            ul.classList.toggle('translate');
            spancheck.classList.toggle('rotate1');
            spancheck1.classList.toggle('rotate2');
        };