var randnum1 = Math.floor(Math.random() * 6) + 1;
var randdice1 = "images/dice" + randnum1 + ".png"; // image source for first dice
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randdice1); // set the image source for first dice
var randnum2 = Math.floor(Math.random() * 6) + 1;
var randdice2 = "images/dice" + randnum2 + ".png"; // image source for first dice
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randdice2); // set the image source for first dice
if (randnum1 > randnum2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🎉";
} else if (randnum2 > randnum1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🎉";
    }
else {
  document.querySelector("h1").innerHTML = "Draw! 🤝";
}