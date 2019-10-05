/*In this exercise i will create function and show an example of arrow function*/
/*Functions are like subprograms that are used to do some action on the website.*/
// Function are also objects

var c= myFunction(4,6);        //When we call some function then it is called invocation

function myFunction(a,b){     //We will define a function by the keyword 'function' followed by an parantheses '( )'
     return a*b;              // return is used to return a specific value or to stop execution of program.
}
console.log(c);               // we can check whether the program is working or not by console.log


/*We will use two words frequently when creating and invoking function they are 'parameters' and 'arguments' */

/*parameters are like names of values we pass to a function as an input. We pass these names inside of an parantheses. We can think
parameters like variables we create and then we use them where we want. */

var a=10;                   //a and b are parameters
var b=20;                   //10 and 20 are arguments
var d = myFunction2();      //Invoking(calling) a function
function myFunction2(){     //Creating a function
    d=a+b;
    return d;
}
console.log(d);            //Checking the execution of function