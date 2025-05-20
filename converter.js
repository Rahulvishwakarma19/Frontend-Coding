const api = "https://api.exchangerate-api.com/v4/latest/USD";

// for selecting different controls

var search=document.getElementById("searchBox");
var convert = document.getElementById("convert");
var fromCurrecy = document.getElementById("from");
var toCurrecy = document.getElementById("to");
var finalValue = document.getElementById("finalValue");
var finalAmount = document.getElementById("finalAmount");

var resultFrom;
var resultTo;
var searchValue;

// Event when currency is changed
fromCurrecy.addEventListener('change', getFromCurrency);
function getFromCurrency(e)
{
    resultFrom=e.target.value;
}


toCurrecy.addEventListener('change',getTocurrency);
function getTocurrency(e)
{
  resultTo=e.target.value;
}


search.addEventListener('input', updateValue);

// function for updating value
function updateValue(e) {
    searchValue = e.target.value;
}

// when user clicks, it calls function getresults
convert.addEventListener("click", getResults);



// function getresults
function getResults() {
    fetch(`https://api.exchangerate-api.com/v4/latest/${resultFrom}`)
        .then(currenc => {
            return currenc.json();
        }).then(displayResults);
}

// display results after conversion
function displayResults(currency) {
    let toRate = currency.rates[resultTo];

    finalValue.innerHTML =
        (toRate * searchValue).toFixed(2);
      
    finalAmount.style.borderBottom= "2px double black";
}

// when user click on reset button
function clearVal() {
    window.location.reload(); 
};

