function createHTML(detail) {
    detailContainer.innerHTML = 
        `<h1>${detail.name}</h1>
        <img src ="${detail.images[0].src}" class="box-1" alt="${detail.name}">
        <p id="NOK">${detail.prices.currency_prefix}${detail.prices.price} </p>
        `
}







function createHTML(detail) {
    textContainer.innerHTML = 
        `<h1>${detail.name}</h1>
        <p id="NOK">${detail.prices.currency_prefix}${detail.prices.price} </p>
        `
}

function createHTML(detail) {
    imageContainer.innerHTML = 
        `<img src ="${detail.images[0].src}" class="box-1" alt="${detail.name}">`
}
