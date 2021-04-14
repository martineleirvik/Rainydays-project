const detailContainer = document.querySelector(".jacketdetail")
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = "http://www.flowerpower-ml.no/content-management-systems/wp-json/wc/store/products/" + id;

async function fetchJacket() {
    try {
        const response = await fetch(url);
        const detail = await response.json();
        
        console.log(detail);

        createHTML(detail);

    }

    catch(error) {
        console.log(error);
    }
}

fetchJacket();


function createHTML(detail) {
    detailContainer.innerHTML = 
        `<h1>${detail.name}</h1>
        <img src ="${detail.images[0].src}" alt="${detail.name}">
        <p> Price: ${detail.prices.currency_prefix}${detail.prices.price}</p>
        `
}














