import { CICALISTA } from "./adat.js";

export function kepekDivbeHelyezese(LISTA){
    var txt = "";
    for (let index = 0; index < LISTA.length; index++) {
        txt += `<div class="kepek"><img src="${LISTA[index].kep}"></div>`;
    }
    return txt;
}

export function kivalasztott(LISTA){
    for (let index = 0; index < LISTA.length; index++) {
        LISTA[index].addEventListener("mouseenter", esemenykezelo);
        LISTA[index].addEventListener("mouseleave", esemenykezelo2);
        function esemenykezelo(){
            LISTA[index].classList.add("kiv");
        }
        function esemenykezelo2(){
            LISTA[index].classList.remove("kiv");
        }
    }

}

export function veletlenMegmutat(){
    const KIVALASZTOTT = document.querySelectorAll(".kivalasztott")[0];
    const GOMB = document.querySelector("button");
    const LI = document.querySelector("li");
    GOMB.addEventListener("click", esemenyKezelo);
    function esemenyKezelo(){
        var txt = "";
        var szam = Math.floor(Math.random() * 5);
        txt += `<li>${CICALISTA[szam].fajta}, ${CICALISTA[szam].leiras}</li>`;
        KIVALASZTOTT.innerHTML += txt;
    }
}