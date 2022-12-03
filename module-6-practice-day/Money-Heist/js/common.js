function getAmount(amountId){
    const income = document.getElementById(amountId)
    const incomeString = income.value
    const totalIncome = parseFloat(incomeString)
    return totalIncome
}