// Tasks from this site: https://javascript.info/variableshttps://javascript.info/variables

// Working with variables task
let admin;
let name = "John";
admin = name;
alert(admin);

// Giving the right name task
let planetName = "earth";

let currentUser = "myself";


// Tasks for Operators: https://javascript.info/operators

// What are results of these expressions? Answers as comments (correct answers after -> )
"" + 1 + 0 // "10"
"" - 1 + 0 // "-10" -> -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5  // "$45"
"4" - 2  // 2
"4px" - 2 // "4px-2" -> NaN
"  -9  " + 5 // " -9 5"
"  -9  " - 5 //  -14
null + 1 // 1
undefined + 1 // error -> NaN
" \t \n" - 2 // idk -> -2