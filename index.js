/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let tongueTwister = s1.concat(" ", s2, " ", s3, " ", s4, " ", s5)
// Print out the concatenated string
console.log("tongueTwister:", tongueTwister)

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const camel1 = part1[0].toUpperCase() + part1.slice(1)
const camel2 = part2[0].toUpperCase() + part2.slice(1)

const result = camel1+camel2

// Print the cameLtaiL-formatted string
console.log("Camel string:", result)

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipAmount = billTotal * .15

// Print out the tipAmount
console.log("Tip:", tipAmount)

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let numRand = Math.floor(Math.random() * 10 ) +1
// Print the generated random number
console.log(numRand)

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
console.log("expression1:", expression1)
console.log("My guess 1:", false)

const expression2 = a || b;
console.log("expression2:", expression2)
console.log("My guess 2:", true)

const expression3 = !a && b;
console.log("expression3:", expression3)
console.log("My guess 3:", false)

const expression4 = !(a && b);
console.log("expression4:", expression4)
console.log("My guess 4:", true)

const expression5 = !a || !b;
console.log("expression5:", expression5)
console.log("My guess 5:", true)

const expression6 = !(a || b);
console.log("expression6:", expression6)
console.log("My guess 6:", false)

const expression7 = a && a;
console.log("expression7:", expression7)
console.log("My guess 7:", true)
