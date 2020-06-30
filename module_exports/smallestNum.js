module.exports = function smallestNum(arr) {
  var smallestNum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNum) {
      smallestNum = arr[i];
    }
  }
  return smallestNum;
};
