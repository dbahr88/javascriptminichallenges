// 1.

var resultafterclick = document.getElementsByTagName('h1')[0];

document.getElementsByTagName('button')[0].onclick = function(){
	resultafterclick.innerText = "I'm right"
}

document.getElementsByTagName('button')[1].onclick = function(){
	resultafterclick.innerText = "no I'm right"
}

// 2.
document.getElementsByTagName('h2')[0].addEventListener('mouseover', function(){
	alert("don't hover over me!")
})


// 3. and 4.
document.addEventListener('keydown', function(e)
{
	console.log("you pressed the" + " " + e.key + " " + "key.")
	document.getElementsByTagName('h1')[1].innerText = e.key;
})

// 5,6,7
document.getElementsByTagName('form')[0].onsubmit = function(e){
	e.preventDefault();
	var username = document.getElementsByName('username')[0].value;
	var email = document.getElementsByName('email')[0].value;
	var password = document.getElementsByName('password')[0].value;

	if(password !== '12345678' || !username.match(/\d/)){
		alert("Please enter info correctly")
	} else {
		document.getElementById('form-submitted-result').innerText = "Form Submitted Correctly";
	}
}






