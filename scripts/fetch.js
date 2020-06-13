let imgArr, nameArr, priceArr;

imgArr = [];
nameArr = []; 
priceArr = [];


export function fetchRowInsertion() {

    const url = 'https://api.scryfall.com/cards/random';

    for(let i=0;i<10;i++){
        randomFetch(i);
    }

        function randomFetch(i) {
            setTimeout(() => {
                let scryfall = fetch(url)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Fetch unsuccessful");
                        }
                        return response.json();
                    })
                    .then((json) => {
                        let stringify = JSON.stringify(json);
                        let parsed = JSON.parse(stringify);

                        let card = {
                            id: parsed.multiverse_ids,
                            name: parsed.name, 
                            set: parsed.set_name, 
                            rarity: parsed.rarity, 
                            price: `£${parsed.prices.usd}`,
                            image: parsed.image_uris.large
                        };

                        
                        let tblRender = document.querySelector('tbody').insertRow(i);
                            let idData = tblRender.insertCell(0);
                            let nameData = tblRender.insertCell(1);
                            let setData = tblRender.insertCell(2);
                            let rareData = tblRender.insertCell(3);
                            let priceData = tblRender.insertCell(4);
                        
                        imgArr.push(card.image);
                        nameArr.push(card.name);
                        priceArr.push(card.price);

                        document.querySelector('#card-image-render').src = imgArr[0];
                        document.querySelector('#name-render').innerHTML = nameArr[0];
                        document.querySelector('#price-alter').value = priceArr[0];

                        if(parsed.prices.usd != null) {
                            idData.innerHTML = card.id; 
                            nameData.innerHTML = card.name; 
                            setData.innerHTML = card.set; 
                            rareData.innerHTML = card.rarity;
                            priceData.innerHTML = card.price;
                        } else {
                            idData.innerHTML = card.id; 
                            nameData.innerHTML = card.name; 
                            setData.innerHTML = card.set; 
                            rareData.innerHTML = card.rarity;
                            priceData.innerHTML = "worthless";
                        }
                    })
                .catch(error => console.error(error));
            }, 1100 * i); 
        }   
    }

export function filterSearch() {
    
    let filter = document.querySelector('#searchbar').value.toUpperCase();
    let rows = document.querySelector('tbody').rows;

    for (var i = 0; i < rows.length; i++) {
        let firstCol = rows[i].cells[0].textContent.toUpperCase();
        let secondCol = rows[i].cells[1].textContent.toUpperCase();
        let thirdCol = rows[i].cells[2].textContent.toUpperCase();
        let fourthCol = rows[i].cells[3].textContent.toUpperCase();
        if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1 || thirdCol.indexOf(filter) > -1 || fourthCol.indexOf(filter) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }      
    }
}
  
