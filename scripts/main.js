let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/4-Cole-Thomas-The-Course-of-Empire-Destruction-1836.jpg') {
		myImage.setAttribute('src', 'images/1-Cole-Thomas-The-Course-of-Empire-The-Savage-State-1836.jpg');
	} else {
		myImage.setAttribute('src', 'images/4-Cole-Thomas-The-Course-of-Empire-Destruction-1836.jpg');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = `The Course of ${myName}'s Empire`;
	}
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'The Course of ' + storedName + '\'s Empire';
}

myButton.onclick = function() {
  setUserName();
}