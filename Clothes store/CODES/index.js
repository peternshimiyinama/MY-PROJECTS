function login() {
    var login_page = document.getElementById("loginSection");
    var account = document.getElementById("signUpAccount");
    if (account.style.visibility === "visible") {
        account.style.visibility = "hidden";
    }
    if (login_page.style.visibility === "visible") {
        login_page.style.visibility = "hidden";
    } else {
        login_page.style.visibility = "visible";
    }
}

function createAcount() {
    var account = document.getElementById("signUpAccount");
    var login_section = document.getElementById("loginSection");
    if (account.style.visibility === "visible") {
        account.style.visibility = "hidden";
    } else {
        account.style.visibility = "visible";
    }
    login_section.style.visibility = "hidden";
}

