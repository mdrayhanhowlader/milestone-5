function orderAmount(orderId, price){
    const orderAmount = document.getElementById(orderId)
    const orderAmountString = orderAmount.innerText
    const orderTotal = parseFloat(orderAmountString)

    const order = price + orderTotal
    orderAmount.innerText = order

    return orderAmount
}

document.getElementById('buy-now-1').addEventListener('click', function(){
    const getPrice = document.getElementById('price-1')
    const priceString = getPrice.innerText
    const price = parseFloat(priceString)

    // const orderAmount = document.getElementById('order-amount')
    // const orderAmountString = orderAmount.innerText
    // const orderTotal = parseFloat(orderAmountString)

    // const order = price + orderTotal
    // orderAmount.innerText = order
    orderAmount('order-amount', price)

})

document.getElementById('buy-now-2').addEventListener('click', function(){
    const getPrice = document.getElementById('price-2')
    const priceString = getPrice.innerText
    const price = parseFloat(priceString)

    // const orderAmount = document.getElementById('order-amount')
    // const orderAmountString = orderAmount.innerText
    // const orderTotal = parseFloat(orderAmountString)

    // const order = price + orderTotal
    // orderAmount.innerText = order

    orderAmount('order-amount', price)

})

document.getElementById('buy-now-3').addEventListener('click', function(){
    const getPrice = document.getElementById('price-3')
    const priceString = getPrice.innerText
    const price = parseFloat(priceString)

    // const orderAmount = document.getElementById('order-amount')
    // const orderAmountString = orderAmount.innerText
    // const orderTotal = parseFloat(orderAmountString)

    // const order = price + orderTotal
    // orderAmount.innerText = order

    orderAmount('order-amount', price)

})