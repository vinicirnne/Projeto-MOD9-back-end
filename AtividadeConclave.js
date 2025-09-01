const entrada = require('prompt-sync')({ sigint: false });
let cardeais = []
for(let i=1; i <=5; i++){
    cardeal = entrada("Digite nome do cardeal " + i + ":")
    cardeais.push(cardeal);
}
cardeais.forEach((cardeal, i) => console.log(`${i + 1} - ${cardeal}`)); 

 do {
    //Variaveis para que ocorra a votação
    let c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0;
    //Estrutura de repetição para votação secreta
    for (let i = 1; i <= 5; i++) {
        let voto;
        while (true) {
            voto = entrada("Digite o voto para um cardeal(De 1 a 5, Numeros menores que 1 e maiores que 5 não serão computados!); ");
            if (voto >= 1 && voto <= 5)break; 
        }
        //Estrutura para adição de votos as variaveis da votação
        if (voto == '1') {
            c1++;
        } else if (voto == '2') {
            c2++;
        } else if (voto == '3') {
            c3++;
        } else if (voto == '4') {
            c4++;
        } else if (voto == '5') {
            c5++;
        } else if (voto == '') {
            console.log("Nenhum voto computado!")
        }
    }
    //Encerramento da votação
    let encerrar = entrada("Digite qualquer tecla para encerrar votação e ver o resultado; ")//Encerramento da votação
    if (encerrar.trim() !== "") {
        //Contagem de votos para decisão do vencendor ou se irá reiniciar votação
        if (c1 >= 4) {
            console.log("O PAPA ELEITO É; " + cardeais[0]); break;
        } else if (c2 >= 4) {
            console.log("O PAPA ELEITO É; " + cardeais[1]); break;
        } else if (c3 >= 4) {
            console.log("O PAPA ELEITO É; " + cardeais[2]); break;
        } else if (c4 >= 4) {
            console.log("O PAPA ELEITO É; " + cardeais[3]); break;
        } else if (c5 >= 4) {
            console.log("O PAPA ELEITO É; " + cardeais[4]); break;
        } else {
            console.log("NENHUM FOI ELEITO!!! reiniciando votação até sair um vencendor")
        }
    }
} while (true);