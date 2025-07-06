function validateLogin(event) {
  event.preventDefault();
    const username = document.getElementById('uname').value.trim();
    const password = document.getElementById('pass').value.trim();
  
    if (username === "") {
      alert("Please enter your username.");
      return true;
    }
  
    else if (password === "") {
      alert("Please enter your password.");
      return false;
    }
    else{
      console.log(window.location);
      
      console.log("login");
      alert("Login successful");
      window.location.href = "./index.html";
      redirect();
      return true;
    }
  }
  