

var age = document.querySelector(".questionAge");
var temper = document.querySelector(".questionTemper");
var fur = document.querySelector(".questionFur");
var submitButton = document.querySelector("#submit");
var form = document.querySelector("form");
var log = document.querySelector("#log");



let dogData = [
    { name: "Zucchini", age: "old", temper: "calm", fur: "long"},
    { name: "Kilian", age: "old", temper: "calm", fur: "short"},
	{ name: "Dobby", age: "old", temper: "playful", fur: "long"},
	{ name: "Millie", age: "old", temper: "playful", fur: "short"},
	{ name: "Murphy", age: "puppy", temper: "playful", fur: "long"},
    { name: "Ren", age: "puppy", temper: "calm", fur: "long"},
	{ name: "Athena", age: "puppy", temper: "calm", fur: "short"},
	{ name: "Penelope", age: "puppy", temper: "playful", fur: "short"} 

	];

answers = {}

$('.question1').on('change', function() {
	answers['answerOne'] = $(this).val()
	console.log(answers)
});

$('.question2').on('change', function() {
	answers['answerTwo'] = $(this).val()
	console.log(answers)
});

$('.question3').on('change', function() {
	answers['answerThree'] = $(this).val()
	console.log(answers)
});

$('form').on('submit', function(e) {
	e.preventDefault()
	console.log('submitting')
	findPuppy(answers['answerOne'], answers['answerTwo'], answers['answerThree'])
});


function questionOne(){

    if(document.questionAge.getElementById("ageChoice1").checked) {
    	console.log('age1 checked')
        //Basic package is checked
        age = "puppy" }

    else if(document.questionAge.getElementById("ageChoice2").checked) {
        //Basic package is checked
        age = "old" }
    } 

function questionTwo(){

    if(document.questionTemper.getElementById('temperChoice1').checked) {
        //Basic package is checked
        age = "calm" }

    else if(document.questionTemper.getElementById('temperChoice2').checked) {
        //Basic package is checked
        age = "playful" }
    } 

 function questionThree(){

    if(document.questionFur.getElementById('furChoice1').checked) {
        //Basic package is checked
        age = "long" }

    else if(document.questionFur.getElementById('furChoice2').checked) {
        //Basic package is checked
        age = "short" }
        } 

questionOne();
questionTwo();
questionThree();


function findPuppy(age, temper,fur){
if (age == "old" && temper == "calm" && fur == "long"){
	$('#result').html("<h2 class='result-text'>You matched with Zucchini! </h2> <br> <p class='result-text'>Zucchini is a calm dog that is believed to be a Jack Russell mix. She is very affectionate.<p>")
	$('img').hide()
	$('#zucchini').show()
	
}

else if (age == "old" && temper == "calm"  && fur == "short"){
	$('#result').html("<h2 class='result-text'>You matched with Kilian</h2> <br> <p class='result-text'>Kilian is a sweet, shy dog that loves being outside. He could roll around on grass for hours!<p>")
	$('img').hide()
	$('#kilian').show()
	
}

else if (age == "old" && temper == "playful" && fur =="long"){
	$('#result').html("<h2 class='result-text'>You matched with Dobby!</h2> <br> <p class='result-text'>Dobby is a Chihuahua who is super playful and loves to cuddle. She leaps on to your lap whenever she gets a chance. <p>")
	$('img').hide()
	$('#dobby').show()
	
}

else if (age == "old" && temper == "playful" && fur =="short"){
	$('#result').html("<h2 class='result-text'> You matched with Millie! </h2> <p class='result-text'> Millie is a Pit/Lab/German Shepherd Mix who is very sweet, smart and playful. She is super friendly and loves all people, other dogs and food. She is also good a learning new tricks! <p><br>")
	$('img').hide()
	$('#millie').show()
	
}

if (age == "puppy" && temper == "calm" && fur == "long"){
	$('#result').html("<h2 class='result-text'> You matched with Ren! </h2> <p class='result-text'> Ren is a sweet, shy Australian Shepherd mix. He loves belly rubs. He is also full of surprises and climbs on top of his crate! <p><br>")
	$('img').hide()
	$('#ren').show()

}

else if (age == "puppy" && temper == "calm"  && fur == "short"){
	$('#result').html("<h2 class='result-text'>You matched with Athena! </h2> <p class='result-text'> Athena is a sweet, calm, puppy. <p>")
	$('img').hide()
	$('#athena').show()

}

else if (age == "puppy" && temper == "playful" && fur =="long"){
	$('#result').html(" <h2 class='result-text'>You matched with Murphy </h2> <p class='result-text'>Murphy is an energetic, spunky pup! He loves to play, and you can often find him hiding in peculiar spaces.")
	$('img').hide()
	$('#murphy').show()
	
}

else if (age == "puppy" && temper == "playful" && fur =="short"){
	$('#result').html("<h2 class='result-text'>You matched with Penelope!</h1> <p class='result-text'> Penelope is a sweet pup who LOVES to cuddle and be around people.<p>")
	$('img').hide()
	$('#penelope').show()

}}


form.addEventListener("submit", function() {
findPuppy(age,temper,fur);

});
