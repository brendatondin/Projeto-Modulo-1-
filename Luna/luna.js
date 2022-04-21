function perguntaUm() {
    var resposta = (prompt("Digite a letra de sua resposta").toLowerCase());
    if (resposta == 'b') {
        alert('Luna fica no dormitório e usa a capa de invisibilidade de Harry Potter para conseguir a chave do armario da sala de Umbridge.');
        location.assign("./pgDois.html")
    } else if (resposta == 'a') {
        alert('Professor Snape não deixa Luna ir ao banheiro e não consegue aproveitar a distração da Murta.');
        location.assign("../Pagina Inicial/gameOver.html");
    } else {
        alert("Digite apenas a ou b");
    }
}

function perguntaDois() {
    var resposta = (prompt("Digite a letra de sua resposta").toLowerCase());
    if (resposta == 'b') {
        alert('Luna faz com que todos os quadros da parede caiam e assuste os alunos e ela aproveita e sai correndo sem ninguem ver.');
        location.assign("./pgTres.html")
    } else if (resposta == 'a') {
        alert('Porque Luna ficou parada os alunos conseguiram encontra-la');
        location.assign("../Pagina Inicial/gameOver.html");
    } else {
        alert("Digite apenas a ou b");
    }
}

function perguntaTres() {
    var resposta = (prompt("Digite a letra de sua resposta").toLowerCase());
    if (resposta == 'a') {
        alert('Luna da de cara com a porta da sala secreta e consegue preparar a poção tranquila.');
        location.assign("../Pagina Inicial/vencer.html")
    } else if (resposta == 'b') {
        alert('Ao correr, ela da de cara com Argus Filch e cai no chão, derrubando os ingredientes e a capa de invisibilidade. que são todos confiscados.');
        location.assign("../Pagina Inicial/gameOver.html");
    } else {
        alert("Digite apenas a ou b");
    }
}