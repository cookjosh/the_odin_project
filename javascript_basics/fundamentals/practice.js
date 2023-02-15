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

// Tasks for Functions: https://javascript.info/function-basics

// Do these two functions perform the same purpose?
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }

  function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  }

  // Yes because the `else` conditional runs only if `age` is less than 18, returning the second function in both instances


  // Rewrite `checkAge` in a single line without the `if` conditional twice, using ? and ||
  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }
  // ?
  function checkAge(age) {
    return age > 18 ? true : confirm('Did parents allow you?');
  }
  // ||
  function checkAge(age) {
    return age > 18 || confirm('Did parents alow you?');
  }

  // Write a function called min(a,b) which returns the lesser value of the given parameters
  function min(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
  } // Or can be rewritten as:
  function min(a, b) {
    return a < b ? a : b;
  }