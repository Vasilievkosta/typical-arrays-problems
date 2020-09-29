
exports.min = function min (array) {
	if (array = 0 || array = []) {
		return 0;
	}
  return Math.min(...array);
}

exports.max = function max (array) {
	if (array = 0 || array = []) {
		return 0;
	}
  return Math.max(...array);
}

exports.avg = function avg (array) {
	if (array = 0 || array = []) {
		return 0;
	}
	let result = array.reduce(function(sum, elem) {
	return sum + elem;
}, 0);
  return result/array.length;
}