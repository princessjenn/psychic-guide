// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// create arrays of lowercase letters, uppercase letters,
let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','+','~','|','}','{','[',']',':',';','?','>','<','.','/','-','='];
//create an array that is a combination of wanting uppercase and lowercase


//lets assume they say yes to numbers, and uppercase
 //now we have an array that contains all 26 uppercase letters, and all numbers 0 through 9
 let builtArray = []
 let generatedLetterIndex = Math.floor(Math.random() * builtArray.length)
//says I want this randomized value to come from the length of my built array.
//when we build an array like this we are able to then generate a random number and whatever number comes back, we just acces that value in the built array, and then we can essentially build onto a string with whatever values come back

//lets say the user wants to add numbers to their password, with lowercase
//[...builtArray,...lowerAlphabet]


// we want a confirmation that lowercase letters are allowed

function generatePassword() {

  if (confirm("Do you want your password to contain lowercase letters?")) //IF they confirm that they want lowercase letters
  {} while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);

   builtArray = [...upperAlphabet, ...numbers]
  } 

 

  let passwordLength = prompt("How many characters long do you want your password? Must be between 8 and 128 characters)");

  for (let i = 0; i < passwordLength; i++) { //whatever they decided, this is saying whatever value comes back, i want to loop function until THAT value outputs
    let generatedLetterIndex = Math.floor(Math.random() * builtArray.length);
    password += "x";

 return password;
//build a string based off of randomly selected values from an array
  }
}
  



let passwordLength;
do {
  passwordLength = prompt("How long do you want your password to be? (must be between 8 and 128 characters)");
} while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
