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
        window.open("https://ernfrncz.github.io/Li_Paner_login/Li_Paner_2qProj/index.html", "_self");
        return true;
    }
}
