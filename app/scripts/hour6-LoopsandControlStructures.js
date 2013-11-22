// LOOPS and CONTROL STRUCTURES

// WHILE
	
	// while(this condition is true) {
	// 	carry out these statements ...
	// }

	// the while statement works like if the only difference is that while will go back and test the condition again

	// var count = 10;
	// var sum = 0;
	// while (count > 0) {
	// 	sum = sum + count;
	// 	count --;
	// }
	// alert(sum);

	// Each time while evalutates the condition as true, the statements in the curly braces are executed over and over, adding the current value of count to the variable sum on each trip around the LOOPS

	// When count has been decremented to zero .. 10+9+8+7+6+5+4+3+2+1=55

// DO ... WHILE 

	// do {
	// 	... these statements ...
	// } while(this condition is true)

	// Like WHILE but because the while is after and outside the curly braces, the list of conditional statements is executed once before the while clause is evaluated
	// therefore, will always be executed at least once

// FOR

	// for(x=0; x<10; x++) {
	// 	... execute these statements ...
	// }

	// Interpretation: "For x initially set to zero, 
	// and while x is less than 10, 
	// and incrementing x by 1 on each pass through the loop, 
	// carry out the conditional statements."

	// var count;
	// var sum = 0;
	// for(count = 10; count > 0; count--) {
	// 	sum = sum + count;
	// }
	// 10+9+8+7+6+5+4+3+2+1=55

// FOR ... IN LOOPS
	// var days = ['Sun, Mon, Tue, Wed, Thu, Fri, Sat'];
	// var message = " ";
	// for (i in days) {
	// 	message += 'Day ' + i + ' is ' + days[i] + '\n';
	// }
	// alert(message);
