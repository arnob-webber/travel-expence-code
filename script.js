function splitExpense() {
    const expense = document.getElementById('expense').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const people = document.getElementById('people').value;
    
    if (expense === "" || people === "" || expense <= 0 || people <= 0) {
        document.getElementById('result').innerText = "Please enter valid numbers for expense and people.";
        return;
    }


    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then(response => response.json())
    .then(data => {
        const exchangeRate = data.rates[toCurrency];
        const convertedAmount = (expense / people) * exchangeRate;
        document.getElementById('result').innerText = `Each person owes ${convertedAmount.toFixed(2)} ${toCurrency}`;
    })
    .catch(error => {
        document.getElementById('result').innerText = "Error fetching exchange rates. Please try again.";
    });
}
