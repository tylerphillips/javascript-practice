// HOUR 5

// DIFFERENT TYPES OF DATA

// Numbers
	// Not a Number
		isNaN(3) // returns false;
		isNaN("horse") // returns true;

	// parseFloat() and parseInt()
		parseFloat("21.4") // returns 21.4
		parseInt(18.95, 10) // returns 18

	// isFinite()
		isFinite(21); // returns true;
		isFinite(Math.sqrt(-1)); // returns false;

// Strings
	// var myString = "This is a string"
	var myString = " ";

	// Some common escape sequences

	// \t 	Tab
	// \n 	New line
	// \" 	Double quote
	// \' 	Single quote or apostrohpe
	// \\	The backslash itself

	// Some popular string methods
	
		// concat		Joins strings and returns a copy of the joined string
			var string1 = "The quick fox ";
			var string2 = "jumps over the dog.";
			var longString = string1.concat(string2);
		// indexOf 		Returns the position of the first occurrence of the specified value in a string
		// lastIndexOf	Returns the position of the last occurrence of the specified value in a string
		// replace		Searches for a match between a substring and a string and replaces the substring with a new substring
			var string1 = "The quick fox ";
			string1.replace("quick", "fast") // string1 is now "The fast fox"
		// split		Split a string into an array of substrings and returns the new array
		// substr 		Extracts a substring from a string, beginning at a specified start position, and through the specified number of characters
		// toLowerCase	Converts string to lowercase letters
		// toUpperCase	Converts string to uppercase letters

	// Boolean Values
		// data of Boolean type can only either be true or false

		// The Negation Operator (!)
			// var success = false;
			// alert(!success); // alerts 'true'

// Arrays --> type of object for storing multiple values to a single variable

	// var myArray = new Array();
	// var myArray = []; // shorthand version for above

	// adding data to an array can be done two ways
	var myArray = ['Monday', 'Tuesday', 'Wednesday'];
	// OR
	var myArray = [];
	myArray[0] = 'Monday';
	myArray[1] = 'Tuesday';
	myArray[2] = 'Wednesday';

	myArray.length // returns 3



