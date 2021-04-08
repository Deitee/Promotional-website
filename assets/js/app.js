document.addEventListener("DOMContentLoaded", function() {
// navigation 
    const nav = document.querySelector('.nav');
    const topPage = document.querySelector('#top');
    let height = topPage.clientHeight;
    const backTop = document.querySelector("#backTop")

    window.addEventListener('scroll', () => {
        if(window.scrollY > height){
            nav.classList.add('scroll');
            backTop.classList.add('backTop');
        } else{
            nav.classList.remove('scroll');
            backTop.classList.remove('backTop');
        }
    })
	// recuperation des variables
    const burger = document.querySelector('#burger-nav'); //burger qui contient h1 + les deux span
    const spancheck = document.querySelector('.span-burger');
    const spancheck1 = document.querySelector('.span-burger1');
    const ul = document.querySelector('#ul'); // ul qui se déplace de haut en bas

    var linkNav = document.querySelectorAll('.link-nav');
    
        burger.onclick = function(){
            ul.classList.toggle('translate');
            spancheck.classList.toggle('rotate1');
            spancheck1.classList.toggle('rotate2');
        };
        for (let i = 0; i < linkNav.length; i++){
            linkNav[i].onclick = function(){
                ulTranslate.classList.toggle('translate');
                spancheck.classList.toggle('rotate1');
                spancheck1.classList.toggle('rotate2');
            }
        }

// changement contenu de la balise title en fonctione de si l'utilisateur est sur la page ou non
	if (document.documentElement.lang === "fr") { // detecter si la page est en français
	    nouveauTitre = "Revenez shérif !";
	} else if(document.documentElement.lang === "en") { // Sinon si elle est en anglais
	    nouveauTitre = "Come back sheriff !";
	}

	titreNormal = document.title; 

	document.addEventListener("visibilitychange", function() {
		if (document.visibilityState === 'visible') { // Si l'utilisateur est sur la page on affiche le titre html
			document.title = titreNormal;
		} else { // Sinon on affiche le nouveau titre décrit dans la variable
			document.title = nouveauTitre;
		}
	});
})