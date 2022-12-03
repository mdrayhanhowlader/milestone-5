// const button = document.querySelector('#button');

// const disableButton = () => {
//     button.disabled = true;
//     button.style.backgroundColor = 'blue'
// };

// button.addEventListener('click', disableButton)



let cart = []

function addToCart(element){
    const playerName = element.parentNode.children[0].innerText
    const ol = document.getElementById('ol')
    const li = document.createElement('li')
    // ol.appendChild(li)

    element.setAttribute("disabled", true)




    li.innerText = playerName

    cart.push(li.innerText = playerName)
    
    let count = cart.length
    var price = count * 1000

    const stop = document.getElementById('stop')


    if(count <= 5){
        ol.appendChild(li)
        console.log(price)
    }else{
        stop.style.display = 'block'
    }

}









