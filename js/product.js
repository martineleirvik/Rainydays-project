const url = "http://www.flowerpower-ml.no/content-management-systems/wp-json/wc/store/products/?per_page=100";
const jacketsContainer = document.querySelector(".jackets");


async function getProducts() {
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
    }

    catch(error) {
        console.log(error);
    }
}

getProducts();


function createHTML(jackets) {
    jackets.forEach(function(product) {
        jacketsContainer.innerHTML += 
        `<a href="jacketspesific.html?id=${product.id}" class="product">
            <h3>${product.name}</h3>
            <img src ="${product.images[0].src}" alt="${product.name}">
            <p> Price: ${product.prices.currency_prefix}${product.prices.price}</p>
        </a>`
    })
}