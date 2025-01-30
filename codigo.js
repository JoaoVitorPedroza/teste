function verificar(){
var agora = new Date()
var data = agora.getFullYear()
var nascimento = document.getElementById('txtano')
var valor_nascimento = nascimento.value
var verificado = data - valor_nascimento
document.getElementById("res").textContent = verificado
//calculadora de idade, acima:
//definir o sexo, abaixo:
if(verificado < 14){
    document.getElementById("res3").textContent = ("anos de idade, criança")
    var faixa = 13
}
else if(verificado < 18 && verificado > 14){
    document.getElementById("res3").textContent = ("anos de idade, adolecente")
    var faixa = 14
}
else if(verificado > 18 && verificado < 60){
    document.getElementById("res3").textContent = ("anos de idade, adulto(a)")
    var faixa = 20
}
else{
    document.getElementById("res3").textContent = ("anos de idade, velho(a)")
    faixa = 60
}
var masculino = document.getElementById('masc')
var feminino = document.getElementById('fem')
var idade = data - valor_nascimento;
var img = document.createElement('img');
if (masculino.checked){
    document.getElementById("res2").textContent = ('homen com')
    console.log(masculino)
}
else if(feminino.checked){
    document.getElementById("res2").textContent = ('mulher com')
    console.log(feminino)
}
else{
    window.alert('ERRO! nenhum gênero selecionado')
    document.getElementById("res2").textContent = ("não selecionado")
}
//foto
var img = document.createElement('img');
img.setAttribute('id', 'foto');

if (masculino.checked) {
    if (idade >= 0 && idade < 14) {
        img.setAttribute('src', 'homen criança2.png');
    } else if (idade < 21) {
        img.setAttribute('src', 'homen adulto2.png');
    } else if (idade < 50) {
        img.setAttribute('src', 'homen adulto2.png');
    } else {
        img.setAttribute('src', 'homen velho2.png');
    }
} else if (feminino.checked) {
    if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'mulher criança2.png');
    } else if (idade < 21) {
        img.setAttribute('src', 'mulher adulta2.png');
    } else if (idade < 50) {
        img.setAttribute('src', 'mulher adulta2.png');
    } else {
        img.setAttribute('src', 'mulher velha2.png');
    }
} else {
    // nada digitado
}

var res = document.getElementById("res");
if (res) {
    res.appendChild(img);
} else {
    console.error("Elemento com ID 'res' não encontrado!");
}
}