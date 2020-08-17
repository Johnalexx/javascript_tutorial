//We are going to execute and show how scope works

var food = "Rice";

function bar(){ 
    var food = "Beans";         //It stores Beans to variable 'food' in the metadata

    function baz(food){
        food = bam;
        bam = yikes;
    }
    baz();
}

//Re-checks the entire Program and start over

//checks where bar is assigned...since bar isn't assigned
bar();                  //it is empty...i.e it prints "Undefined"
//checks where food has been assigned
food;                   //it prints "Rice" which was assigned first 
//checks where bam was assigned in the program
bam;                    //it prints 'Yikes'
//checks where baz is assigned...since baz isn't found in the function
baz();                  //it brings error