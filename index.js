document.getElementById('calculate-btn').addEventListener('click', function () {

    const income2023 = parseFloat(document.getElementById('income-2023').value);
    const income2024 = parseFloat(document.getElementById('income-2024').value);
    const percentage = parseFloat(document.getElementById('percentage').value); 

    if (isNaN(income2023) || isNaN(income2024) || isNaN(percentage)) {
        document.getElementById('result').textContent = "Vennligst fyll inn alle feltene korrekt.";
        return;
    }

    const holidayPay = income2024 * (percentage / 100);


    document.getElementById('result').textContent = `Dine feriepenger for 2024 er: ${holidayPay.toFixed(2)} NOK`;
});
