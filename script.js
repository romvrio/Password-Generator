// Assignment code here
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "'", "/", "(", ":", ";", "<", ">", "=", "-", "_", "]", "[", "?", ".", "|"];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(generatePassword) {
  //repeat and execute until conditions are met
  while (passwordText <= 8 && passwordText >= 128) {
    //inform user that password can not exceed these lengths
    window.alert = ("Password must be at least 8-128 charachters long");
  }

  // Let user know what password can in include
  if (generateBtn = "click") {
    window.alert = ("Password can include " + upperCase + lowerCase + specialCharacters + numeric);
  }

  // If yes add uppercase, then add uppercase
  if (upperCase === "yes" || upperCase === "YES") {
    window.confirm("YES add Uppercase letters")
    // Confirm that uppercase was selected
    window.alert = ("Uppercase letters have been chosen")
    // add in uppercase letters
    console.log(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], upperCase);
  }

  else {
    window.alert = (" Password is too short")
  }
  var passwordText = document.querySelector("#password");
  var password = generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button
for (var i = 0; i < generateBtn.length; i++) {
  generateBtn.addEventListener("click", writePassword);
}
