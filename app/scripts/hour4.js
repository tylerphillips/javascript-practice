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

// Browser Information - The navigator Object (page 55)
	// document.write("<table>");
	// document.write("<tr><td>appName</td><td>"+navigator.appName + "</td></tr>")



