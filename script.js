function calculateMaturityAmount(){
    //get the input values from the form elements
    //principle
    //roi
    //ten

    const principle = parseFloat(document.getElementById('principle').value);
    const interest = parseFloat(document.getElementById('interestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    //Calculation
    /* Formula :
        M = p+(p*r*t)/100
    */
   const amount = principle+(principle*interest*tenure)/100;

   document.getElementById('result').innerText = `Maturity Amount: ${amount.toFixed(2)}`;

}

//Event listener for the calc button
document.getElementById('calculate').addEventListener('click',calculateMaturityAmount);