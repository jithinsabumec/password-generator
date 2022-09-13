const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

function generate() {
  inputField = document.querySelector(".inputfield");
  let passwordLength = inputField.value;
  console.log(passwordLength);
  reset();
  for (i = 0; i < passwordLength; i++) {
    randomPassOne = document.getElementById("randomPassOne");
    randomNumberOne = Math.floor(Math.random() * characters.length);
    randomNumberTwo = Math.floor(Math.random() * characters.length);
    randomPassOne.textContent += characters[randomNumberOne];
    randomPassTwo = document.getElementById("randomPassTwo");
    randomPassTwo.textContent += characters[randomNumberTwo];
  }
}

function reset() {
  randomPassOne = document.getElementById("randomPassOne");
  randomPassOne.textContent = "";
  randomPassTwo = document.getElementById("randomPassTwo");
  randomPassTwo.textContent = "";
}
