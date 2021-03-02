// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters='';
var result='';
function passwordlow() {var passwordlower=window.prompt("Include lowercase characters? (enter y or n)")
    if (passwordlower !=='y'|| passwordlower!=='n'){window.alert("invalid entry, please try again");passwordlower='';passwordlow()}};;
// Write password to the #password input
function writePassword() {
  var passwordlen=window.prompt("Please enter a length between 8 and 128 characters");
  passwordlow();
    
  var passwordupper=window.prompt("include upper case characters? (enter y or n)");
  var passwordnum=window.prompt("Include numeric characters? (enter y or n)");
  var passwordspecial=window.prompt("Include special characters? (enter y or n)");
  var alpha='abcdefghijklmnopqrstuvwxyz';
  var alphaUpper='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  var passwordText = document.querySelector("#password");
  if (passwordupper=='y'){characters+=alphaUpper};
  if (passwordnum=='y'){characters+='1234567890'};
  if (passwordspecial=='y'){characters+='!@#$%^&*()?'};
  if (passwordlower=='y'){characters+=alpha};
  for ( var i = 0; i < passwordlen; i++ ) {
  result += characters.charAt(Math.floor(Math.random() * characters.length))};
  passwordText.value = result;
  characters='';
  result='';
}

// Add event listener to generate button
generateBtn.addEventListener("click", (writePassword));
