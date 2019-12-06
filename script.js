const charCount = prompt("How long is your password? (Must be between 8 to 128 characters)");
const capLett = confirm("Does it contain upper case letters?");
const lowLet = confirm("Does it Contain lower case letters?");
const numQues = confirm("Does it contain numeric characters?");
const specSym = confirm("Does it contain special symbols?");

const results = document.querySelector("#result");
const num =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const capChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const sym = ['!', '@', '#', '$', '%', '^', '&', '*', '=', '-'];



//im gonna come back to this and put a pin in it since it can be regraded; I just need to go over for loops it statements and strings again.
//once i get those thigns down I think I can do it
//I didn't wanna cheat and copy and paste something i found on the internet especially since i didnt
//understand it. 