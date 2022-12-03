document.getElementById('calculate').addEventListener('click', function(){
    // income 
    const totalIncome = getAmount('income')

    // food 
    const totalFood = getAmount('food')

    // rent 
    const totalRent = getAmount('rent')

    // cloth 
    const totalCloth = getAmount('cloth')

    const total = totalFood + totalRent + totalCloth

    const expense = document.getElementById('expense')
    const expenseString = expense.innerText
    const totalExpense = parseFloat(expenseString)

    expense.innerText = total
    console.log(expense)

    const balance = document.getElementById('balance')
    const balanceString = balance.innerText
    const totalBalance = parseFloat(balanceString)

    const newBalance = totalIncome - total

    balance.innerText = newBalance


})

document.getElementById('save').addEventListener('click', function(){
    const getAmount = document.getElementById('remain-amount')
    const getAmountString = getAmount.value
    const getTotalAmount = parseFloat(getAmountString)

    const balance = document.getElementById('balance')
    const balanceString = balance.innerText
    const totalBal = parseFloat(balanceString)

    const savingBalance = totalBal / getTotalAmount

    const savingAmount = document.getElementById('saving-amount')
    const savingAmountString = savingAmount.innerText
    const savingTotalAmount = parseFloat(savingAmountString)
    savingAmount.innerText = savingBalance


    const remainingAmount = document.getElementById('remaining-amount')
    const remainingAmountString = remainingAmount.innerText
    const remainingTotalAmount = parseFloat(remainingAmountString)

    const remainingBalance = totalBal - savingBalance

    remainingAmount.innerText = remainingBalance

})

