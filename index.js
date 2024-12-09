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

    // Generisanje emojija
    for (let i = 0; i < 1000; i++) {
        const emoji = document.createElement('div');
        emoji.textContent = ['💸', '🤑', '💰', '🏖️','⛵️','🛩️'][Math.floor(Math.random() * 100)];
        emoji.classList.add('emoji');
        
        // Postavi nasumičnu poziciju emojija
        emoji.style.left = `${Math.random() * window.innerWidth}px`;
        emoji.style.top = `${Math.random() * window.innerHeight / 2}px`;

        document.body.appendChild(emoji);

        // Ukloni emoji nakon animacije
        emoji.addEventListener('animationend', () => emoji.remove());
    }
});
