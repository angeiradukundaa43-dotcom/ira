function showResult() {
    document.getElementById("result").innerHTML = "Hello, JavaScript!";
}
function displayName(){

    let user = document.getElementById("username").value;

    document.getElementById("welcome").innerHTML =
    "Welcome " + user;
}