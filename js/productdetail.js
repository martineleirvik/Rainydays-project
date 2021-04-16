const imageContainer = document.querySelector(".jacketdetail")
const textContainer = document.querySelector(".box-22")

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = "http://www.flowerpower-ml.no/content-management-systems/wp-json/wc/store/products/" + id;

const proxy = "https://noroffcors.herokuapp.com/";
const corsFix = proxy + url;

async function fetchJacket() {
    try {
        const response = await fetch(corsFix);
        const detail = await response.json();
        
        console.log(detail);

        createHTML(detail);
        makeHTML(detail);

    }

    catch(error) {
        console.log(error);
    }
}

fetchJacket();


function createHTML(detail) {
    textContainer.innerHTML = 
        `<h1>${detail.name}</h1>
        <p id="price">${detail.prices.currency_prefix}${detail.prices.price} </p>
        `
}

function makeHTML(detail) {
    imageContainer.innerHTML = 
        `<img src ="${detail.images[0].src}" class="box-1" alt="${detail.name}">`
}
