let blocPanier = document.querySelector('#bloc-panier');

let tableauPanier = document.createElement('div');
tableauPanier.className = 'tab-panier';
tableauPanier.textContent = 'Votre panier est vide ...';
blocPanier.appendChild(tableauPanier);

let panier = JSON.parse(localStorage.getItem("bearProduct"));


if (panier.length > 0){
    tableauPanier.remove();

    let ajoutPanier = document.querySelector(".ajout-panier");
    ajoutPanier.textContent = panier.length;
    console.log(panier.length);


    let table = document.createElement('table');
    blocPanier.appendChild(table);
    table.className ='table table-panier';

    let tHead = document.createElement('thead');
    table.appendChild(tHead);

    let firstLineTab = document.createElement('tr');
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
    btnDelete.textContent = 'Supprimer';
    tabSup.appendChild(btnDelete);
    
}

btnPanier = document.createElement('button');
btnPanier.textContent = 'Commander';
tableauPanier.appendChild(btnPanier);

btnDelete.addEventListener('click',(e) =>{cur.remove()
});

}



