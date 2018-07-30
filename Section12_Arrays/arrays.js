function printReverse(array) {
	for (var i = (array.length - 1); i >= 0; i--) {
		console.log(array[i]);
	}
}
function isUniform(array) {
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length; j++) {
			if(array[i] !== array[j]) {
				return false;
			}
		}
	}
	return true;
}
function sumArray(array) {
	var total = 0;
	array.forEach(function(value){
		total += value;
	});
	return total;
}
function max(array) {
	var max = null;
	array.forEach(function(value){
		if (value > max) max = value;
	});
	return max;
}