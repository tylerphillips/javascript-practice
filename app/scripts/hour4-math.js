// Finding Minimum and Maximum
  // We can use min() and max() to pick the largest and smallest number from a list:

  var ageDavid = 23;
  var ageMary = 27;
  var ageChris = 31;
  var ageSandy = 19;

  document.write("The youngest is "
  	+Math.min(ageDavid, ageMary, ageSandy, ageChris)
  	+" years old<br />");

  document.write("The oldest is "
  	+Math.max(ageDavid, ageMary, ageSandy, ageChris)
  	+" years old<br />");

//Random Numbers
  function myRand(range) {
  	return Math.round(Math.random() * range);

  }
  // generates a random integer between 0 and 100
    // alert(myRand(100))

// The with Keyword
	with (Math) {
		var myRand = random();
		var biggest = max(3,4,5);
		var height = round(76.35);
	}
	// we call Math.random(), Math.max(), Math.round() because all methods in the code block have been associated with the Math object