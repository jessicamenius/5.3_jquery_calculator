module.exports = function greaterThan(arr, index) {
  var greaterArr = [];
  for (var i = index + 1; i < arr.length; i++) {
    greaterArr.push(arr[i]);
  }
  return greaterArr;
};
