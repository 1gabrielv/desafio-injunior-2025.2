const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function scanner(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function verificarIdades(anosNascimento) {
    const anoAtual = parseInt(await scanner("Digite o ano atual: "));
    if(isNaN(anoAtual) || anoAtual < 0) {
        console.log("Ano inválido. Tente novamente.");
        rl.close();
        return;
    }

    let idades = [];
    for (let i = 0; i < anosNascimento.length; i++) {
        const idade = anoAtual - anosNascimento[i];
        const status = idade >= 18 ? "maior" : "menor";
        idades.push(status);
        console.log(`Pessoa ${i + 1}: ${status === "maior" ? "Maior de idade" : "Menor de idade"}`);
    }
    rl.close();
    return idades;
}

async function main() {
    const anos = [2000, 2010, 1995, 2020];
    const resultado = await verificarIdades(anos);
    console.log("Array retornado:", resultado);
}

main();