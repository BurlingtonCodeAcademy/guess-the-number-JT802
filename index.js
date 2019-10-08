const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {

  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.");
  let min = 1;
  let max = 100;
  let guess = (Math.floor(Math.random() * (max - min + 1)) + min);
  
  let compQuestion = await ask("Is your secret number: " + guess + "?" + "\n(Y)es or (N)o \n"); {
  
  console.log(compQuestion);
    while (compQuestion === "N") {
      let higherLower = await ask("Is the number (H)igher or (L)ower: "); 
        if (higherLower === "H") {
          min = guess;
          guess = (Math.floor(Math.random() * (max - min + 1)) + min)
          compQuestion = await ask("Is your secret number: " + guess + "?" + "\n(Y)es or (N)o \n");
         } else if (higherLower === "L") {
          max = guess;
          guess = (Math.floor(Math.random() * (max - min + 1)) + min);
          compQuestion = await ask("Is your secret number: " + guess + "?" + "\n(Y)es or (N)o \n");;   
            }
          } process.exit();
        }
      }