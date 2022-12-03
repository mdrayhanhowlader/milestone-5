const cartArray = []

function display(cartProduct){
    let totalPrice = 0
    const tableBody = document.getElementById('cart-products')
    tableBody.innerHTML = '';
    for(let i = 0; i < cartProduct.length; i++){
        const name = cartArray[i].productName
        const price = cartArray[i].productPrice

        totalPrice = totalPrice + price

        const tr = document.createElement('tr')
        tr.innerHTML = 
        `
        <th>${i+1}</th>
        <td>${name}</td>
        <td>${price}</td>
        `;
        tableBody.appendChild(tr)
    }

    const tr = document.createElement('tr')
    tr.innerHTML = `
    <th>1</th>
    <td>Total Price</td>
    <td>${totalPrice}</td>
    `;
    tableBody.appendChild(tr)

}

function addToCart(element){

    const productName = element.parentNode.parentNode.children[0].innerText

    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText

    const productObj = {
        productName: productName,
        productPrice: parseFloat(productPrice)
    }

    cartArray.push(productObj)
    
    const totalAddedProduct = document.getElementById('total-added-product')

    totalAddedProduct.innerText = cartArray.length

    display(cartArray)
}





// let cart = []


// function addToCart(element){
//     const playerName = element.parentNode.children[0].innerText
//     const ol = document.getElementById('ol')
//     const li = document.createElement('li')
//     li.innerText = playerName
//     ol.appendChild(li)
//     playerName.disabled = true

//     for (let i = 0; i < li.length; i++){
//         console.log(li)
//     }
// }