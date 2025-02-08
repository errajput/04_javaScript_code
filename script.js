function charactercount(text) {
  let length = text.length;
  return length;
}
// const result = charactercount("javascript");

const partoLowercase = (text) => {
  let lowerCase = text.toLowerCase();
  return lowerCase;
};
// console.log(partoLowercase("NODEJS"));

const partoUppercase = (text) => {
  let upperCase = text.toUpperCase();
  return upperCase;
};
// console.log(partoUppercase("NOdEJS"));

const slicetxt = function (text, start, end) {
  let sliced = text.slice(start, end);
  return sliced;
};
console.log(slicetxt("nodejs", 3, 5));
