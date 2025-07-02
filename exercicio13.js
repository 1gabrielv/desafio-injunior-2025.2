const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function scanner(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

let time = [];  

async function adicionarJogador(nome, idade, posicao, pontuação) {
    let jogador = {
        nome: nome,
        idade: idade,
        posicao: posicao,
        pontuação: pontuação}
    time.push(jogador);
}

async function buscarPorPosicao(posicao) {
    const encontrados = time.filter(jogador => jogador.posicao === posicao);

    if (encontrados.length === 0) {
        console.log(`Nenhum jogador encontrado na posição: ${posicao}`);
    } else {
        console.log(`Jogadores encontrados na posição "${posicao}":`);
        for (let jogador of encontrados) {
            console.log(`- ${jogador.nome}, ${jogador.idade} anos, ${jogador.pontuação} pontos`);
        }
    }

    return encontrados;
}

async function listarTime(){
    for(jogador of time){
        console.log(jogador);
    }
}

async function calcularPontuacaoMedia(){
    let soma = 0;
        for(let jogadores of time){
            soma += jogadores.pontuação;
        }
    return soma / time.length;
}

async function main() {
    while (true) {
        console.log("Menu:");
        console.log("1 - Adicionar jogador");
        console.log("2 - Buscar por posição");
        console.log("3 - Listar time");
        console.log("4 - Calcular pontuação média");
        console.log("5 - Sair");

        let resposta = await scanner("Escolha uma opção: ");
        opcao = parseInt(resposta);

        switch (opcao) {
            case 1:
                let nome = await scanner("Digite o nome do jogador: ");
                let idade = parseInt(await scanner("Digite a idade do jogador: "));
                let posicao = await scanner("Digite a posição do jogador: ");
                let pontuacao = parseInt(await scanner("Digite a pontuação do jogador: "));
                await adicionarJogador(nome, idade, posicao, pontuacao);
                break;
            case 2:
                let posicaoBusca = await scanner("Digite a posição que deseja buscar: ");
                await buscarPorPosicao(posicaoBusca);
                break;
            case 3:
                console.log("Jogadores no time:");
                await listarTime();
                break;
            case 4:
                if (time.length === 0) {
                    console.log("Time vazio. Não é possível calcular média.");
                    rl.close();
                    return;
                }
                let media = await calcularPontuacaoMedia();
                console.log(`A pontuação média do time é: ${media}`);
                break;
            case 5:
                rl.close();
                return;
            default:
                console.log("Opção inválida, tente novamente!");
        }
    }
}


main();