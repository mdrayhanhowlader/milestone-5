document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field')
    const withdrawFieldString = withdrawField.value
    const newWithdrawField = parseFloat(withdrawFieldString)
    

    const withdrawTotal = document.getElementById('withdraw-total')
    const withdrawTotalString = withdrawTotal.innerText
    const newWithdrawTotal = parseFloat(withdrawTotalString)

    const newWithdraw = newWithdrawField + newWithdrawTotal
    withdrawTotal.innerText = newWithdraw

    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)







    const newBalanceTotal = previousBalanceTotal - newWithdrawField
    balanceTotal.innerText = newBalanceTotal

    withdrawField.value = ''

  
})