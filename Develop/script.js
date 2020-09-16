//declaration of global variables
var numChar = 0;
var includeSpecial = false;
var includeUpper = false;
var includeLower = false;
var includeNumber = false;
var lettersUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lettersDown = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChars = ["!", "?", "@", "#", "$", "%", "^", "&", "*"];
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charPool = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//collect input and generate password
function generatePassword() {
  getCriteria();

  //create and instantiate variables
  password = "";

  //populate charPool with all valid character types based on criteria
  if (includeSpecial) {
    charPool = charPool.concat(specialChars);
  }

  if (includeNumber) {
    charPool = charPool.concat(nums);
  }

  if (includeUpper) {
    charPool = charPool.concat(lettersUp);
  }

  if (includeLower) {
    charPool = charPool.concat(lettersDown);
  }

  //create password from eligable chars
  password = buildPassword();

  return (password);
}

//determine criteria for password creation
function getCriteria() {
  numChar = prompt("How many characters would you like the password to be? (8-128)");
  includeSpecial = confirm("Include special characters?");
  includeNumber = confirm("Include numbers?");
  includeUpper = confirm("Include uppercase letters?");
  includeLower = confirm("Include Lowercase Letters?");
}


function buildPassword() {
  var pass = "";

  for (var i = 0; i < numChar - 1; i++) {
    var randomIndex = Math.floor(Math.random() * charPool.length)

    var tempChar = charPool[randomIndex];
    pass = pass.concat(tempChar);

  }

  ensureCriteria(pass);
  return (pass);
}

//ensures all criteria are met
function ensureCriteria(pass) {
  var spec = false;
  var num = false;
  var up = false;
  var down = false;

  for (let i = 0; i < pass.length - 1; i++) {

    if (includeSpecial && spec !== true) {
      if (specialChars.includes(pass.charAt(i))) {
        spec = true;
      }
    } else {
      spec = true;
    }

    if (includeNumber && num !== true) {
      if (nums.includes(pass.charAt(i))) {
        num = true;
      }
    } else {
      num = true;
    }

    if (includeUpper && up !== true) {
      if (lettersUp.includes(pass.charAt(i))) {
        up = true;
      }
    } else {
      up = true;
    }

    if (includeLower && down !== true) {
      if (lettersDown.includes(pass.charAt(i))) {
        down = true;
      }
    } else {
      down = true;
    }
  }

  if (spec && num && up && down) {
    return;
  } else {
    console.log("fail");
    buildPassword();
  }
}

