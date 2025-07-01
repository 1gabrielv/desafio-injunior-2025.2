const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function scanner(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    while (true) {
        let n = parseInt(await scanner("Digite um numero inteiro positivo: "));
        if (n < 0 || isNaN(n)) {
            console.log("Valor invalido. Tente novamente.");
            continue;
        }
        let fat = 0;
        for(let i = 1; i <= n; i++) {
            if (fat === 0) {
                fat = 1; 
            }
            fat *= i; 
        }
        console.log("Fatorial de " + n + " eh: " + fat);
        let x;
        while (true) {
        x = await scanner("Deseja calcular outro fatorial? (s/n): ");
        x = x.toLowerCase();

        if (x === 's' || x === 'n') {
            break;
        } else {
            console.log("Resposta inválida. Digite apenas 's' para sim ou 'n' para não.");
        }     
    }
    if (x === 'n') {
        break;
    }
}
    rl.close();
}

main();