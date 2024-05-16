function isPalyndrome(word){
    let invertedWord = "";
    for(i=word.length -1 ; i>=0; i--){
        invertedWord += word[i];
    }
    
    if(word===invertedWord){
        return true
    }else{
        return false
    }
}