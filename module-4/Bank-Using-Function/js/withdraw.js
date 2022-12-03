/*
1: add event listener to the withdraw button
2: get input value
3: get total withdraw
4: get total balance
5: set withdraw
6: set balance
7: get input empty after pushing amount
*/

document.getElementById('btn-withdraw').addEventListener('click', function(){
    // get input value
    const withdrawField = document.getElementById('withdraw-field')
    const withdrawFieldString = withdrawField.value;
    const withdrawFieldAmount = parseFloat(withdrawFieldString)

    // set empty field 
    withdrawField.value = ''
    
    // get total 
    const withdrawAmount = document.getElementById('withdraw-total')
    const withdrawAmountString = withdrawAmount.innerText
    const withdrawAmountTotal = parseFloat(withdrawAmountString)
    
    // get balance 
    const withdrawBalance = document.getElementById('balance-total')
    const withdrawBalanceString = withdrawBalance.innerText
    const withdrawBalanceTotal = parseFloat(withdrawBalanceString)
    
    // set withdraw 
    const newwithdraw = withdrawFieldAmount + withdrawAmountTotal
    withdrawAmount.innerText = newwithdraw

    // set balance 
    const newBalance = withdrawBalanceTotal - withdrawFieldAmount
    withdrawBalance.innerText = newBalance


})