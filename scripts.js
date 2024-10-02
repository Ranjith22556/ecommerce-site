document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!username || !email || !password) {
        alert('All fields are required.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    alert('Registration successful!');
});
document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    if (!fullName || !address || !phone) {
        alert('All fields are required.');
        return;
    }

    alert('Profile updated successfully!');
});
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    if (!cardNumber || !expiryDate || !cvv) {
        alert('All fields are required.');
        return;
    }

    if (!/^\d{16}$/.test(cardNumber)) {
        alert('Invalid card number.');
        return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        alert('Invalid expiry date format.');
        return;
    }

    if (!/^\d{3,4}$/.test(cvv)) {
        alert('Invalid CVV.');
        return;
    }

    alert('Payment successful!');
});
   