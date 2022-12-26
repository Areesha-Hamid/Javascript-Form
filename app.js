let firstName = document.querySelector("#fname");
let lastName = document.querySelector("#lname");
let email = document.querySelector("#email");
let password = document.querySelector("#pass");
let confirmPassword = document.querySelector("#pass-confirm");
let firstNameError = document.querySelector(".error")
let firstNameSuccess = document.querySelector(".success")
let lastNameError = document.querySelector(".error1")
let lastNameSuccess = document.querySelector(".success1")
let emailError = document.querySelector(".error2")
let emailSuccess = document.querySelector(".success2")
let passwordError = document.querySelector(".error3")
let passwordSuccess = document.querySelector(".success3")
let passConfirmError = document.querySelector(".error4")
let passConfirmSuccess = document.querySelector(".success4")
let form = document.querySelector("form")
let modal = document.querySelector(".modal")
let modalCloseBtn = document.querySelector("#close-btn")
let passVisibility = document.querySelector(".fa-eye")

let nameRegex = /^[a-zA-Z]{3,20}$/;
let emailRegex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

let passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
firstName.addEventListener("keydown", (e) => {
    let checker = nameRegex.test(e.target.value);
    if(checker){
        firstNameSuccess.style.display = "block";
        firstNameError.style.display = "none";
    }
    else if(e.target.value == ""){
        firstNameSuccess.style.display = "none";
        firstNameError.style.display = "none";
    }
    else{
        firstNameSuccess.style.display = "none";
        firstNameError.style.display = "block";
    }

})

lastName.addEventListener("keydown", (e) => {
    console.log(e.target.value)
    let checker = nameRegex.test(e.target.value);
    if(checker){
        lastNameSuccess.style.display = "block";
        lastNameError.style.display = "none";
    }
    else if(e.target.value == ""){
        lastNameSuccess.style.display = "none";
        lastNameError.style.display = "none";
    }
    else{
        lastNameSuccess.style.display = "none";
        lastNameError.style.display = "block";
    }
})

email.addEventListener("keydown", (e) => {
    let checker = emailRegex.test(e.target.value);
    if(checker){
        emailSuccess.style.display = "block";
        emailError.style.display = "none";
    }
    else if(e.target.value == ""){
        emailSuccess.style.display = "none";
        emailError.style.display = "none";
    }
    else{
        emailSuccess.style.display = "none";
        emailError.style.display = "block";
    }
})

password.addEventListener("keydown", (e) => {
    console.log(e.target.value)
    let checker = passwordRegex.test(e.target.value);
    if(checker){
        passwordSuccess.style.display = "block";
        passwordError.style.display = "none";
    }
    else if(e.target.value == ""){
        passwordSuccess.style.display = "none";
        passwordError.style.display = "none";
    }
    else{
        passwordSuccess.style.display = "none";
        passwordError.style.display = "block";
    }
})

confirmPassword.addEventListener("keydown", (e) =>{
    if(e.target.value === password.value){
        passConfirmError.style.display = "none";
        passConfirmSuccess.style.display = "block";
    }
    else if(e.target.value == ""){
        passConfirmSuccess.style.display = "none";
        passConfirmError.style.display = "none";
    }
    else{
        passConfirmError.style.display = "block";
        passConfirmSuccess.style.display = "none";
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
})

modalCloseBtn.addEventListener("click", () => {
    modal.style.display = "none";
})


passVisibility.addEventListener("click", () => {
    let type = password.getAttribute('type')
    if(type === "password"){
        password.setAttribute('type', "text");
        confirmPassword.setAttribute('type', "text")
        passVisibility.style.color = "#4682b4"
    }
    else{
        password.setAttribute('type', "password");
        confirmPassword.setAttribute('type', "password")
        passVisibility.style.color = "#FDF5E6"

    }
})