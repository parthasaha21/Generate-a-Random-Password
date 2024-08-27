const passwordBox = document.querySelector("#password");
const length = 12;
const genPasBtn = document.querySelector(".genPasBtn");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symb = "@#$&*+-/[]{}^()-=_|~";

const allcart = upperCase + lowerCase + number + symb;

function createPassword(){
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += upperCase[Math.floor(Math.random() * lowerCase.length)];
    password += upperCase[Math.floor(Math.random() * number.length)];
    password += upperCase[Math.floor(Math.random() * symb.length)];

    while(length > password.length){
        password += allcart[Math.floor(Math.random() * allcart.length)];
    }
    passwordBox.value = password;
}

genPasBtn.addEventListener("click",()=>{
    createPassword();
})

function copyPassword(){
    passwordBox.select();//select the ithems of password box (input box)
    document.execCommand("copy");
}

// function copyPassword() {
//     const passwordBox = document.getElementById("passwordBox"); // Assuming this is your password input element
//     navigator.clipboard.writeText(passwordBox.value).then(() => {
//         console.log("Password copied to clipboard.");
//     }).catch(err => {
//         console.error("Failed to copy password: ", err);
//     });
// }