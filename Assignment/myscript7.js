/*
Complete function multiplyMagic() to multiply two elements. 
The function should never return an error, irrespective of input passed and should return 1 in case 
of any kind of error or problem with input. Use default parameters for the same. 
sample input : multiplyMagic(2,3)
output - 6


*/

let multiplyMagic = (a,b=1)=>{
  // start your code here.
    if (Number.isInteger(a,b)) {
      return a*b;
  }

 else if(typeof(a)!=Number && typeof(b)!=Number) {
            
        	    return 1;
            }
            else {
                
            }

        //return a * b || 1;
};
//window.prompt("Enter first number");
//window.prompt("Enter second number");
//console.log(multiplyMagic(x,y));
console.log(multiplyMagic(2,3));