function isPalyndrome(word){
    let invertedWord = "";
    for(i=word.length -1 ; i>=0; i--){
        invertedWord += word[i];
    }
    return word===invertedWord
}



// ! ****************************************************************************************



let userChoiche = prompt("Scegli se giocare pari o dispari! (inserisci 'pari' o 'dispari')")
    while(userChoiche !=="pari" || userChoiche !=="dispari"){//entrambe le condizioni sono valide per entrare nel loop
        userChoiche = prompt("Scegli se giocare pari o dispari! (inserisci 'pari' o 'dispari')")
    }

let pariDispari;
    if(userChoiche==="pari"){
        pariDispari = true
    }else{
        pariDispari=false
    }

function makeRandomNum(){
    return Math.floor((Math.random()*5) +1);
}
let userNumber = Number.parseInt(prompt("Inserisci un numero da 1 a 5"),10)
    while(userNumber<1 || userNumber>5){//una sola condizione è valida per entrare nel loop
        userNumber = Number.parseInt(prompt("Inserisci un numero da 1 a 5. Inserisci un numero valido!"),10)
    }

const pcNumber = makeRandomNum()

function pariODispari(num1, num2, condizione){
    const somma = num1+num2
    let scelta 
    if(condizione){
        scelta = "pari"
    }else{
        scelta = "dispari"
    }
    
    if((somma%2===0 && scelta==="pari") || (somma%2===1 && scelta==="dispari")){
        console.log("Hai vinto!")
        console.log(`Hai giocato ${num1} e hai scelto ${scelta}. Il pc ha giocato ${num2}`)
        console.log(`La somma è ${somma}`)
    }else{
        console.log("Hai perso!")
        console.log(`Hai giocato ${num1} e hai scelto ${scelta}. Il pc ha giocato ${num2}`)
        console.log(`La somma è ${somma}`)
    }
}

pariODispari(userNumber, pcNumber, pariDispari);