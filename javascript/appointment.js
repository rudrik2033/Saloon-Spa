const form = document.getElementById('bookingForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    let isValid = true;

    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    if (email === '' || !isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Phone number is required.';
        isValid = false;
    } else {
        document.getElementById('phoneError').textContent = '';
    }

    if (date === '') {
        document.getElementById('dateError').textContent = 'Date is required.';
        isValid = false;
    } else {
        document.getElementById('dateError').textContent = '';
    }

    if (time === '') {
        document.getElementById('timeError').textContent = 'Time is required.';
        isValid = false;
    } else {
        document.getElementById('timeError').textContent = '';
    }

    if (isValid) {
        form.submit();
    }
});

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}