function showHide() {
    // Get the checkbox
    var checkBox = document.getElementById("toggle");
    let annually = document.getElementsByClassName("show-annually");
    let monthly = document.getElementsByClassName("show-montly");
    let whiteball = document.getElementsByClassName("checkbox-whiteball");

    if (checkBox.checked == true) {
        whiteball[0].style.transform = "translateX(-24px)"
        for (let i = 0; i < annually.length; i++) {
            annually[i].style.display = "block"
        }
        for (let i = 0; i < monthly.length; i++) {
            monthly[i].style.display = "none"
        }
    } else {
        whiteball[0].style.transform = "translateX(0px)"
        for (let i = 0; i < annually.length; i++) {
            annually[i].style.display = "none"
        }
        for (let i = 0; i < monthly.length; i++) {
            monthly[i].style.display = "block"
        }
    }
}

function showAnnually() {
    // Get the checkbox
    var checkBox = document.getElementById("toggle");
    let annually = document.getElementsByClassName("show-annually");
    let monthly = document.getElementsByClassName("show-montly");
    let whiteball = document.getElementsByClassName("checkbox-whiteball");

    if (checkBox.checked == false) {
        whiteball[0].style.transform = "translateX(-24px)"
        for (let i = 0; i < annually.length; i++) {
            annually[i].style.display = "block"
        }
        for (let i = 0; i < monthly.length; i++) {
            monthly[i].style.display = "none"
        }
        checkBox.checked = true
    }
}

function showMonthly() {
    // Get the checkbox
    var checkBox = document.getElementById("toggle");
    let annually = document.getElementsByClassName("show-annually");
    let monthly = document.getElementsByClassName("show-montly");
    let whiteball = document.getElementsByClassName("checkbox-whiteball");

    if (checkBox.checked == true) {
        whiteball[0].style.transform = "translateX(0px)"
        for (let i = 0; i < annually.length; i++) {
            annually[i].style.display = "none"
        }
        for (let i = 0; i < monthly.length; i++) {
            monthly[i].style.display = "block"
        }
        checkBox.checked = false
    }
}