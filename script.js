// Assignment Code
var generateBtn = document.querySelector("#generate");
//Defines the character parameters and the resultant password as empty strings to start
var characters='';
var result=''

    
// Write password to the #password input
function writePassword() {
  //Successive prompts to define the users chosen parameters
  var passwordlen=window.prompt("Please enter a length between 8 and 128 characters");
  var passwordlower=window.prompt("Include lowercase characters? (enter y or n)");  
  var passwordupper=window.prompt("include upper case characters? (enter y or n)");
  var passwordnum=window.prompt("Include numeric characters? (enter y or n)");
  var passwordspecial=window.prompt("Include special characters? (enter y or n)");
  //Variables defining the strings to be added to the character string
  var alpha='abcdefghijklmnopqrstuvwxyz';
  var alphaUpper='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var num = '1234567890';
  var special='!@#$%^&*()?'
  var passwordText = document.querySelector("#password");
  //checking user input and concantinating the character string based on that input
  if (passwordupper=='y'){characters+=alphaUpper};
  if (passwordnum=='y'){characters+=num};
  if (passwordspecial=='y'){characters+=special};
  if (passwordlower=='y'){characters+=alpha};
  //For loop to generate password as result variable
  for ( var i = 0; i < passwordlen; i++ ) {
  result += characters.charAt(Math.floor(Math.random() * characters.length))};
  //displaying the password to the html page
  passwordText.value = result;
  //resetting characters and result to empty strings so new parameters can be selected
  characters='';
  result='';
}

// Add event listener to generate button
generateBtn.addEventListener("click", (writePassword));
