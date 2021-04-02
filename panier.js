let blocPanier = document.querySelector('#bloc-panier');

let hideFormulaire = document.querySelector('.hide-div-form');
hideFormulaire.style.visibility = "hidden";

let tableauPanier = document.createElement('div');
tableauPanier.className = 'tab-panier';
tableauPanier.textContent = 'Votre panier est vide ...';
blocPanier.appendChild(tableauPanier);

let panier = JSON.parse(localStorage.getItem("bearProduct"));

let formulaire = document.querySelector('#formulaire');
formulaire.onsubmit = (ev)=>{ev.preventDefault();
    //création d'un objet json form qui se compose des champs demandés par les spécifications (partie validation des données)
        const form = { 
        contact :{
        //avec ev.target on peut récupérer le formulaire qui as été soumis(ici celui avec l'id formulaire) puis on peut récupérer la valeur d'un élément en particulier qu'on peut cibler avec le nom mis sur la balise input (ici Prenom pour l'attribut name de la balise input)
          firstName : ev.target.nom.value,
          lastName : ev.target.prenom.value,
          address : ev.target.adresse.value,
          city : ev.target.ville.value,
          email : ev.target.email.value
        },
      
        products:[""+panier[0]._id]
        };

        console.log(panier)[0]._id;
        console.log(ev.target.nom.value);
        console.log(ev.target.prenom.value);
        console.log(ev.target.adresse.value);
        console.log(ev.target.ville.value);
        console.log(ev.target.email.value);
    //fetch prend en second paramètre lorsque l'on souhaite envoyer des données(un objet json qui reprends la méthode d'envoi, et les données (ici la méthode post et les données l'objet json crée dans la variable form ci-dessus))
    
    fetch("http://localhost:3000/api/teddies/order",
    {
        method: "POST",
        body: JSON.stringify(form)
    })
    
    .then(reponse => reponse.json().then(r=>{
    //enfin on récupère la réponse et la stocke en localStorage(ici un numéro de commande)
        localStorage.setItem("confirmation",r);
       // location.href="confirmation.html";
    }))
    
    }

if (panier){
    tableauPanier.remove();
    
    let ajoutPanier = document.querySelector(".ajout-panier");
    ajoutPanier.textContent = panier.length;

    let table = document.createElement('table');
    blocPanier.appendChild(table);
    table.className ='table table-panier';

    let tHead = document.createElement('thead');
    table.appendChild(tHead);

    let firstLineTab = document.createElement('tr');
    firstLineTab.className = 'nomination-tab';
    tHead.appendChild(firstLineTab);

    let nameTab = document.createElement('th');
    nameTab.textContent = 'Nom';
    firstLineTab.appendChild(nameTab);

    let articleTab = document.createElement('th');
    articleTab.textContent = 'Article';
    firstLineTab.appendChild(articleTab);

    let prixTab = document.createElement('th');
    prixTab.textContent = 'Prix'
    firstLineTab.appendChild(prixTab);

    let supTab = document.createElement('th');
    supTab.textContent = 'Supprimer';
    firstLineTab.appendChild(supTab);
    
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);


    
//On boucle sur tous les éléments se trouvant dans la variable monitem du localStorage
for(let cur of panier){

    let trBody  = document.createElement('tr');
    tbody.appendChild(trBody);
    
	//on crée des éléments html/les remplis/ les ajoute au html
	let nameBear = document.createElement("th");
    nameBear.textContent = cur.name;
    trBody.appendChild(nameBear);
    nameBear.className = 'titre-produit';

    let tabImg = document.createElement('th');
    trBody.appendChild(tabImg);

    let cardImg = document.createElement("img");
    cardImg.src = cur.imageUrl;
    tabImg.appendChild(cardImg);
    cardImg.className = 'image-panier';

    let priceText = document.createElement('th');
    priceText.textContent = cur.price / 100 + ' €';
    trBody.appendChild(priceText);
    priceText.className = 'prix-article';

    let tabSup = document.createElement('th');
    trBody.appendChild(tabSup);

    btnDelete = document.createElement('button');
    btnDelete.className = "icon-supprimer";
    tabSup.appendChild(btnDelete);

    iconDelete = document.createElement('i');
    iconDelete.className ="fas fa-times-circle";
    btnDelete.appendChild(iconDelete);

    let somme = 0;
    panier.forEach((panier) => {
    somme += panier.price / 100;
    });

    // bouton pour supprimer les articles du panier
    btnDelete.addEventListener('click',(e) =>{ 
        
        trBody.remove(); 
       
        panier.forEach((panier) => {
        let somme = 0 ;
        let sommeTotal = somme += panier.price / 100;
    });
        let prixTotal = document.createElement('td')
        prixTotal.textContent = sommeTotal + '€';
        tabTotal.appendChild(prixTotal);
});
}

let tabTotal = document.createElement('tr');
tabTotal.className = 'tabTotal';
tbody.appendChild(tabTotal);

let texteTotal = document.createElement('th');
tabTotal.appendChild(texteTotal);
texteTotal.textContent = 'Total';


    

// formulaire visible
    hideFormulaire.style.visibility = "visible";
}

else {
        //panier masqué
        let ajoutPanier = document.querySelector(".ajout-panier");
        ajoutPanier.style.display = 'none';

        // total masqué
        tabTotal.style.visibility = "hidden";
}







