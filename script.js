// password characters 
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-=_+/`~[]{}";

// declare variables
const passwordOutput = document.getElementById("passwordOutput");
const length = document.getElementById("length");
const numbersOption = document.getElementById("numbers");
const symbolsOption = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");

// set password parameters 
generateBtn.addEventListener("click", () => {
  let characters = alphabet;
  numbersOption.checked ? (characters += numbers) : "";
  symbolsOption.checked ? (characters += symbols) : "";
  passwordOutput.value = generatePassword(length.value, characters);
});

// creates random password based on the set parameters (length, numbers, symbols)
const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

// copy password function
function copy() {
  var copyText = document.querySelector("#passwordOutput");
  copyText.select();
  document.execCommand("copy");
  alert("Password Copied!");
}

document.querySelector("#copy").addEventListener("click", copy);

// slider function 
let slider = document.getElementById("length");
let output = document.getElementById("display");
output.innerHTML = slider.value;

slider.oninput = function () {
	output.innerHTML = this.value; 
}