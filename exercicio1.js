const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function scanner(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  let a = parseFloat(await scanner("Digite o valor de a: "));
  let b = parseFloat(await scanner("Digite o valor de b: "));
  let c = parseFloat(await scanner("Digite o valor de c: "));

  let delta = b * b - 4 * a * c;

  console.log("Raizes:");
  if (delta < 0) {
    console.log("Nao existem raizes reais.");
  } else if (delta === 0) {
    let raiz = -b / (2 * a);
    console.log("Raiz: " + raiz);
  } else {
    let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("Raiz 1: " + raiz1);
    console.log("Raiz 2: " + raiz2);
  }

  rl.close();
}

main();
