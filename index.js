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
  const min = 1;
  const max = 100;
  const guess = (Math.floor(Math.random() * (max - min + 1)) + min);
  humanResponse = ("");
  
  let compQuestion = await ask("Is your secret number: " + guess + "?" + "\n(Y)es or (N)o \n"); {
  
  console.log(compQuestion);
    while (compQuestion = await ask("Is your secret number: " + guess + "?" + "\n(Y)es or (N)o \n")) { 
        if (humanResponse = await ask("Is it ... " + guess + "?")) {
            return console.log(compQuestion);
         } else {
            return console.log("I did it! I did it! Computers rule and humans drool.");   
            }
          } process.exit();
        }
      }