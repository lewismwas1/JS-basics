document.getElementById('state').innerHTML = "Javascript Loading Strategies"
/*alert('Hey There');
['Hello Lewis','Hello Tess'].forEach(alert);*/

//Checking if a number is an even number

/*function number(value){
    if(value%2 == 0){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
number(1001);
number(1200);*/

function isEven(value){
    if(value%2 == 0){
        console.log('Even Number');
    }
    else{
        console.log('Odd Number');
    }
}
isEven(200);
isEven(2001);

/**
 * 
 * @param {number} num1 the number to be raised
 * @param {number} num2 the power to raise by
 * @returns 
 */
function power(num1,num2){
    return Math.pow(num1,num2);
}
console.log(power(5,3));