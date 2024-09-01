const { argv } = require("node:process");
console.log(argv[2]);

const vowels = ["a", "e", "i", "o", "u"];

const userInput = argv[2].split(" ");

function translate(word) {
  if (vowels.includes(word[0])) {
    return word + "way";
  } else if (
    !vowels.includes(word[0].toLocaleLowerCase()) &&
    !vowels.includes(word[1].toLocaleLowerCase())
  ) {
    return word[0] === word[0].toLocaleUpperCase()
      ? word.slice(2)[0].toUpperCase() +
          word.slice(2).slice(1) +
          word[0].toLowerCase() +
          word[1] +
          "ay"
      : word.slice(2) + word[0] + word[1] + "ay";
  } else {
    return word[0] === word[0].toLocaleUpperCase()
      ? word.slice(1)[0].toUpperCase() +
          word.slice(1).slice(1) +
          word[0].toLocaleLowerCase() +
          "ay"
      : word.slice(1) + word[0] + "ay";
  }
}

const result = userInput.map((input) => translate(input));
console.log(`Output: ${result.join(" ")}`);
