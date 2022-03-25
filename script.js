// Color guessing Game
var colorh1 = document.getElementById("color");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");

var nameoftheboxes = [choice1, choice2, choice3, choice4];

randomColors = [];

function randomColorPicking() {
  for (var i = 1; i <= 4; i++) {
    randomcolor =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
    randomColors.push(randomcolor);
  }
  console.log(randomColors);
}

var randomsortedarray = [];

function RandomSortingOfArray() {
  for (
    var i = 0, tempcolors = randomColors, len = randomColors.length;
    i < 4;
    i++
  ) {
    var randomArrangmentnum = Math.floor(Math.random() * 2);
    randomsortedarray.push(tempcolors[randomArrangmentnum]);
    console.log(tempcolors[randomArrangmentnum]);

    tempcolors.splice(randomArrangmentnum, 1);
  }
}

function CheckingUndefined() {
  if (randomsortedarray.includes(undefined)) {
    console.log("undefined detected");
    var indexOfUndefined = randomsortedarray.indexOf(undefined);
    console.log(indexOfUndefined);
    var randomRbgForUndefined =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
    randomsortedarray[indexOfUndefined] = randomRbgForUndefined;
    console.log(randomsortedarray);
  }
}

var correctcolor;
function ChoosingTheRandomColor() {
  for (var i = 0; i < randomsortedarray.length; i++) {
    nameoftheboxes[i].style.backgroundColor = randomsortedarray[i];
  }
  var randomcolornum = Math.floor(Math.random() * randomsortedarray.length);
  var color = randomsortedarray[randomcolornum];
  nameoftheboxes[randomcolornum].classList.add("Correct")
  console.log("Selected Color " + color);
  colorh1.innerText = color;
  console.log(color);
  correctcolor = color;
}

function CheckingCorrect(elem) {
  if (elem.classList.contains("Correct")) {
    console.log("Correct");
  }
  else{
    console.log("Incorrect");
  }
  if(elem.classList.contains("Correct")) {
    window.open("http://127.0.0.1:5500/color-guessing-game/winning-page/index.html", "_self");
  } else {
    window.open("http://127.0.0.1:5500/color-guessing-game/losing-page/index.html", "_self");
  }
}

randomColorPicking();
RandomSortingOfArray();
CheckingUndefined();
ChoosingTheRandomColor();
