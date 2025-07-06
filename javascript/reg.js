function validateForm() {
    const fullName = document.getElementById("Fname").value.trim();
    const password = document.getElementById("pass").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phno").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const dob = document.getElementById("dob").value.trim();

    let errorMessage = "";

    if (!fullName) {
        errorMessage += "Full Name is required.\n";
    }

    if (password.length < 6) {
        errorMessage += "Password must be at least 6 characters.\n";
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        errorMessage += "Please enter a valid email address.\n";
    }

    if (!/^\d{10}$/.test(phoneNumber))
        errorMessage += "Phone number must be exactly 10 digits.\n";

    if (!gender) {
        errorMessage += "Please select a gender.\n";
    }

    if (!dob) {
        errorMessage += "Date of Birth is required.\n";
    }

    if (errorMessage) {
        alert("Please fix the following errors:\n\n" + errorMessage);
    } else {
        alert("Registration Successful!");
        window.location.href = "./index.html";
    }

}