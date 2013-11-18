// HOUR 1

// Alert Pop-up
	// window.alert("Here is my message")
		// Alert that displays title of page
		// alert(document.title) 


// HOUR 2

// Write characters directly into HTML (not really used much)
	// document.write("Here is my message")

// Variables
	var netPrice;
	netPrice = 8.99;

	var productName = "Leather wallet";
	// alert(productName)

// Operators
	var productCount = 2;
	var subtotal = 14.98;
	var shipping = 2.75;
	var total = subtotal + shipping;
	var salesTax = total - shipping;

	var itemsPerBox = 12;
	var itemsToBeBoxed = 40;
	var itemsInLastBox = itemsToBeBoxed % itemsPerBox;

	// Increment Operator
	  // productCount++;
	    // equivalent to productCount = productCount + 1;
	  // Similarly productCount--;

	// total += 5 is the same as total = total + 5


// Using the + operator with Strings
	var firstname = "John";
	var surname = "Doe";
	var fullname = firstname + " " + surname;
	  // the variable fullname now contains the value "John Doe"

	// var name = "David";
	// var age = 45;
	// alert(name + age);
	  // David45 appears in alert box

// Capturing Mouse Events
  // onClick Event Handler
  // onMouseOver Event Handler
  // onMouseOut Event Handler

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

// HOUR 4

// DOM OBJECTS AND BUILT-IN OBJECTS

  // Interacting with the User