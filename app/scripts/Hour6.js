// HOUR 6

// SCRIPTS THAT DO MORE

// Conditional Statements
	
	// The if() Statement --> if(this condition is true) then do this;
		var message = " ";
		var bool = true;
		if(bool) message = "The test condition evaluated to TRUE"
		if(!bool) message = "The value of bool is false"

	// Comparison Operators
		// ==	is equal to
		// ===	is equal to in both value and type
		// !== 	is not equal to
		// >	is greater than
		// <	is less than
		// >=	is greater than or equal to
		// <=	is less than or equal to

	// if(temperature < 64) {
	// 	message = "Turn on the heating";
	// 	heatingStatus = "on";
	// 	// more statements can be added here
	// } else {
	// 	message = "Temperature is high enough";
	// 	heatingStatus = "off";
	// 	// more statements can be added here
	// }

	// The switch Statement
		
		switch(color) {	
			case "red" :
				message = "Stop";
				break; // Jumps to the end of the switch statement after having executed the code for a matching case
			case "yellow" :
				message = "Pass with caution";
				break;
			case "green" :
				message = "Come on through";
				break;
			default :
				message = "Traffic light is out of service";
		}