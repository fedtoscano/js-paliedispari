function isPalyndrome(word){
    let invertedWord = "";
    for(i=word.length -1 ; i>=0; i--){
        invertedWord += word[i];
    }
    
    return word===invertedWord
}

// let userChoiche = prompt("Scegli se giocare pari o dispari! (inserisci 'pari' o 'dispari'")
//     while(userChoiche==="pari"||userChoiche==="dispari"){
//         userChoiche = prompt("Scegli se giocare pari o dispari! (inserisci 'pari' o 'dispari'")
//     }

// let pariDispari;
//     if(userChoiche==="pari"){
//         pariDispari = true
//     }else{
//         pariDispari=false
//     }

// const userNumber = Number.parseInt(prompt("Inserisci un numero da 1 a 5"),10)