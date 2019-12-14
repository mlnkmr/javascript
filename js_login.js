
function redirect(){
    localStorage.setItem('log', '1');
    let log = localStorage.getItem('log');
    document.getElementById("log").innerHTML = log;

}


function redirectl(){
    let log = localStorage.getItem('log');
    redirect()
    if(log == "0"){
        //redirect to home page
        window.location.href("http://localhost:63342/js1/login.html");
    }

}
function redirecth(){
    let log = localStorage.getItem('log');
    redirect()
    if(log == "1"){
        //redirect to home page
        window.location.href("http://localhost:63342/js1/home.html");
    }

}

function login() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    document.getElementById("1").innerHTML = user;
    document.getElementById("2").innerHTML = password;
    if (user == "milan" && password == "milan@123") {
        //redirect to home
        window.location.href("http://localhost:63342/js1/home.html");
        localStorage.setItem('log', '1');
    } else {
        document.getElementById("error").innerHTML = "Incorrect credentials"
    }
}

function logout() {
    localStorage.setItem('log', '0');
    window.location.href("http://localhost:63342/js1/login.html");
}

function home(){
    window.location = "http://localhost:63342/js1/home.html";
}
function m(){
    document.getElementById("mmm").innerHTML = "function";

}