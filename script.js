// Assignment code here
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "'", "/", "(", ":", ";", "<", ">", "=", "-", "_", "]", "[", "?", ".", "|"];
let numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  function generatePassword() {
    var passwordLength = window.prompt("How many characters would you like?");
    console.log(passwordLength);
    let passwordValue = "";
    let content = [];

    if (passwordLength < 8 || passwordLength > 128) {
      //inform user that password can not exceed these lengths
      window.alert("Password must be at least 8-128 charachters long");
      generatePassword();
    }

    upperCase = window.confirm("Would you like Uppercase letters?");
    lowerCase = window.confirm("Would you like lowercase letters?");
    specialCharacters = window.confirm("Would you like Special characters");
    numeric = window.confirm("Would you like Numebers?");

    if (passwordValue = upperCase) {
      content = upperCase[Math.floor(Math.random() * upperCase.length - 1)]
      console.log(content);
      passwordLength = passwordValue;
    }

    if (passwordValue = lowerCase) {
      content = lowerCase[Math.floor(Math.random() * lowerCase.length - 1)]
      console.log(content);
    }

    if (passwordValue = specialCharacters) {
      content = specialCharacters[Math.floor(Math.random() * specialCharacters.length - 1)]
      console.log(content);
    }

    if (passwordValue = numeric) {
      content = numeric[Math.floor(Math.random() * numeric.length - 1)]
      console.log(content);

    }
    passwordLength = content

    for (i = 0; i < passwordLength; i++) {
      var random = Math.floor(Math.random() * content.length);
      passwordValue += content[random];
    }
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

