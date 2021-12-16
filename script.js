// Assignment code here
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "'", "/", "(", ":", ";", "<", ">", "=", "-", "_", "]", "[", "?", ".", "|"];
let numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate")
let content = [];
let passwordValue = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();


  passwordText.value = password;


  function generatePassword() {
    var passwordLength = window.prompt("How many characters would you like?");
    console.log(passwordLength);

    if (passwordLength < 8 || passwordLength > 128) {
      //inform user that password can not exceed these lengths
      window.alert("Password must be at least 8-128 charachters long");
      generatePassword();

    }

    upperCasePrompt = window.confirm("Would you like Uppercase letters?");
    lowerCasePrompt = window.confirm("Would you like lowercase letters?");
    specialCharactersPrompt = window.confirm("Would you like Special characters");
    numericPrompt = window.confirm("Would you like Numebers?");

    console.log(upperCasePrompt);

    if (upperCasePrompt) {
      for (i = 0; i < upperCase.length; i++) {
        content.push(upperCase[i]);
      }
      console.log(content);

    }

    if (lowerCasePrompt) {
      for (i = 0; i < lowerCase.length; i++) {
        content.push(lowerCase[i]);
      }
      console.log(content);
    }

    if (specialCharactersPrompt) {
      for (i = 0; i < specialCharacters.length; i++) {
        content.push(specialCharacters[i]);
      }
      console.log(content);
    }

    if (numericPrompt) {
      for (i = 0; i < numeric.length; i++) {
        content.push(numeric[i]);
      }
      console.log(content);

    }
    passwordLength = content

    for (i = 0; i < passwordLength; i++) {
      var random = Math.floor(Math.random() * content.length);
      passwordValue += content[random];
    }
  }
  var passwordText = document.querySelector("#password");

}



// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword);

