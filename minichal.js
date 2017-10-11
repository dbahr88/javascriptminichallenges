// 1. create script with 2 variables


var one = 1
var two = 2

console.log(one + two)


var monkey = "sebastian";
var dollar = "cash";

console.log(monkey + " " + dollar)

// 2. Multidimensional Array
var multiDimensional = [["collie", "pug", "cavapoo"], ["maltese","bulldog"]];
console.log(multiDimensional[1][1]);


// 3. Script checking if variable is <100
var onetoonehundred = [];
for(var i=0; i <= 200; i++){
	onetoonehundred.push(i);
console.log(onetoonehundred);

var random = onetoonehundred[Math.floor(Math.random() * onetoonehundred.length)]
console.log(random);

if(random > 100) {
	alert(random +" " + "is less than 100")
} else
	alert(random + "is greater than 100");


// // 4. Function taking name as argument , and tells user what name they've entered

var name = "David";

function prompter(placeholder){
	alert ("you have entered" + " " + placeholder);
}

prompter(name);



// 5. Door function game

function pickadoor(choice){
	if(choice == 1){
		alert("You picked Door number" + choice + ", you have won candy")
	} else if(choice == 2){
		alert("You picked Door number" + choice + ", you have won a pack of kitty litter")
	} else if(choice == 3){
		alert("You picked Door number" + choice + ", you will now be thrown into a pile of mousetraps.  Sucks to suck.")
	} else {
		alert("Please enter 1, 2, or 3")
	}
}

var promptDoor = prompt("Enter 1, 2, or 3 to see what's behind that door")

pickadoor(promptDoor)