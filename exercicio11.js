const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function scanner(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    let vetor = [];
    const tamanho = parseInt(await scanner("Digite o tamanho do vetor: "));
    if (isNaN(tamanho) || tamanho <= 0) {
        console.log("Valor inválido. Tente novamente.");
        rl.close();
        return;
    }

    for(let i = 0; i < tamanho; i++) {
        const valor = parseInt(await scanner(`Digite o valor para a posição ${i + 1}: `));
        if (isNaN(valor)) {
            console.log("Valor inválido. Tente novamente.");
            i--;
        } else {
            vetor.push(valor);
        }
    }

    let x = 0;
    for(let i = 0; i < vetor.length - 1; i++) {
        if(vetor[i] < vetor[i + 1]) {
            x++;
        }
    }

    console.log(`${x} numeros estao em ordem crescente.`);
    
    rl.close();
}

main();