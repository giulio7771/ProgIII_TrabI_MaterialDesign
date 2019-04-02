var limparButton = document.querySelector('#limpar');
var nome = document.querySelector('#nome');
var idade = document.querySelector('#idade');
var sexo = document.querySelector('#sexo');
var modalidade = document.querySelector('#modalidade');
var posicao = document.querySelector('#posicao');
limparButton.onclick = function () {
    nome.value = "";
    idade.value = "";
    sexo.value = "";
    posicao.value = "";
    modalidade.value = "";
}