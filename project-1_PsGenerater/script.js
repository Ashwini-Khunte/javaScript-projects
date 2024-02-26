const input = document.querySelector(".random-ps");
const generateBtn = document.querySelector(".gnerate-btn");
const copyBtn = document.querySelector(".copy-ps");


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefgfijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_=-'.;/><,.?{}[]|";

const allChars = upperCase + lowerCase + symbols + numbers;

let length = 12;

function generatePs() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    for(let i = 0; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    input.value = password;
}

generateBtn.addEventListener("click",generatePs);

// copyBtn.addEventListener("click", () => writeClipboardText(input.value));
// async function writeClipboardText(text) {
//   try {
//     await navigator.clipboard.writeText(text);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

copyBtn.addEventListener("click", () => copiedPs(input.value));

async function copiedPs(text) {
    try {
        await navigator.clipboard.writeText(input.value);
    } catch (error) {
        console.error(error.message);
    }
}
