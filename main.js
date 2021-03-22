fetch('http://localhost:3000/api/teddies')
    .then((reponse)=>{reponse.json().then((reponse)=>{
        let priceText = [];
        let cardImg = [];
        let colorBear = [];
        let nameBear = [];
        console.log(reponse);

    for( let i = 0; i<reponse.length; i++ ){

        let card = document.createElement('div');
        card.className = "card-product";
        
        let bloc = document.getElementById('bloc-produit');
        bloc.appendChild(card);
        
        let img = document.createElement('img');
        img.className = "imageteddies";
        img.src = "";
        card.appendChild(img);
        
        cardImg.push(document.createElement('img'))
        cardImg[cardImg.length-1]
        img.src = reponse[i].imageUrl;
        card.appendChild(cardImg[cardImg.length-1]);

        let subCard = document.createElement('div');
        subCard.className = 'title-card';
        card.appendChild(subCard);

        nameBear.push(document.createElement('h6'))
        nameBear[nameBear.length-1].textContent = reponse[i].name;
        subCard.appendChild(nameBear[nameBear.length-1]);   

        let colorSelect = document.createElement("select");
        colorSelect.className = 'form-select';
        subCard.appendChild(colorSelect);

        let titleSelect = document.createElement("option");
        titleSelect.className = 'option selected';
        titleSelect.textContent = 'Couleur';
        colorSelect.appendChild(titleSelect);

        colorBear.push(document.createElement('option'))
        colorBear[colorBear.length-1].textContent = reponse[i].colors;
        colorSelect.appendChild(colorBear[colorBear.length-1]);
        
        priceText.push(document.createElement('p'))
        priceText[priceText.length-1].textContent = reponse[i].price / 100  + ' €';
        priceText.className = 'price';
        subCard.appendChild(priceText[priceText.length-1]);

        let blocBtn = document.createElement('div');
        blocBtn.className = 'bloc-btn';
        subCard.appendChild(blocBtn);

        let btnPanier = document.createElement('button');
        btnPanier.className = 'btn-panier btn';
        btnPanier.textContent = 'Ajouter au panier';
        blocBtn.appendChild(btnPanier);
        
        let btnCard = document.createElement('button');
        btnCard.className = "voir-produit btn";
        btnCard.textContent = "Voir";
        blocBtn.appendChild(btnCard);

        btnCard.addEventListener('click',(e)=>{
            localStorage.setItem('produitOri',reponse[i]._id)
            location.href = "./product.html"
        });
            }
})});

