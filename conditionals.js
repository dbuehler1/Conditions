$(document).ready(function () {
    $("#clickCountButton").click(countClick);
    $("#birthYearButton").click(checkAge);
    $("#salesTaxButton").click(calcSalesTax);
    $("#catAgeButton").click(recommendFood);
    $("#drawCardButton").click(drawCard);
    // add the functions as event listeners
    // to the forms in the HTML
    var count = 0;
	function countClick() {
	    event.preventDefault();
	    if(count == 9){
	        count = 0;
        }
	    else{
	        count++;
        }
	    $("#clickCountOutput").text(count);
		// Increment a variable that tracks the
		// number of button clicks

		// Print the current number of clicks to the
		// <p> with ID "clickCountOutput"

		// When the count gets to 10, reset it to 0



	}


    function checkAge() {
	    event.preventDefault();
	    var birthYear = $("#birthYear").val();
        // Get the user's birth year from the text
        // box with ID of "birthYear"
        if((2020 - birthYear) > 18){
        $("#birthYearOutput").text("Adult");
        }
        else{
            $("#birthYearOutput").text("Child");
        }
        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"

        // If they are 18 or over, print "Adult" instead

    }

    function calcSalesTax() {
        event.preventDefault();
        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"
        var PAmount = $("#purchaseAmount").val();
        // Get the state from the text box with ID "state"
        var state = $("#state").val();
        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%
        var rate = 0.0
        if(state == 'WI'){
            $("#salesTaxOutput").text((PAmount * 0.05).toFixed(2));
        }
        else if(state == 'IL'){
            $("#salesTaxOutput").text((PAmount * 0.08).toFixed(2));
        }
        else if(state == 'MN'){
            $("#salesTaxOutput").text((PAmount * 0.075).toFixed(2));
        }
        else if(state == 'MI'){
            $("#salesTaxOutput").text((PAmount * 0.055).toFixed(2));
        }
        else{
            $("#salesTaxOutput").text("Enter a Valid State");
        }
        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"


        // If the user enters a state not listed above,
        // print "Error" instead


    }

    function recommendFood() {
        // Get the cat's age from the text box with
        // ID of "catAge"
        event.preventDefault();
        var age = $("#catAge").val();
        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"
        if(age < 2) {
            $("#catAgeOutput").text("Kitten Chow");
        }
        else if(age >= 2 && age <10){
            $("#catAgeOutput").text("Adult Chow");
        }
        else{
            $("#catAgeOutput").text("Senior Chow");
        }
        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"


    }

    function drawCard() {
	    event.preventDefault();
        // Generate a random card face value (1 - 13)
        var faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var description;

        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"
        if(faceValue >= 2 && faceValue <= 10){
            description = faceValue;
        }
        else if(faceValue == 1){
            description = "Ace";
        }
        else if(faceValue == 11){
            description = "Jack";
        }
        else if(faceValue == 12){
            description = "Queen";
        }
        else if(faceValue == 13){
            description = "King";
        }



        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"
        if(suit == 1){
            description = description + " of Clubs"
        }
        else if(suit == 2){
            description = description + " of Spades"
        }
        else if(suit == 3){
            description = description + " of Hearts"
        }
        else if(suit == 4){
            description = description + " of Diamonds"
        }
        $("#drawCardOutput").text(description);
        // Print the card's description to the <p> with
        // ID of "drawCardOutput"


    }

});