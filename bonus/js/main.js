var arrayMine = [];
var arrayUser = [];
var continua = true;
var giusto = true;
var partita = true;
var partitaConclusa = true;
var contatore = 0;
var sentinella = 0;
var scelta = "";
var difficolta = "";
var min = 1;
var max = 0;

function startGame() {
    
    continua = true;
    while(continua)  {
        difficolta = prompt("A che difficoltà vuoi giocare? Facile, Medio o Difficile?").toLowerCase();
        if (difficolta == "facile" || difficolta == "medio" || difficolta == "difficile") {
            continua = false;
        } else {
            alert("Inserisci una risposta corretta");
        }
    }

    switch (difficolta) {
        case "facile":
        max = 100;
        break;

        case "medio":
        max = 80;
        break;

        case "difficile":
        max = 50;
        break;
    }
    
    while (partita) {
        
        if (partitaConclusa) {
            inizializeMine();

            //console.log(arrayMine.sort((a,b) => a-b));
        }


        partitaConclusa = false;



        giusto = true

        while (giusto) {
            giusto = askNumber();
            console.log(arrayUser);
        }

        var fortuna = campoMinato(arrayUser[arrayUser.length-1], arrayMine);

        if (fortuna) {
            alert("Che peccato hai calpestato una mina ed hai fatto " + contatore + " punti");
            partitaConclusa = true;
        } else {
            contatore++;
            sentinella++;
        }

        if (contatore == (max - 16)) {
            alert("Complimenti hai vinto, non hai calpestato nessuna mina, hai fatto punteggio massimo");
            partitaConclusa = true;
        }

        if (partitaConclusa) {
            var risposta = true
            while (risposta) {
                scelta = prompt("Vuoi fare un'altra partita? Y/N").toLowerCase();
                if (scelta != "y" && scelta != "n") {
                    alert("Inserisci la risposta corretta");
                } else {
                    risposta = false;
                }

            }

            if (scelta == "n") {
                partita = false;
            }

        }

    }
}


function campoMinato(utente, mine) {
    for (var i = 0; i < mine.length; i++) {
        if (utente == mine[i]) {
            return true;
        }
    }
    return false;
}

function inizializeMine() {
    arrayMine = [];
    arrayUser = [];
    contatore = 0;
    for (var i = 0; i < 16; i++) {
        var inserito = false;

        while (!inserito) {
            var numero = Math.floor(Math.random() * max + 1);
            if (!arrayMine.includes(numero)) {
                arrayMine.push(numero);
                inserito = true;
            }
        }

    }
}

function askNumber() {
    var numUtente = parseInt(prompt("Inserisci un numero"));
    if (isNaN(numUtente) || numUtente < 1 || numUtente > max) {
        alert("Devi inserire un valore corretto");
    } else {
        if (!arrayUser.includes(numUtente)) {
            arrayUser.push(numUtente);
            return false;
        } else {
            alert("hai già inserito " + numUtente);
        }
    }

    return true;
}
