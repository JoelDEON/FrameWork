module.exports.getDates = function() {
const today = new Date();
const options = {
  day: "long",
  month: "long",
  day: "numeric",
  year: "numeric"
}
return today.toLocaleDateString("en-us", options);

}

module.exports.getDay = function() {
const today = new Date();
const options = {
    weekday: "long"
}
return today.toLocaleDateString("en-us", options);

}
