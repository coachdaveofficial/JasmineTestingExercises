window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 0;
  document.getElementById("loan-years").value = 0;
  document.getElementById("loan-rate").value = 0;

  const loanValues = {
    loanAmount : document.getElementById("loan-amount").value,
    loanYears : document.getElementById("loan-years").value,
    loanRate : document.getElementById("loan-rate").value
    };

  console.log(calculateMonthlyPayment(loanValues));
  
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  



}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const loanObjKeys = Object.keys(values);
  const loanAmount = parseFloat(values[loanObjKeys[0]]);
  const loanYears = parseFloat(values[loanObjKeys[1]]);
  const loanRate = parseFloat(values[loanObjKeys[2]]);

  const periodicInterest = (loanRate / 12);
  const totalPayments = (loanYears * 12);
  const monthlyPayment = (loanAmount * periodicInterest) / (1 - ((1 + periodicInterest) ** (-totalPayments)));

  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
