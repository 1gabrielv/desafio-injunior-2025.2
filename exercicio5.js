const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function scanner(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    const num = parseInt(await scanner("Digite um numero inteiro positivo: "));
    if(isNaN(num)) {
        console.log("Valor inválido. Tente novamente.");
        rl.close();
        return;
    }

    if(num % 3 == 0 && num % 5 == 0) {
        console.log("FizzBuzz");
    } else if(num % 5 == 0) {
        console.log("Buzz");
    }
    else if(num % 3 == 0) {
        console.log("Fizz");        
    }

        rl.close();
}

main();