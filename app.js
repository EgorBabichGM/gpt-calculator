const form = document.getElementById('form');
const amountInput = document.getElementById('amount');
const currencyInput = document.getElementById('currency');
const result = document.getElementById('result');

function convertCurrency(fromCurrency, toCurrency, amount) {
  fetch(`https://api.exchangerate-api.com/v4/latest/GEL`)
    .then(response => response.json())
    .then(data => {
      const exchangeRate = data.rates[toCurrency];
      const convertedAmount = (amount * exchangeRate).toFixed(2);
      // Display the converted amount
      result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    })
    .catch(error => {
      console.error(error);
      result.innerHTML = 'An error occurred. Please try again later.';
    });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const fromCurrency = 'GEL';
  const toCurrency = currencyInput.value;
  const amount = amountInput.value;
  convertCurrency(fromCurrency, toCurrency, amount);
});
