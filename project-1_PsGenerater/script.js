const input = document.querySelector(".random-ps");
const generateBtn = document.querySelector(".gnerate-ps");
const copyBtn = document.querySelector(".copy-ps");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-=|}{[]:;'><?/.,"

const allChars = upperCase + lowerCase + numbers + symbols;

let psLength = 8;

let generatePs = () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];                                                

    for(let i = 0; i < psLength; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
    } 
    input.value = password;
}

generateBtn.addEventListener("click", generatePs);

async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (error) {
        console.error(error.message);
    }
}

copyBtn.addEventListener("click", () => copyText(input.value));