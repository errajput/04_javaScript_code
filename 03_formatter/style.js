function formatString(str1, str2) {
  let lowerCase = str1.toLowerCase();
  let upperCase = str2.toUpperCase();
  let combination = lowerCase + " " + upperCase;
  return combination;
}
console.log(formatString("heLLo", "WoRLD"));
