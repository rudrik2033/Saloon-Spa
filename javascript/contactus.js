function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "") {
        alert("Name is required");
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
        alert("Email is required");
        return false;
    } 
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (message === "") {
        alert("Message is required");
        return false;
    }

    alert("Thank you for contacting us!");

    return true;
}

function click()
{
    var b = document.querySelector("#btn");

    alert("Subscribed successfully!");

}