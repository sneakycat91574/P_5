fetch('http://localhost:3000/api/teddies/' + localStorage.getItem('produitOri'))
    .then((reponse)=>{reponse.json().then((reponse)=>{
        
        console.log(reponse);

        let ficheProduit = document.querySelector('.fiche-produit');
        let ficheProduitImg = document.querySelector('.fiche-produit_img');
        let ficheProduitInfo = document.querySelector('.fiche-produit_info');
        
        let cardImg = document.createElement('img');
        cardImg.src = reponse.imageUrl;
        cardImg.className = 'imgteddies';
        ficheProduitImg.appendChild(cardImg);

        let nameBear = document.createElement('h6');
        nameBear.textContent = reponse.name;
        nameBear.className = 'titre-produit';
        ficheProduitInfo.appendChild(nameBear);   

        let selectColors = document.createElement('select');
        selectColors.className = 'selection';
        let optionColors = [];

        for (let colors of reponse.colors){
            optionColors.push(document.createElement('option'));
            optionColors[optionColors.length-1].textContent = colors;
            selectColors.appendChild(optionColors[optionColors.length-1]);
            ficheProduitInfo.appendChild(selectColors);
           };


        
        let priceText = document.createElement('p');
        priceText.textContent = reponse.price / 100  + ' €';
        priceText.className = 'prix';
        ficheProduitInfo.appendChild(priceText);

        let descriptionText = document.createElement('p');
        descriptionText.textContent = reponse.description;
        descriptionText.className = 'description';
        ficheProduitInfo.appendChild(descriptionText);

        let btnPanier = document.createElement('button');
        btnPanier.className = 'btn-panier btn';
        btnPanier.textContent = 'Ajouter au panier';
        ficheProduitInfo.appendChild(btnPanier);

        });
});







