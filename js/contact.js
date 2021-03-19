const form = document.querySelector(".box-form");

const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#nameerror");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailerror");

const text = document.querySelector("#text");
const textError = document.querySelector("#texterror");


function validateForm() {


    if (checkLength(fullName.value, 0) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(text.value, 9) === true) {
        textError.style.display = "none";
    } else {
        textError.style.display = "block";
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


const message = document.querySelector("#message");

function submitForm(event) {
    message.innerHTML = `<div class="submitted"> Your message has been sent successfully!</div>`;
    form.reset();
}

form.addEventListener ("submit", submitForm);
