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

  	 // alert()
  	   // returns modal with a single OK button

  	 // confirm()
  	   // similar to alert() but returns a modal with CANCEL and OK button
  	   // var answer = confirm("Are you sure you want to continue?")

  	 // prompt()
  	   // returns a modal that invites the user to enter information
  	   // var answer = prompt("What is your full name?")

  	   // prompt also also can give a default response in case the user clicks OK without typing anything
  	   // var answer = prompt("What is your full name?", "John Doe")

  // Selecting Elements by Their id
  	var myDiv = document.getElementById("div1");

  	// The innerHTML Property
  		// Allows us to get or set the value of the HTML content inside a particular page element
  		// We can access HTML content of the <div> element by using a combination of getElementById() and innerHTML
  		var myDivContents = document.getElementById("div1").innerHTML;

  		// We can also use innerHTML to set the contents of a chosen element
  		document.getElementById("div1").innerHTML = "<p>Here is some new text instead</p>";
  		  // changed what was already in div to Here is some new text instead

  // Accessing Browser History
	  // window.history object
	  // the only property owned by the history object is length
	  	// alert("You have visited " + history.length + " web pages in this browser session");
	 // the history object has three methods: 
	 	// forward() an back() are equivalent to the forward and back button in the browser
	 		// history.next();
	 	// there is also a method 'go' which takes a single parameter
	 		// history.go(-3); // go back three pages
	 		// history.go(2); // go forward two pages

	 		// the method can alternately accept a string, which it uses to find the first matching URL in the history list:
	 			// history.go("example.com") // go to the nearest URL in the history list that contains 'example.com'
	// Using the location object
	 // contains information about the URL of the currently loaded page: 
	   // http://www.example.com:8080/tools/display.php?section435#list
	 	
	 	//location.href 
	 		// 'http://www.example.com:8080/tools/display.php?section435#list'
	 	//location.protocol 
	 		// 'http:'
	 	//location.host 
	 		// 'www.example.com:8080'
	 	//location.hostname
	 		// 'www.example.com'
	 	//location.port
	 		// '8080'
	 	// location.pathname
	 		// '/tools/display.php'
	 	//location.search
	 		// '?section=435'
	 	//location.hash
	 		// '#list'
	
	// Navigating Using the location Object (2 ways)
		// first, we can directly set the href property of the object:
			// location.href = 'www.newpage.com';
			  //using this technique to transport the user to a new page maintains the original page in the browser's history list, so the user can return simply by using the browser Back button

	    // second, if you would rather the sending page be removed from the history list and replaced with a new URL:
	    	// location.replace('www.newpage.com');

	    	// location.reload(); // refreshes the page



