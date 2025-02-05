// ATM Machine Logic
let balance = 1000; // Initial balance

function checkBalance() {
    document.getElementById('output').innerText = `Your balance is: $${balance}`;
}

function depositMoney() {
    let amount = prompt("Enter the amount to deposit:");
    if (amount && !isNaN(amount) && amount > 0) {
        balance += parseFloat(amount);
        document.getElementById('output').innerText = `You deposited $${amount}. Your new balance is $${balance}`;
    } else {
        alert("Invalid amount. Please try again.");
    }
}

function withdrawMoney() {
    let amount = prompt("Enter the amount to withdraw:");
    if (amount && !isNaN(amount) && amount > 0) {
        if (amount <= balance) {
            balance -= parseFloat(amount);
            document.getElementById('output').innerText = `You withdrew $${amount}. Your new balance is $${balance}`;
        } else {
            alert("Insufficient balance!");
        }
    } else {
        alert("Invalid amount. Please try again.");
    }
}

function exitATM() {
    document.getElementById('output').innerText = "Thank you for using our ATM. Goodbye!";
}
