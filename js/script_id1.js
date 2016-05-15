// js 
// if we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// vars
var total = 1000;
var matches = [];

// helper function
function add(a, b) {
    return a + b;
}

//loop through looking for matches
for (i = 0; i < total; i++) {
	var mult3 = i % 3;
	var mult5 = i % 5;

	if (mult3 == 0 || mult5 == 0){
		matches.push(i);
	}
}

// sum the resulting array
var sum = matches.reduce(add, 0);

//print
console.log(matches, sum);