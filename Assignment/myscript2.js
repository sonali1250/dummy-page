let returnLength = (...input)=>{
     let s=input.join();
     s=s.replace (/,/g, "");
     return s.length; 
};
alert(returnLength('a','b','c','d'));

