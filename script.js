function hideAllSections() {
    document.querySelectorAll('.section-content, .form-container').forEach(section => {
        section.style.display = 'none';
    });
}

document.getElementById('homeLink').addEventListener('click', function() {
    hideAllSections();
    document.getElementById('homeContent').style.display = 'block';
});

document.getElementById('sendLink').addEventListener('click', function() {
    hideAllSections();
    document.getElementById('sendContent').style.display = 'block';
});

document.getElementById('historyLink').addEventListener('click', function() {
    hideAllSections();
    document.getElementById('historyContent').style.display = 'block';
});

document.getElementById('balanceLink').addEventListener('click', function() {
    hideAllSections();
    document.getElementById('balanceContent').style.display = 'block';
});

document.getElementById('signinLink').addEventListener('click', function() {
    hideAllSections();
    document.getElementById('signinForm').style.display = 'block';
});

document.getElementById('signupLink').addEventListener('click', function() {
    hideAllSections();
    document.getElementById('signupForm').style.display = 'block';
});
document.getElementById('sendMoneyButton').addEventListener('click', function() {
    const recipientNumber = document.getElementById('recipientNumber').value;
    const amount = document.getElementById('amount').value;
    const pin = document.getElementById('pin').value;

    if (!recipientNumber || !amount || !pin) {
        alert('Please fill in all fields.');
    } else {
        // Inshingano zo kohereza amafaranga (ushobora kuyishyira mu API cyangwa ibindi bisabwa)
        alert(`Sending ${amount} to ${recipientNumber}...`);
    }
});
document.getElementById('depositButton').addEventListener('click', function() {
    const depositAmount = document.getElementById('depositAmount').value;
    const currentBalanceElement = document.getElementById('currentBalance');
    let currentBalance = parseFloat(currentBalanceElement.textContent.replace('$', ''));

    if (!depositAmount || depositAmount <= 0) {
        alert('Please enter a valid deposit amount.');
    } else {
        currentBalance += parseFloat(depositAmount);
        currentBalanceElement.textContent = `$${currentBalance.toFixed(2)}`;
        alert(`You have successfully deposited $${depositAmount}. Your new balance is $${currentBalance.toFixed(2)}.`);
    }
});
