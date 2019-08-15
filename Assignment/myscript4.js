//let convertTemplate = (...input)=>{
  //  let key = input;
    //return key.join('');

//};
//alert(convertTemplate('aa',3));
 

 let allArrayLength = [];

let returnLength = (...input) =>{
    let newArrayLength = input;

    allArrayLength = allArrayLength.concat(newArrayLength)
    //console.log(allArrayLength)
    return allArrayLength;

    }

console.log(returnLength("a","b","c","d"));