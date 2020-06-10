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

                        document.querySelector('#card-image').src = imgArr[0];
                        document.querySelector('#name-view').innerHTML = nameArr[0];
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
    let input, filter, table, tr, td, i, value; 

    input = document.querySelector('#searchbar');
    filter = input.value.toUpperCase(); 
    table = document.querySelector('#data-view');
    tr = table.querySelectorAll('tr'); 

    for(i = 0; i < tr.length; i++) {
        td = tr[i].querySelectorAll('td')[1];
        if(td) {
            value = td.innerHTML; 
            if(value.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
  
