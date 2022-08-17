



// Opsætter vores html template.
export const productTmpl = (product) => {

    return `<div class="product-item" id="${product.productId}">
                <h1>${product.title}</h1>
                <img src="./assets/products/${product.image}" />
                <div>${product.price}</div>
            </div>`
}
