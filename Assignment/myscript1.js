/*let calculateAge = function(day, month, year) {
  let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getUTCMonth() + 1;
        let currentDay = currentDate.getUTCDate();
        // You need to treat the cases where the year, month or day hasn't arrived yet.
        let age = currentYear - year;
        if (currentMonth > month) {
            return age;
        } else {
            if (currentDay >= day) {
                return age;
            } else {
                age--;
                return age;
            }
        }
};
var res = calculateAge(28, 2, 1992);
console.log(res);






var today = new Date();

    var age = today.getFullYear() - year;

    var m = today.getMonth() - month; // it returns 0 because today.getMonth() returns 2. Jan=0, Feb=1,March=2 and //so on..

    if (m < 0 || (m === 0 && today.getDate() < 28)) {

        age--;

    }

  return age;*/





/*let calculateAge = function(day, month, year) {

var today = new Date();
    var age = today.getFullYear() - year;
    var m = today.getMonth() - (month-1); // if m<0 then age-1; m=0 then age; m>0 then also age;
    if (m >= 0 && age >=0) {  

        return age;

    } 
    else if(m<0 && age >= 0) {
    return age-1;

    } 

    else {
    return 'Please enter the correct input'

    } 
};
 var res = calculateAge(28, 2, 1992);
console.log(res);*/

/*let today = new Date();
    let age = today.getFullYear() - year;
//alert(today.getMonth());
    let m = today.getMonth() - (month-1); 
    let n=today.getDate()-day;
    //alert(m);
    // if m<0 then age-1; m=0 then age; m>0 then also age;

// alert(n);

    if (m > 0 && age >=0 || (m === 0 && n===0) || (m===0 && today.getDate()>day)) {  
        return age;
    } 
    else if (m<0 || ( m===0 && today.getDate()<day)) {
    return age-1;
    } 

    else {
    return 'Please enter the correct input';
    } 
};
var res = calculateAge(28, 2, 1992);
console.log(res);*/

let calculateAge = function(day, month, year) {
let today = new Date();
let age = today.getFullYear() - year;
let m = today.getMonth() - (month-1); 
if(m<0 || (m===0 && today.getDate()<day)) {
    age--;
}
return age;
};
console.log(calculateAge(28,2,1997));




