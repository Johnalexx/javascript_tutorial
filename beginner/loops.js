/*Loops- is an operation that runs until something is false
there are different type of loop
--> While Loop
--> For Loop
--> If Loop
-->

*/

//the If(statement) loop
//example
if (a) {}

//the for loop is a loop that checks/update then continue till it gets to the original operation
for (a = 1; a < 10; a = a + 1){             //since a is equal to 1, checks if a is less than 10, increment by 1(add 1 to a)...then the loop continues till it reaches the highest value which is 9 since it cant add more to be more than 10 or equal to 19
    console.log(a)                          //prints a...which is 1 to 9
}
                                    /*in for loops there are three clause which are optional(i.e at least two of the clauses must be involved in the looping)
                                        -->Initialization Clause
                                                in that loop operation, the initialization clause is the 'a=1'
                                        -->Conditional Clause   
                                                in that loop, the conditional clause is the 'a < 10'
                                        -->Update Clause/Operation Clause 
                                                in that loop, the update clause is the 'a = a + 1'

                                            -->OR<--

                                            you can choose to put none of the clause but the loop will run forever because the conditional clause isn't involved(i.e there is no condition that will fail or the condition to tell it when to stop)

                                            --> for (;;) {}
                                                
                                        */
