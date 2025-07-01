const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function scanner(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  let frase = await scanner("Digite uma frase: ");
  let palavras = frase.split(" ");
  let palavrasInvertidas = [];

  for (let i = palavras.length - 1; i >= 0; i--) {
    palavrasInvertidas.push(palavras[i]);
  }

  if (palavrasInvertidas.join(" ") === palavras.join(" ")) {
    console.log("A frase é um palíndromo.");       
  } else {
    console.log("A frase não é um palíndromo.");
  }

  rl.close();
}

main();
