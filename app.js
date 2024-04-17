// Function to calculate tax
function calculateTax() {
    // Get inputs
    const grossIncome = parseFloat(document.getElementById('grossIncome').value);
    const extraIncome = parseFloat(document.getElementById('extraIncome').value);
    const deductions = parseFloat(document.getElementById('deductions').value);
    const age = document.getElementById('age').value;

    // Validate inputs
    let error = false;
    if (isNaN(grossIncome) || isNaN(extraIncome) || isNaN(deductions)) {
        displayError('All fields are required.');
        error = true;
    }
    //if (!['age <40', ' age ≥ 40 & age < 60', 'age ≥ 60'].includes(age)) {
        //displayError('Age is required.');
       // error = true;
   // }
  //  if (error) return;

    // Calculate taxable income
    const totalIncome = grossIncome + extraIncome - deductions;
    let taxableAmount = 0;
    if (totalIncome > 800000) {
        switch (age) {
            case '40':
                taxableAmount = (totalIncome - 800000) * 0.3;
                break;
            case ' 40 60':
                taxableAmount = (totalIncome - 800000) * 0.4;
                break;
            case '60':
                taxableAmount = (totalIncome - 800000) * 0.1;
                break;
        }
    }

    // Show modal with tax details
    const modal = document.getElementById('modal');
    modal.innerHTML = `Taxable Amount: $ {taxableAmount.toFixed(2)} Lakhs`;
    modal.style.display = 'block';
}

// Function to display error message
function displayError(message) {
    const errorIcon = document.getElementById('errorIcon');
    errorIcon.style.display = 'inline-block';
    errorIcon.title = message;
}

// Event listener for submit button
document.getElementById('submit').addEventListener('click', calculateTax);