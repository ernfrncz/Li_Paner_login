function validateForm() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
    if (username == "" && password == "") {
        console.log("Login error.");
        document.getElementById("log").innerHTML = "Please enter your username and password.";
    } else if (username == "") {
        console.log("Login error.");
        document.getElementById("log").innerHTML = "Please enter your username.";
    } else if (password == "") {
        console.log("Login error.");
        document.getElementById("log").innerHTML = "Please enter your password.";
    } else  if (username != "" && password != ""){
        window.location.href = "2Q/index.html";
    }
}
