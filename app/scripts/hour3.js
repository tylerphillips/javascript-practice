// HOUR 3

// USING FUNCTIONS

// General Syntax
  function sayHello() {
  	alert("Hello")
	// ... more statements can go here ...
  }

// Arguments
  // functionName(arguments)
  	// calculate the cube of a number and display the results
  		function cube(x) {
  			alert(x * x * x);
  		}

  	  //results in alert with 27 appearing 
  		// cube(3);

  	  // similarly we could say
  	    // alert(cube(3))

  	  //results in alert with 27 appearing 
  		// var length = 3;
  		// cube(length);
 
  // Multiple Arguments
  		function times(a, b) {
  			document.write(a * b);
  		}
  		// times(3, 4); 
  		//writes '12' into page

  		function buttonReport(buttonId, buttonName, buttonValue) {
  			// information about the id of the button
  			var userMessage1 = "Button id: " + buttonId + "\n";
  			// then about the button name
  			var userMessage2 = "Button name: " + buttonName + "\n";
  			// and the button value
  			var userMessage3 = "Button value: " + buttonValue + "\n";
  			// alert the user
  			alert(userMessage1 + userMessage2 + userMessage3);
  		}

  // Returning Values from Functions
  	// using cube function
  	// var answer = cube(3);
  	  // the variable answer will now contain the value 27

  // Scope of Variables (page 46)
    // "Variables declared inside a function only exist inside that function."