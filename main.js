"use strict"

const botaoTrocarImg = document.getElementById('trocar-fundo')
const body = document.getElementById('body')
let numero = 0
let  urlImg = ""

function trocarImg(){
    if(numero === 5){
        numero = 0
    }
    numero++
    urlImg = `url(./img/pais${numero}.jpg`
    document.documentElement.style.setProperty('--fundo', urlImg)
}

botaoTrocarImg.addEventListener('click', trocarImg)
