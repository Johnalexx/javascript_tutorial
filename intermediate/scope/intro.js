/*Scope means where to look for variables or scope can be defined as the accessiblility or visibilty of variables
    --> What are you looking for?
         looking for data
         Looking for keywords     
*/

//DEFINING FUNCTIONS IN SCOPE


var foo = "Slide";      //assigning the string "Slide" to the variable 'foo'
window.foo;             //prints Slide


/* The Scope finds using formal declaration 
    Formal declarations will be shown below;
*/
    var foo = bar;     

     //the first formal declaration here is 'foo'

    function bar(){
        var foo = "baz";
    }

    //the next declaration here is 'bar'

    function baz(foo){
        foo = "bam";
        bam = "yay";
    }
    //the next declaration is 'foo' inside the function baz
