// JavaScript Document
function changeImg1() {
  var numberInput1 = document.getElementById("userInput1").value;
  if (numberInput1 <1) { //Displays an alert when the entered number is less than 1
  	alert("The number is LESS than what is required. Please enter a number from 1 to 5.");
	return; }
  if (numberInput1 == 1) //This condition will change the image src to one.gif
    document.getElementById("imgNumber1").src = "one.gif";
  else if (numberInput1 == 2) //This condition will change the image src to two.gif
    document.getElementById("imgNumber1").src = "two.gif";
  else if (numberInput1 == 3) //This condition will change the image src to three.gif
    document.getElementById("imgNumber1").src = "three.gif";
  else if (numberInput1 == 4) //This condition will change the image src to four.gif
    document.getElementById("imgNumber1").src = "four.gif";
  else if (numberInput1 == 5) //This condition will change the image src to five.gif
    document.getElementById("imgNumber1").src = "five.gif";
	else if (numberInput1>5) //Displays an alert when the entered number is greater than 5
		alert("The number is GREATER than what is required. Please enter a number from 1 to 5.");
	else //Displays an alert when the user enters anything other than numbers
    alert("Invalid Entry! Please enter a number from 1 to 5.");
}

function changeImg2() {
  var numberInput2 = document.getElementById("userInput2").value;

  if (numberInput2 <1) { //Displays an alert when the entered number is less than 1
  	alert("The number is LESS than what is required. Please enter a number from 1 to 5.");
	return; }
	if (numberInput2>5) { //Displays an alert when the entered number is greater than 5
		alert("The number is GREATER than what is required. Please enter a number from 1 to 5.");
		return; }
  switch (numberInput2) { //Switch to decide which image to display based on numberInput2
    case "1": //This case will change the image src to one.gif
      document.getElementById("imgNumber2").src = "one.gif";
      break;
    case "2": //This case will change the image src to two.gif
      document.getElementById("imgNumber2").src = "two.gif";
      break;
    case "3": //This case will change the image src to three.gif
      document.getElementById("imgNumber2").src = "three.gif";
      break;
    case "4": //This case will change the image src to four.gif
      document.getElementById("imgNumber2").src = "four.gif";
      break;
    case "5": //This case will change the image src to five.gif
      document.getElementById("imgNumber2").src = "five.gif";
      break;
    default: //Displays an alert when the user enters anything other than numbers
      alert("Invalid Entry! Please enter a number from 1 to 5.");
  }
}