// Generating random image source for 1 st player

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomImage;
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImageSource1);

// Generating random image source for 2nd player
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImageSource2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[2].setAttribute("src", randomImageSource2);

// to change H1
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "\"Player 1 wins🏆\"";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "\"Player 2 wins🏆\"";
}else{
    document.querySelector("h1").innerHTML = "\"Match Draw🎭\"";
}
