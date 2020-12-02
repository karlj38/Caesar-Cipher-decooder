const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function rot13(str) {
let arr = str.split("");
let code = arr.map( char => {
  for (let i = 0; i < char.length; i++) {
    if (!char[i].match(/\w/)) {
      return char[i];
    }
    let index = alphabet.indexOf(char[i]);
    let key = index + 13;
    key = (key > 25) ? key - 26 : key;
    return alphabet[key];
  }
})
  return code.join("");
}
