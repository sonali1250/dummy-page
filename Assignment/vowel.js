let removeVowelsAndSpaces = function(givenString){
   // start your code here.
    let outPut=givenString.replace(/[aeiou]/gi, '');
    //outPut=outPut.replace(' ','');
    outPut=outPut.replace('/ /g,'');
    return outPut;
};
module.exports = { removeVowelsAndSpaces: removeVowelsAndSpaces };

 

let removeVowelsAndSpaces = function(givenString) {
    let rafi = givenString.replace(/[aeiou]/ig,'');
    let key = rafi.replace(/\s /g);
    return `${key}`; 
} ;

 