document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field')
    const previousWithdrawAmount = getElementValueById('withdraw-total')
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount

    setTextElementValueById('withdraw-total', newWithdrawTotal)

    const previousBalancetotal = getElementValueById('balance-total')
    const newBalanceTotal = previousBalancetotal - newWithdrawAmount
    setTextElementValueById('balance-total', newBalanceTotal)
})