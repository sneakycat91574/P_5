let blocPanier = document.querySelector('#bloc-panier');

let tableauPanier = document.createElement('div');
tableauPanier.className = 'tab-panier';
blocPanier.appendChild(tableauPanier);

//On boucle sur tous les éléments se trouvant dans la variable monitem du localStorage
for(let cur of JSON.parse(localStorage.getItem("bearProduct"))){

	//on crée des éléments html/les remplis/ les ajoute au html
	let nameBear = document.createElement("p");
    nameBear.textContent = cur.name;
    tableauPanier.appendChild(nameBear);
    nameBear.className = 'titre-produit';

    let cardImg = document.createElement("img");
    cardImg.src = cur.imageUrl;
    tableauPanier.appendChild(cardImg);
    cardImg.className = 'image-panier';

    let priceText = document.createElement('p');
    priceText.textContent = cur.price / 100 + ' €';
    tableauPanier.appendChild(priceText);
    priceText.className = 'prix-article';

    btnDelete = document.createElement('button');
    btnDelete.textContent = 'Supprimer';
    tableauPanier.appendChild(btnDelete);
    btnDelete.addEventListener('click',delete(reponse));
}

btnPanier = document.createElement('button');
btnPanier.textContent = 'Commander';
tableauPanier.appendChild(btnPanier);

