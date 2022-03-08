//TheFreeElectron 2015, http://www.instructables.com/member/TheFreeElectron/
//JavaScript, uses pictures as buttons, sends and receives values to/from the Rpi
//These are all the buttons
//these lines grab elements from index.php based on their name and assigns them
//to variables
var button_0 = document.getElementById("button_0");

//Create an array for easy access later
var Buttons = [ button_0];

//This function is asking for gpio.php, receiving datas and updating the index.php pictures
function change_pin ( pic ) {
var data = 0;
//send the pic number to gpio.php for changes
//this is the http request
	var request = new XMLHttpRequest();
	// request.open calls gpio.php specifying a picture number
	// the corresponding pin is toggled, and its final state is returned
	// in responseText, used in the onreadystatechange function
	// true at the end specifies an asynchronous request, (which is default)
	request.open( "GET" , "gpio.php?pic=" + pic, true);
	// Send the request
	request.send(null);
	//receiving informations
	/*  XMLHttpRequest readyState codes
	0		The request is not initialized.
	1		The request has been set up.
	2		The request has been sent.
	3		The request is in process.
	4		The request is completed.

	status codes
	200 OK
	403 Forbidden
	404 Page not found
	500 Internal Server Error

	onreadystatechange specifies a function to be executed every time the status
	of the xmlhttprequest object changes: When readyState is 4 and status is 200
	the response is ready.

	The responseText property returns the server response as a text string.

	localeCompare compares two strings. If they are equivalent, it returns 0


	*/
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			data = request.responseText;
			// the responseText should be "0" or "1"
			//update the index pic
			if ( !(data.localeCompare("0")) ){
				Buttons[pic].src = "data/img/red/red_"+pic+".jpg";
			}
			else if ( !(data.localeCompare("1")) ) {
				Buttons[pic].src = "data/img/green/green_"+pic+".jpg";
			}
			else if ( !(data.localeCompare("fail"))) {
				alert ("Something went wrong!" );
				return ("fail");
			}
			else {
				alert ("Something went wrong!" );
				return ("fail");
			}
		}
		//test if fail
		else if (request.readyState == 4 && request.status == 500) {
			alert ("server error");
			return ("fail");
		}
		//else
		else if (request.readyState == 4 && request.status != 200 && request.status != 500 ) {
			alert ("Something went wrong!");
			return ("fail"); }
	}

return 0;
}
