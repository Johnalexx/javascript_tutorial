/*Types of Scope
- Lexical Scope
- Dynamic Scope 

A lexical scope in JavaScript means that a variable defined outside a function
can be accessible inside another function defined after the variable declaration


*/

function foo(){
    var bar = "bar";

    function baz(){
        console.log(bar);           //Lexical Scope--- here it'll tell the console that there is "bar" defined in line 12
    }
    baz;

}