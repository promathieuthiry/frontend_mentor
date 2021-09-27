const item = document.getElementById("arrow-text");
item.addEventListener("mouseover", func, false);
item.addEventListener("mouseout", func1, false);
const svg = document.getElementById('arrow');

function func() {
    // svg.style.fill = "#fff"
    item.setAttribute("fill", "#ffffff")
}

function func1() {
    const svg = document.getElementById('arrow');
    svg.style.fill = "#62E0D9"
    // item.setAttribute("style", "background-color:green;")
}

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
        return true;
    }
    else {
        document.getElementById("email-error-message").style.opacity = "1";
        return false;

    }
}

function Erase() {
    document.getElementsByClassName('input-email')[0].value = ""
    return document.getElementById("email-error-message").style.opacity = "0";
}