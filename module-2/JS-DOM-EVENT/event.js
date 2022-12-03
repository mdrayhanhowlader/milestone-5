function givePopUp(){
    alert('You are learning dom event')
}


const pinkButton = document.getElementById('make-pink')
pinkButton.addEventListener('click', makePink)

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

const greenButton = document.getElementById('make-green')
greenButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green'
})


document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
})