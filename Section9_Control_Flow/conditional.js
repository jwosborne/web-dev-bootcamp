var age = Number(prompt("How old are you?"));
if (age < 0) {
	console.log("Error! Age cannot be negative.");
}
if (age == 21) {
	console.log("Happy 21st Birthday!!");
}
if (age % 2 == 1) {
	console.log("Your age is odd!");
}
if (age % Math.sqrt(age) == 0) {
	console.log("perfect square")
}