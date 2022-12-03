/*
1: add event listener to the deposit button
2: get input value
3: get total deposit
4: get total balance
5: set deposit
6: set balance
7: get input empty after pushing amount
*/

document.getElementById('btn-deposit').addEventListener('click', function(){
    // get input value
    const depositField = document.getElementById('deposit-field')
    const depositFieldString = depositField.value;
    const depositFieldAmount = parseFloat(depositFieldString)

    // set empty field 
    depositField.value = ''

    // get total 
    const depositAmount = document.getElementById('deposit-total')
    const depositAmountString = depositAmount.innerText
    const depositAmountTotal = parseFloat(depositAmountString)

    // get balance 
    const depositBalance = document.getElementById('balance-total')
    const depositBalanceString = depositBalance.innerText
    const depositBalanceTotal = parseFloat(depositBalanceString)
    
    // set deposit 
    const newDeposit = depositFieldAmount + depositAmountTotal
    depositAmount.innerText = newDeposit

    // set balance 
    const newBalance = depositFieldAmount + depositBalanceTotal
    depositBalance.innerText = newBalance


})