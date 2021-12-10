// Assignment code here
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "'", "/", "(", ":", ";", "<", ">", "=", "-", "_", "]", "[", "?", ".", "|"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var content = [];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var passwordLength = window.prompt("How many characters would you like?");
  console.log(passwordLength);
  let passwordValue = "";
  if (passwordLength < 8 || passwordLength > 128) {
    //inform user that password can not exceed these lengths
    window.alert("Password must be at least 8-128 charachters long");
    generatePassword();
  }

  upperCase = window.confirm("Would you like Uppercase letters?");
  lowerCase = window.confirm("Would you like lowercase letters?");
  specialCharacters = window.confirm("Would you like Special characters");
  numeric = window.confirm("Would you like Numebers?");

  if (upperCase) {
    //How to add empty array to contents arrays 
  }

  // do the same thing from line 27 to other arrays
}


//If yes add uppercase, then add uppercase
// if (upperCase === "yes" || upperCase === "YES") {
// window.confirm("YES add Uppercase letters")
// Confirm that uppercase was selected
// window.alert = ("Uppercase letters have been chosen")
//add in uppercase letters
// console.log(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], upperCase);
// }


// else {
// window.alert = (" Password is too short")
// }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);