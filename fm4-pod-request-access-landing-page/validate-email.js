function ValidateEmail(inputText, mobile) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
        return true;
    }
    else {
        if (mobile) {
            console.log("isMobile", true)
            document.getElementById("email-error-message-mobile").style.opacity = "1";
            return false;
        } else {
            document.getElementById("email-error-message").style.opacity = "1";
            return false;
        }

    }
}

function Erase(mobile) {
    if (mobile) {
        document.getElementsByClassName('input-email-mobile')[0].value = ""
        return document.getElementById("email-error-message-mobile").style.opacity = "0";
    } else {
        document.getElementsByClassName('input-email')[0].value = ""
        return document.getElementById("email-error-message").style.opacity = "0";
    }
}
