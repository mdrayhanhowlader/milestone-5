// const button = document.querySelector('#button');

// const disableButton = () => {
//     button.disabled = true;
//     button.style.backgroundColor = 'blue'
// };

// button.addEventListener('click', disableButton)

// document.getElementsByClassName('btn').style.backgroundColor = "#fff"



let cart = []


function addToCart(element){
    const playerName = element.parentNode.children[0].innerText
    const ol = document.getElementById('ol')
    const li = document.createElement('li')
    li.innerText = playerName

    // ol.appendChild(li)
//    element.disabled = true

    element.setAttribute("disabled", true)

    cart.push(li.innerText = playerName)
    
    
    let count = cart.length
    var price = count * 1000


    const stop = document.getElementById('stop')
    if(count == 5) {
        disableBtn()
    }
    if(count <= 5){
        ol.appendChild(li)
        console.log(price)
        element.style.backgroundColor = 'green'
        element.innerText = "selected"
        element.classList.add("active")
        element.classList.remove("deactive")
    }else{
        stop.style.display = 'block'
    }

}


function disableBtn() {
    let elements = document.getElementsByClassName("deactive")
    for (var i = 0; i < elements.length; i++) {
        elements[i].disabled =true;
        elements[i].innerText = "can't select";
      }
}

