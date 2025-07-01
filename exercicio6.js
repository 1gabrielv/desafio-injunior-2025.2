const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function scanner(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

async function main() {
  const num = parseInt(await scanner("Digite um número inteiro positivo (n): "));
  rl.close();

  if (isNaN(num) || num < 0) {
    console.log("Número inválido. Tente novamente.");
    return;
  }

  console.log(`Os ${num} primeiros termos da sequência de Fibonacci são:`);
  for (let i = 0; i < num; i++) {
    console.log(fibonacci(i));
  }
}

main();
