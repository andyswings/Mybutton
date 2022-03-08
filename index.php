<!DOCTYPE html>
<!--TheFreeElectron 2015, http://www.instructables.com/member/TheFreeElectron/ -->

<html>
    <head>
        <meta charset="utf-8" />
        <title>Raspberry Pi Gpio</title>
    </head>

    <body>
    <style>
    background-color: black;
    h1 {text-align: center;}
    </style>
    <!-- On/Off button's picture -->
	<?php
	$val_array = array(0);
	//this php script generate the first page in function of the file

		//set the pin's mode to output and read them
		system("gpio mode 0 out");
		exec ("gpio read 0", $val_array[0], $return );

	//for loop to read the value
	$i =0;

		//if off, create an image named for the pin and with the appropriate color
    //image on the page. Also calls change_pin() from script.js if the image
    //is clicked.
    //echo ("<h1>Fan Power</h1><br>");
    echo("<img id='fanpower' src='data/img/fanpower.png'/><br>");
    if ($val_array[$i][0] == 0 ) {
			echo ("<img id='button_".$i."' src='data/img/red/red_".$i.".jpg' class = 'center' onclick='change_pin (".$i.");'/>");
		}
		//if on, do the same with a green image
		if ($val_array[$i][0] == 1 ) {
			echo ("<img id='button_".$i."' src='data/img/green/green_".$i.".jpg' class = 'center' onclick='change_pin (".$i.");'/>");
		}

	?>

	<!-- javascript -->
	<script src="script.js"></script>
    </body>
</html>
