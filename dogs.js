alert("Connected!");

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
	$('#result').html("<h2>Zuchhini is a friendly dog</h2>")
}

else if (age == "old" && temper == "calm"  && fur == "short"){
console.log("Kilian")
}

else if (age == "old" && temper == "playful" && fur =="long"){
console.log("Dobby")
}

else if (age == "old" && temper == "playful" && fur =="short"){
console.log("Millie")
}

if (age == "puppy" && temper == "calm" && fur == "long"){
console.log("Ren")
}

else if (age == "puppy" && temper == "calm"  && fur == "short"){
console.log("Athena")
}

else if (age == "puppy" && temper == "playful" && fur =="long"){
console.log("Murphy")
}

else if (age == "puppy" && temper == "playful" && fur =="short"){
console.log("Penelope")

}}

form.addEventListener("submit", function() {
findPuppy(age,temper,fur);
});
