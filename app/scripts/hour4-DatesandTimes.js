// Dates and Times // there is no Date in DOM like in previous examples so have to create our own
	var myDate = new Date ()

// built in to deal with date
	var year = myDate.getFullYear(); // four-digit year xxxx

	var month = myDate.getMonth(); // month number 0-11; 0 = January

	var date = myDate.getDate(); // day of the month 1-31

	var day = myDate.getDay(); // day of the week 0-6; Sunday = 0

	var hours = myDate.getHours(); // hours part of the time, 0-23

	var minutes = myDate.getMinutes(); // minutes part of the time, 0-59

	var seconds = myDate.getSeconds(); // seconds part of the time, 0-59