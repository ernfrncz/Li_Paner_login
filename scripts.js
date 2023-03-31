function validateForm() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
    if (username == "" && password == "") {
        console.log("Login error.");
        document.getElementById("log").innerHTML = "Please enter your username and password.";
        return false;
    } else if (username == "") {
        console.log("Login error.");
        document.getElementById("log").innerHTML = "Please enter your username.";
        return false;
    } else if (password == "") {
        console.log("Login error.");
        document.getElementById("log").innerHTML = "Please enter your password.";
        return false;
    } else {
        window.location.replace("Li_Paner_2qProj/index.html");
        history.back();
        return false;
    }
}
