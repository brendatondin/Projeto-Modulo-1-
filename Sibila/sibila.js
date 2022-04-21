function perguntaUm() {
    var resposta = (prompt("Digite a letra de sua resposta").toLowerCase());
    if (resposta == 'b') {
        alert('Ela consegue encontrar Umbridge e sentam na sua sala para conversar.');
        location.assign("./pgDois.html")
    } else if (resposta == 'a') {
        alert('Argo Filch recebe a carta e joga fora.');
        location.assign("../Pagina Inicial/gameOver.html");
    } else {
        alert("Digite apenas a ou b");
    }
}

function perguntaDois() {
    var resposta = (prompt("Digite a letra de sua resposta").toLowerCase());
    if (resposta == 'a') {
        alert('Apesar de estar certa, Sibila sabe que precisa ganhar a confiança de Umbridge e seu pedido de desculpas funciona muito bem.');
        location.assign("./pgTres.html")
    } else if (resposta == 'b') {
        alert('Umbridge se irrita com a pergunta e grita com Sibila, mandando-a se retirar e nunca mais voltar.');
        location.assign("../Pagina Inicial/gameOver.html");
    } else {
        alert("Digite apenas a ou b");
    }
}

function perguntaTres() {
    var resposta = (prompt("Digite a letra de sua resposta").toLowerCase());
    if (resposta == 'b') {
        alert('Sibila começa a fazer perguntas sobre os quadros da sala de Umbridge e a faz virar de costas, dando tempo de colocar a poção no copo de suco de abóbora de Umbridge, o que a faz confessar de todos os seus crimes e nessa hora o Ministro da Magia e Dumbledore tiram a capa de invisibilidade e prendem Umbridge.');
        location.assign("../Pagina Inicial/vencer.html")
    } else if (resposta == 'a') {
        alert('Apesar da boa conversa Umbridge fica muito suspeitra com a bebida servida e nega o chá. o plano não funciona.');
        location.assign("../Pagina Inicial/gameOver.html");
    } else {
        alert("Digite apenas a ou b");
    }
}