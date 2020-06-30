// var myBday = "12/11/1983";

// var convertedDate = moment(myBday, "MM/DD/YYYY");

// console.log(convertedDate.format("dddd"));
// console.log(convertedDate.format("DD"));
// console.log(convertedDate.format("DD/MM/YYYY"));

var time = moment().format("h:mm:ss a");

console.log(moment().format("h:mm:ss a"));
console.log(moment().format("h:mm:ss"));
console.log(moment().format("H:mm:ss"));
// console.log(moment().format("h a"));
console.log(moment().subtract(10, "days").calendar());
console.log(moment().add(10, "days").calendar());
