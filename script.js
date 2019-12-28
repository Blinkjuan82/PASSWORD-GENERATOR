// const charCount = prompt("How long is your password? (Must be between 8 to 128 characters)");
// const capLett = confirm("Does it contain upper case letters?");
// const lowLet = confirm("Does it Contain lower case letters?");
// const numQues = confirm("Does it contain numeric characters?");
// const specSym = confirm("Does it contain special symbols?");

// const results = document.querySelector("#result");
const howLong = prompt("How long is your password? \n (Must be between 8 to 128 characters)");
        if(howLong >= 8 && howLong <= 128){
            const capLett = confirm ("Does it contain upper case letters?");
            const capChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            const capLength = capChar.length;
            const randChar = capChar[Math.floor(Math.random() * capLength)]
                console.log(randChar) 
                //the random capital letter is working!!!;
            if(capLett){
                const lowLett = confirm("Does it contain lower case letters?");
                const lowChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
                const lowLength = lowChar.length;
                const randLow = lowChar[Math.floor(Math.random()* lowLength)];
                console.log(randLow);
                //random low letter is working!!!
                if(lowLett){
                    const numQues = confirm("Does it contain numeric characters?");
                    const num =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
                    const numLength = num.length;
                    const randNum = num[Math.floor(Math.random() * numLength)];
                    console.log(randNum);
                    //random number working!!
                    if(numQues){
                        const symbolQues = confirm("Does it contain symbols??");
                        const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '=', '-'];
                        const symLength = symbols.length;
                        const randSym = symbols[Math.floor(Math.random()) * symLength];
                        console.log(randSym);
                        //random symbols working!!!
                    }
                }
            }
            
            


        }else{
            alert("Please enter the appropriate amount of characters!");
        }

// const num =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// const numLength = num.length;

//     for (i = 0; i < numLength; i++){
//         console.log(i);
//         if
//     }
// const capChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// const lowChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// const sym = ['!', '@', '#', '$', '%', '^', '&', '*', '=', '-'];



//im gonna come back to this and put a pin in it since it can be regraded; I just need to go over for loops it statements and strings again.
//once i get those thigns down I think I can do it
//I didn't wanna cheat and copy and paste something i found on the internet especially since i didnt
//understand it. 