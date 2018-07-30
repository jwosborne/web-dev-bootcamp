function isEven(num) {
	return num % 2 == 0;
}
function factorial(num) {
	if (num < 0) return "error";
	if (num == 0) return 1;
	return num * factorial(num - 1);
}
function kebabToSnake(str) {
	return str.replace(/-/g, "_");
}