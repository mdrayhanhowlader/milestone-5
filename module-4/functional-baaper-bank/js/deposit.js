

document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field')
    
    const previousDepositTotal = getElementValueById('deposit-total')

    const newDepositTotal = previousDepositTotal + newDepositAmount

    setTextElementValueById('deposit-total', newDepositTotal)


    const previousBalancetotal = getElementValueById('balance-total')
    const newBalanceTotal = previousBalancetotal + newDepositTotal
    setTextElementValueById('balance-total', newBalanceTotal)
})