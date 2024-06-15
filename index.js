var random1 = Math.floor(Math.random()*6) + 1;
var randomdiceimage1 = "./images/dice"+random1+".png";
var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src",randomdiceimage1);

var random2 = Math.floor(Math.random()*6) + 1;
var randomdiceimage2 = "./images/dice"+random2+".png";
var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src",randomdiceimage2);

if (random1 > random2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (random1 < random2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else if  (random1 === random2){
    document.querySelector("h1").innerHTML = "Draw";
}