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
