const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function scanner(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function encontrarElementoUnico(array) {
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    let count = 0;

    for (let j = 0; j < array.length; j++) {
      if (array[j] === num) {
        count++;
      }
    }

    if (count === 1) {
      return num;
    }
  }
}

function main() {
  const numeros = [4, 1, 2, 1, 2];
  const unico = encontrarElementoUnico(numeros);
  console.log("Elemento único encontrado:", unico);
}

main();