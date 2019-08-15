/*var factorial = function(num) //FUNCTION NAME IS FACTORIAL

{

var result = num ; //ASSIGNING VALUE OF num TO result

if(num === 0 || num === 1) //LOGIC HERE, BECAUSE FACTORIAL OF 0 IS ALWAYS 1

{

return 1;

}

while(num>1){

num--;

result = num * result;

}

return result; //RETURN RESULT

}

var result = factorial(5);

alert(result);*/


let findFactorial =(x)=>{
    let fact = 1;
    if(x===0){
        return 1;
    }
    for(let i=1;i<=x;i ){
        fact=fact*i;
    }
    return fact;
};

