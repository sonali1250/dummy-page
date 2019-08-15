
/*
Complete the code in Index.js in a way that 
the function should return a single object
 which has key as the parameter someKey and value as someValue

*/

let convertToKeyValuePair = (someKey,someValue)=>{
	let keyIamString = arguments[0];
	let valueIamString = arguments[1];
    //let keyIamString = someKey.keyIamString || defaultValue1;
    //let valueIamString = someValue.valueIamString || defaultValue2;
   // arguments.callee();
   //var keyIamString = Array.prototype.slice.apply(arguments);
   //var valueIamString = Array.prototype.slice.apply(arguments);
    let finalObject = {
    	[keyIamString] : valueIamString
    	//"valueIamString : 
    };
    
    	//arguments.callee();
    	//finalObject[keyIamString]=valueIamString;
  
       return finalObject;

    	
    	
    // this function should return a single object which has 
    //key as the value of someKey and value as someValue
};
console.log(convertToKeyValuePair());

//module.exports = {convertToKeyValuePair:convertToKeyValuePair};

