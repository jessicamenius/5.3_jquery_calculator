module.exports = function swap(arr, i1, i2) {
  var placeholder = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = placeholder;
  return arr;
};
