function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field')
    const phoneNumberString = phoneNumberField.value
    const phoneNumberTotal = parseInt(phoneNumberString)

    let newPhoneNumber

    if(isIncrease === true){
        newPhoneNumber = phoneNumberTotal + 1
    }else {
        newPhoneNumber = phoneNumberTotal - 1
    }

    phoneNumberField.value = newPhoneNumber

    return newPhoneNumber
}

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = document.getElementById('phone-total')
    const phoneTotalElement = newPhoneNumber * 1219 
    phoneTotalPrice.innerText = phoneTotalElement
}





document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true)
    updatePhoneTotalPrice(newPhoneNumber)
    calculateSubTotal()

})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false)
    updatePhoneTotalPrice(newPhoneNumber)
    calculateSubTotal()
})