/* exported isVowel */
function isVowel(char){
    var result = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    if(result.indexOf(char) > -1){
        return true;
    }
    else {
        return false;
    }
}

