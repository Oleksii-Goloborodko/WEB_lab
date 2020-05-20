function validate() {
    var userName = document.getElementById("userName");
    var userPassword = document.getElementById("userPassword");


    if (!userName.value) {
        userName.style.border = "2px solid red"
        return false;
    }
    if (!userPassword.value) {
        userPassword.style.border = "2px solid red"
        return false;
    }
    return true;

}
window.onload = function () {
    alert('Документ и все ресурсы загружены');
}


