// // Definindo os naipes e valores das cartas
// const naipes = ['Espadas', 'Copas', 'Ouros', 'Paus'];
// const valores = ['Ás', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valete', 'Dama', 'Rei'];

// // Criando um baralho com todas as combinações de naipes e valores
// const baralho = [];
// for (const valor of valores) {
//     for (const naipe of naipes) {
//         baralho.push({ valor, naipe });
//     }
// }

// // Função para embaralhar um array usando o algoritmo Fisher-Yates
// function embaralhar(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// // Função para distribuir cartas para os jogadores
// function distribuirCartas(baralho, numCartas) {
//     return baralho.splice(0, numCartas);
// }

// // Número de jogadores
// const numJogadores = 4;

// // Embaralhando o baralho
// embaralhar(baralho);

// // Distribuindo 5 cartas para cada jogador
// const maos = [];
// for (let i = 0; i < numJogadores; i++) {
//     maos.push(distribuirCartas(baralho, 5));
// }

// // Construindo as mensagens das mãos dos jogadores
// let mensagem = '';
// for (let i = 0; i < maos.length; i++) {
//     mensagem += `Mão do Jogador ${i + 1}:\n`;
//     for (const carta of maos[i]) {
//         mensagem += `${carta.valor} de ${carta.naipe}\n`;
//     }
//     mensagem += '\n';
// }

// // Exibindo as mãos dos jogadores usando alert
// alert(mensagem);

//Ajuda do java SCRIPT//









// SCRIPT 2









// // Definindo os naipes e valores das cartas
// const naipes = ['Espadas', 'Copas', 'Ouros', 'Paus'];
// const valores = ['Ás', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valete', 'Dama', 'Rei'];

// // Criando um baralho com todas as combinações de naipes e valores
// const baralho = [];
// for (const valor of valores) {
//     for (const naipe of naipes) {
//         baralho.push({ valor, naipe });
//     }
// }

// // Função para embaralhar um array usando o algoritmo Fisher-Yates
// function embaralhar(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// // Função para distribuir cartas para os jogadores
// function distribuirCartas(baralho, numCartas) {
//     return baralho.splice(0, numCartas);
// }

// // Número de jogadores
// const numJogadores = 4;

// // Embaralhando o baralho
// embaralhar(baralho);

// // Distribuindo 5 cartas para cada jogador
// const maos = [];
// for (let i = 0; i < numJogadores; i++) {
//     maos.push(distribuirCartas(baralho, 5));
// }

// // Construindo as mensagens das mãos dos jogadores
// let mensagem = '';
// for (let i = 0; i < maos.length; i++) {
//     mensagem += `Mão do Jogador ${i + 1}:\n`;
//     for (const carta of maos[i]) {
//         mensagem += `${carta.valor} de ${carta.naipe}\n`;
//     }
//     mensagem += '\n';
// }

// // Exibindo as mãos dos jogadores usando alert
// alert(mensagem);

//Auxílio do java SCRIPT//


4




















// <!-- EXERCÍCIO 5:
// João está com muitas tarefas para fazer durante o dia. Crie um programa que permita que
// João adicione suas tarefas a uma lista. Ao final do dia, exiba todas as tarefas que ele precisa
// realizar. -->

// <!-- <h1>Lista de afazeres do João</h1>

    // <label for="item">Nova atividade:</label>
    // <input type="text" id="item">
    // <button onclick="adicionarItem()">Adicionar</button>
//  <button onclick="mostrarListadafazeres()">Mostrar Lista de Afazeres</button>

{/* <div id="output"></div>  */}

{/* <script> */}
    // let listadafazeres = [];
    // let outputDiv = document.getElementById("output");

    // function adicionarItem() {
        // let novoItem = document.getElementById("item").value;
        // listadafazeres.push(novoItem);
        // outputDiv.innerHTML = "Item adicionado à Lista: " + novoItem;
    // }

    // function removerItem() {
        // let itemRemover = document.getElementById("itemRemover").value;
        // let index = listadafazeres.indexOf(itemRemover);

        // if (index !== -1) {
            // listadafazeres.splice(index, 1);
            // outputDiv.innerHTML = "Item removido da Lista: " + itemRemover;
        // } else {
            // outputDiv.innerHTML = "Item não encontrado na lista.";
        // }
    // }

    // function mostrarListadafazeres() {
        // if (listadafazeres.length === 0) {
            // outputDiv.innerHTML = "A lista está vazia.";
        // } else {
            // let listaItens = "Itens da Lista:<br>";
            // for (let i = 0; i < listadafazeres.length; i++) {
                // listaItens += (i + 1) + ". " + listadafazeres[i] + "<br>";
            // }
            // outputDiv.innerHTML = listaItens;
        // }
    // }
// </script> -->

//  <!-- 

//   5 pt 2

// <!-- EXERCÍCIO 5 PT 2 HTML:
// João está com muitas tarefas para fazer durante o dia. Crie um programa que permita que
// João adicione suas tarefas a uma lista. Ao final do dia, exiba todas as tarefas que ele precisa
// realizar. -->

// <!-- <h1>Lista de afazeres do João</h1>

//     <label for="item">Nova atividade:</label>
//     <input type="text" id="item">
//     <button onclick="adicionarItem()">Adicionar</button>


// <!-- Exercicico 10 -->


// <!-- EXERCÍCIO 10: Playlist de Músicas

//  Paulo está organizando sua playlist de músicas para uma festa. Crie um programa que permita
//  que ele adicione músicas à sua playlist usando um array. No final, exiba a lista completa de
//  músicas -->


// <!-- <h1>Playlist das Músicas</h1>
//     <br>

//     <label for="item">Nova Música:</label>
//     <input type="text" id="item">
//     <button onclick="adicionarItem()">Adicionar</button>



//     <button onclick="mostrarPlaylist()">Mostrar Playlist</button>

//     <div id="output"></div>


//     <script>
//         let listadafazeres = [];
//         let outputDiv = document.getElementById("output");

//         function adicionarItem() {
//             let novoItem = document.getElementById("item").value;
//             listadafazeres.push(novoItem);
//             outputDiv.innerHTML = "Música adicionada à Lista: " + novoItem;
//         }

//         function removerItem() {
//             let itemRemover = document.getElementById("itemRemover").value;
//             let index = listadafazeres.indexOf(itemRemover);

//             if (index !== -1) {
//                 listadafazeres.splice(index, 1);
//                 outputDiv.innerHTML= "Item removido da Lista: " + itemRemover;
//             } else {
//                 outputDiv.innerHTML = "Item não encontrado na lista.";
//             }
//         }

//         function mostrarPlaylist() {
//             if (listadafazeres.length === 0) {
//                 outputDiv.innerHTML = "A lista está vazia.";
//             } else {
//                 let listaItens = "Itens da Lista:<br>";
//                 for (let i = 0; i < listadafazeres.length; i++) {
//                     listaItens += (i + 1) + ". " + listadafazeres[i] + "<br>";
//                 }
//                 outputDiv.innerHTML = listaItens;
//             }
//         }
//     </script>



//     <style>
//         input {
//             border-radius: 100px;
//             margin: 400px 0px 0px 750px;

//         }

//         button {
//             border-radius: 100px;
//             font-size: larger;

//             font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
//         }

//         #item {
//             font-size: larger;
//         }

//         label {
//             position: absolute;
//             margin: 405px 0px 0px 650px;

//         }

//         h1 {
//             position: absolute;
//             margin: 345px 0px 0px 790px;
//             font-size: 300%;
//             color: rgb(0, 0, 0);
//         }

//         body {
//             font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
//         }


// <!-- Exercicio 9 --> 

// #include <iostream>
// #include <string>

// int main() {
//     const int MAX_ALUNOS = 100; // Número máximo de alunos
//     std::string nomes[MAX_ALUNOS]; // Array para armazenar nomes
//     int idades[MAX_ALUNOS]; // Array para armazenar idades
//     int numeroAlunos; // Número atual de alunos cadastrados

//     std::cout << "Quantos alunos deseja cadastrar? ";
//     std::cin >> numeroAlunos;

//     // Captura os nomes e idades dos alunos
//     for (int i = 0; i < numeroAlunos; ++i) {
//         std::cout << "Digite o nome do aluno " << i + 1 << ": ";
//         std::cin >> nomes[i];
        
//         std::cout << "Digite a idade do aluno " << i + 1 << ": ";
//         std::cin >> idades[i];
//     }

//     // Exibe a lista de alunos com suas idades
//     std::cout << "\nLista de Alunos:\n";
//     for (int i = 0; i < numeroAlunos; ++i) {
//         std::cout << "Nome: " << nomes[i] << " - Idade: " << idades[i] << std::endl;
//     }

//     return 0;
// }

// Exercicio 8 

// #include <iostream>
// #include <string>

// int main() {
//     const int DIAS_DA_SEMANA = 7;
//     std::string dias[DISTINCT_INTS] = { "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado" };
//     int temperaturas[DIAS_DA_SEMANA];

//     std::cout << "Digite a previsão de temperatura para a semana:\n";

//     for (int i = 0; i < DIAS_DA_SEMANA; ++i) {
//         std::cout << "Temperatura para " << dias[i] << ": ";
//         std::cin >> temperaturas[i];
//     }

//     std::cout << "\nPrevisão Semanal de Temperatura:\n";

//     for (int i = 0; i < DIAS_DA_SEMANA; ++i) {
//         std::cout << dias[i] << ": " << temperaturas[i] << "°C" << std::endl;
//     }

//     return 0;
// }














































































