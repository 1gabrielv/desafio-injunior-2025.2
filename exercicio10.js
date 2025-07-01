const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function scanner(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    let fila = [];

    while (true) {
        for(let i = 0; i < fila.length; i++) {
            console.log(`${i + 1}° ${fila[i]}`);
        }

        console.log("Menu:")
        console.log("1. Novo Cliente");
        console.log("2. Atender Cliente");
        console.log("3. Sair");

        const opcao = await scanner("Escolha uma opção: ");
        if (opcao === '1') { 
            const nome = await scanner("Digite o nome do cliente: ");
            fila.push(nome);
        }else if (opcao === '2') {
            if (fila.length === 0) {
                console.log("Nenhum cliente na fila.");
            } else {
                const clienteAtendido = fila.shift();
                console.log("Cliente atendido: ${clienteAtendido}");
            }
        }else if (opcao === '3') {
            console.log("Saindo do sistema.");
            break;
        } else {
            console.log("Opção inválida. Tente novamente.");
        }
    }

    rl.close();
}

main();
