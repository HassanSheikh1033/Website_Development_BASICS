console.log("this is Js" );



function greet(name1 , text = "greeting from JS") {   
    console.log(text + " " + name1);            
    console.log(name1 + " is Good Programmer");
    //    you define a function and then call it with the desired
    //     arguments when you want to execute its code.
}

function sum(a,b,c) {
    let d = a + b + c ;
    return d;
    
}

let name1 = "Hassan";
let name2 = "Huzaifa";
let name3 = "Arslan";
let name4 = "Faizan";
let text = "Good Morning"

// These are Arguments of Functions 
greet(name1 , text);
greet(name2 , text);
greet(name3 , text);
greet(name4 , );
greet('Huzaifa' , 'Good Night');

// let returnVal = greet(name4);
// console.log(returnVal);

let returnVal = sum(1,2,3);
console.log(returnVal);



// console.log(name1 + "is a Good Programmer");
// console.log(name2 + "is a Good Programmer");
// console.log(name3 + "is a Good Programmer");
// console.log(name4+ "is a Good Programmer");




// Arrow Function
const divide = (a, b) => {
    return a / b;
};

// Calling the function
const quotient = divide(10, 2); // quotient is 5





