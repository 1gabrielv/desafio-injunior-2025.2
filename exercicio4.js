const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function scanner(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    let valor = parseFloat(await scanner("Digite um valor monetario em reais: "));
    if(isNaN(valor) || valor < 0) {
        console.log("Valor inválido. Tente novamente.");
        rl.close();
        return;
    }

    console.log("Valor em dolares: " + (valor / 5.7).toFixed(2));
    console.log("Valor em euros: " + (valor / 6.1).toFixed(2));

        rl.close();
}

main();