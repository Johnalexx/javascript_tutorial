//FUNCTION EXPRESSION
/*  There are two function expressions
        --> Named Function Expression
        --> Anonymous Function expression
        
        ***IT IS ADVISEABLE TO USE THE NAMED FUNCTION Over the ANONYMOUS FUNCTION EXPRESSION*** 

          |----------------------------------------------------------------|
          |Benefits/Reason to pick Named Function over anonymous expression|
          |--------------------------------------------------------------- |  
                        -   it provides a handy self-reference function from itself
                        -   it is easily traceable
                        -   more debuggable stack traces
                        -   more understandable and accessible
                        -    (declaration and expression) when a function is named it makes it easier for us to consume it again for similar use cases.

        */

var food = function food(){
    //This is a Named function expression
}

var music = function(){
    //This is an anonymous function expression
}