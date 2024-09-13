function calculateSIP() {
    const investmentType = document.getElementById('investmentType').value;
    const investmentAmount = parseFloat(document.getElementById('investmentAmount').value);
    const annualRate = parseFloat(document.getElementById('annualRate').value);
    const years = parseFloat(document.getElementById('years').value);

    if (isNaN(investmentAmount) || isNaN(annualRate) || isNaN(years)) {
        alert('Please enter valid values.');
        return;
    }

    let months = years * 12;
    let monthlyRate = annualRate / 12 / 100;
    let totalAmount;
    let totalearnedamoount;
    let totalinvestedamount;

    if (investmentType === 'monthly') {
        // Monthly SIP formula
        totalAmount = investmentAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
        totalinvestedamount = investmentAmount * 12* years;
    } else {
        // Annual SIP formula
        totalAmount = investmentAmount * ((Math.pow(1 + annualRate / 100, years) - 1) / (annualRate / 100)) * (1 + annualRate / 100);
        totalinvestedamount = investmentAmount *years;
    }
    totalearnedamoount = totalAmount - totalinvestedamount;
    const result = totalAmount.toFixed(2);
    document.getElementById('result1').innerText = 'Total Invested Amount: ₹' + totalinvestedamount;
    document.getElementById('result2').innerText = 'Total Earned Amount: ₹' + totalearnedamoount;
    document.getElementById('result').innerText = 'Total Future  Value: ₹' + result;
}

function changeColor() {
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.style.backgroundColor = '#ffeb3b';  // Change to yellow
        input.style.color = '#000';  // Change text to black for better visibility
    });
}