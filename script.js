const inputpassword = document.getElementById("input-password");
const errormessage = document.getElementById("error-message");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () =>{
    const password = inputpassword.value;
    
    if(password.length > 7) {
        errormessage.textContent = password;
        errormessage.style.color = "green";    
    } else {
        errormessage.textContent = "Password Terlalu Pendek";
        errormessage.style.color = "red";
    }
});