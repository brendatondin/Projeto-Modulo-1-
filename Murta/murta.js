function perguntaUm() {
    var resposta = (prompt("Digite a letra de sua resposta").toLowerCase());
    if (resposta == 'b') {
        alert('Umbridge se atrasa tentando abrir a porta da cabine, fazendo com que Murta ganhe tempo');
        location.assign("./pgDois.html")
    } else if (resposta == 'a') {
        alert('Umbridge se assusta e sai do banheiro correndo não dando tempo de distrai-la');
        location.assign("../Pagina Inicial/gameOver.html");
    } else {
        alert("Digite apenas a ou b");
    }
}

function perguntaDois() {
    var resposta = (prompt("Digite a letra de sua resposta").toLowerCase());
    if (resposta == 'a') {
        alert('Murta consegue pegar a varinha de Umbridge sem que ela veja e ja tranca a porta do banheiro');
        location.assign("./pgTres.html")
    } else if (resposta == 'b') {
        alert('Umbridge fica brava e sai do banheiro deixando murta chorando.');
        location.assign("../Pagina Inicial/gameOver.html");
    } else {
        alert("Digite apenas a ou b");
    }
}

function perguntaTres() {
    var resposta = (prompt("Digite a letra de sua resposta").toLowerCase());
    if (resposta == 'b') {
        alert('Murta aparece e procova Umbridge, fazendo ela correr pelo banheiro atrás de Murta. Murta ganha tempo o suficiente para Luna pegar os ingredientes da poção.');
        location.assign("../Pagina Inicial/vencer.html")
    } else if (resposta == 'a') {
        alert('Murta se esconde e com a gritaria de Umbridge pedindo ajuda para sair do banheiro faz aparecer gente que a ajudam sair do banheiro');
        location.assign("../Pagina Inicial/gameOver.html");
    } else {
        alert("Digite apenas a ou b");
    }
}

