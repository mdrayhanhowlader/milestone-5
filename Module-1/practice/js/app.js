const nav = document.getElementById('nav')
const li = document.createElement('li')
li.innerText = "Sign up"
nav.appendChild(li)


const mainContainer = document.getElementById("main-section")
const mainh1 = document.createElement('h1')
mainh1.innerText = "Welcome to new journey";
mainContainer.appendChild(mainh1)

const mp = document.createElement('p') 

const node = document.createTextNode("Will you want to subscribe")
mp.appendChild(node)

mainContainer.appendChild(mp)

const elmnt = document.getElementById('fake-name')
elmnt.remove()

const parent = document.getElementById('fake-data')
const child = document.getElementById('fake-title')
const child1 = document.getElementById('fake-para')
parent.removeChild(child)

child1.parentNode.removeChild(child1)

const justquery = document.getElementById("nav")
justquery.style = 'display: flex; flex-direction: row; list-style: none; justify-content: center;'


const querySelector = document.querySelectorAll('li')
for(const selector of querySelector){
    selector.style = 'color: red; font-weight: bold; margin-left: 20px;'
}