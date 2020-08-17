//here you will be told the use of strict mode and how to use it

/*
STRICT MODE prevents certain actions from being taken and throws more exceptions.  

                        Benefits of Strict Mode
    -   Strict mode eliminates some JavaScript silent errors by changing them to throw errors.
    -   Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that’s not strict mode.
    -   It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object).
    -   Strict mode makes it easier to write “secure” JavaScript.

    The strict mode can be enabled by writing "use strict" in the beginning of the code
*/

"use strict";

var foo = "bar";

function bar() {
    var foo = "baz";
}

function baz(foo) {
    foo = "bam";

}

//it is adviseable to use strict mode in all your program