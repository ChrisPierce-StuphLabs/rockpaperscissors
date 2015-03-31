	var alarm = 730;
	var snooze = 9;
	
	var wakeup = alarm + snooze;
	var notice = "You woke up at " + wakeup;
	
	console.log(notice);
	var time = 700;
	
	if ( time >= alarm ) {
		console.log("The alarm is going off!");
	}