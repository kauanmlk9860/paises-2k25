"use strict";

const botaoTrocarImg = document.getElementById('trocar-fundo');
const botaoBuscar = document.getElementById('buscar');
const inputPesquisa = document.getElementById('pesquisa');
const imagens = document.querySelectorAll(".imagem");

let indice = 0;
const paises = ["França", "Estados Unidos", "Brasil", "Zimbábue", "Suíça"];

// Trocar a imagem ativa
function trocarImg() {
    imagens.forEach(img => img.classList.remove("ativa")); // Remove a classe ativa de todas
    imagens[indice].classList.add("ativa"); // Ativa a imagem atual

    indice = (indice + 1) % imagens.length; // Alterna entre as imagens
}

// Pesquisar imagens
function pesquisarImagem() {
    const termo = inputPesquisa.value.toLowerCase();

    imagens.forEach((img, index) => {
        if (paises[index].toLowerCase().includes(termo) || termo === "") {
            img.classList.add("ativa");
        } else {
            img.classList.remove("ativa");
        }
    });
}

// Eventos
botaoTrocarImg.addEventListener('click', trocarImg);
botaoBuscar.addEventListener('click', pesquisarImagem);
inputPesquisa.addEventListener('input', pesquisarImagem);

// Exibir a primeira imagem automaticamente
trocarImg();
