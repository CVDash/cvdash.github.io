import {getList} from "./service.js";
import {productTmpl} from "./templates.js";

let productData = [];

// Hent et produkt fra listen via Id.
const getProductById = (productId) => {

    console.log('productData', productData, productId)

    if(productData.length > 0) {

        let product = productData.find( (product) => product.productId = productId )

        console.log(product);

    }else {

        console.log('Ingen product data');

    }

}


// Vi benytter getList i vores Service til at hente produkter fra filen -> products.json
// Vores applikation starter her, fordi det er den første funktion der bliver kaldt.
getList('./data/products.json').then( (productList) => {

    // Får fat i vores element i HTML´en
    let productListElement = document.querySelector('#productList');
    productData = productList;

    /*
        Vi tømmer vores elements indhold.
        Ikke så nødvendigt i dette tilfælde, men mest for at eksemplfisere. 
    */
    productListElement.innerHTML = '';

    productList.map((prductItem) => {

        productListElement.insertAdjacentHTML('beforeend', productTmpl(prductItem))

    })

    // Vi henter "midlertidigt" et produkt her.
    getProductById('111-000');

});

