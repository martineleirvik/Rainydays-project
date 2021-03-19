const form = document.querySelector(".checkout3");

const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#nameerror");

const cardnumber = document.querySelector("#cardnumber");
const cardnumberError = document.querySelector("#cardnumbererror");

const month = document.querySelector("#month");
const monthError = document.querySelector("#montherror");

const year = document.querySelector("#year");
const yearError = document.querySelector("#yearerror");

const CVC = document.querySelector("#CVC");
const CVCError = document.querySelector("#CVC-error");


function validateForm() {


    if (checkLength(fullName.value, 0) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (checkLength(cardnumber.value, 15) === true) {
        cardnumberError.style.display = "none";
    } else {
        cardnumberError.style.display = "block";
    }

    if (checkLength(year.value, 3) === true) {
        yearError.style.display = "none";
    } else {
        yearError.style.display = "block";
    }

    if (checkLength(CVC.value, 2) === true) {
        CVCError.style.display = "none";
    } else {
        CVCError.style.display = "block";
    }

}

form.addEventListener("submit", validateForm) 


function checkLength(value, len) {
    if (value.trim().length > len){
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}


form.onsubmit = function () {
    event.preventDefault();

    console.log(event);

    const fullName = document.querySelector("#name");
    console.log(fullName.value)

    const email = document.querySelector("#email");
    console.log(email.value)

    const text = document.querySelector("#text");
    console.log(text.value)
};



