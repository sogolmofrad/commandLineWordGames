const { argv } = require("node:process");

const input = argv[2].split(" ");
const shift = Number(argv[3]);
const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function cipher(word, shift) {
  if (shift === 0) return "please select a number other than 0";
  let cipherWord = "";
  let cipherPosition;
  for (let i = 0; i < word.length; i++) {
    cipherPosition = alphabets.indexOf(word[i]) + shift;
    if (cipherPosition > 25) {
      cipherPosition = cipherPosition - 26;
    }
    if (cipherPosition < 0) {
      cipherPosition = cipherPosition + 26;
    }

    cipherWord = cipherWord + alphabets.at(cipherPosition);
    // console.log(cipherWord);
  }

  return cipherWord;
}
const results = input.map((word) => cipher(word, shift));
const stringResult = results.join(" ");
console.log(stringResult);
// function cipherWorld(word,shift) {
// }
