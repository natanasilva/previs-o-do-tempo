let chave = "cebcd482eda57fa9a6714c1c2ba91885";

function mostrarNaTela(dados) {
    document.querySelector(".cidade").innerHTML =
        "Tempo em " + dados.name + " / " + dados.sys.country;
    document.querySelector(".descricao").innerHTML = dados.weather[0].description;
    document.querySelector(".icone").src =
        "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
    document.querySelector(".temperatura").innerHTML =
        "Temperatura agora " + Math.floor(dados.main.temp) + " ºC";
    document.querySelector(".umidade").innerHTML =
        "Umidade relativa do ar " + Math.floor(dados.main.humidity) + "%";
}

async function buscarCidade(cidade) {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br" +
        "&units=metric"
    ).then((resposta) => resposta.json());
    mostrarNaTela(dados);
}

function pegarCidade() {
    var cidade = document.getElementById("cidade").value;
    buscarCidade(cidade);
}

document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        var cidade = document.getElementById("cidade").value;
        buscarCidade(cidade);
    }
});

buscarCidade("Fortaleza");
