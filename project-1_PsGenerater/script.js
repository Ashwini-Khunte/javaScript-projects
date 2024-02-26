let input = document.querySelector(".random-ps");
let generateBtn = document.querySelector(".gnerate-btn");
let copybtn = document.querySelector(".copyPs");

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let loweCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_-~><?/|}{][;,.";
const allChars = upperCase + loweCase + numbers + symbols;

const psLength = 12;

let generatePs = () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += loweCase[Math.floor(Math.random() * loweCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(psLength > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    input.value = password;
}

generateBtn.addEventListener("click", generatePs);

let copyPs = () => {
    input.select();
    document.execCommand("copy");
}

copybtn.addEventListener("click", copyPs);