

/****************Declaring Variables making those Random*****/

var randomNumber1 = Math.floor(Math.random()*6) + 1; //number between 1-6
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var diceImage = "images/dice" + randomNumber1 + ".png";// Variable using a string concatenaded with the generated number to change the dice image number
var image1 = document.querySelectorAll("img")[0]; // Variable to target the image to use on HTML
image1.setAttribute("src", diceImage);// Set the string and number generated on diceImage on the source

var diceImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", diceImage2);

var winnerText = document.querySelector("h1");

function winnerDice(){ //ffunction to filter the winner and set on the H1 text
  if (randomNumber1 == randomNumber2){
    winnerText.innerHTML = ("<em>DRAW!</em>");
  } else if (randomNumber1 > randomNumber2){
    winnerText.innerHTML = ("<em>Player 1 WIN!</em>");
  } else if (randomNumber2 > randomNumber1){
    winnerText.innerHTML = ("<em>Player 2 WIN!</em>");
}
}

winnerDice(randomNumber1, randomNumber2);


/*MY SOLUTION

/****************Function to filter the random number generated and apply the image*****/
/* function searchImage1(){
  if (randomNumber1 === 1){

    document.querySelector(".img1").setAttribute("src", diceImage);


  } else if(randomNumber1 === 2){
    document.querySelector(".img1").setAttribute("src", diceImage);


  } else if(randomNumber1 === 3){
    document.querySelector(".img1").setAttribute("src", diceImage);


  } else if(randomNumber1 === 4){
    document.querySelector(".img1").setAttribute("src", diceImage);


  } else if(randomNumber1 === 5){
    document.querySelector(".img1").setAttribute("src", diceImage);


  } else if(randomNumber1 === 6){
    var img1 = document.querySelector(".img1").setAttribute("src", diceImage);
    return img1;

  } if (randomNumber2 === 1){

    document.querySelector(".img2").setAttribute("src", "images/dice1.png");


  } else if(randomNumber2 === 2){
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");


  } else if(randomNumber2 === 3){
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");


  } else if(randomNumber2 === 4){
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");


  } else if(randomNumber2 === 5){
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");


  } else if(randomNumber2 === 6){
    var img2 = document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    return img2;
  }

}*/



/*function searchImage2(){
  if (randomNumber2 === 1){

    document.querySelector(".img2").setAttribute("src", "images/dice1.png");


  } else if(randomNumber2 === 2){
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");


  } else if(randomNumber2 === 3){
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");


  } else if(randomNumber2 === 4){
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");


  } else if(randomNumber2 === 5){
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");


  } else if(randomNumber2 === 6){
    var img1 = document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    return img1;
  }

}*/

/* Function to compare the random numbers and apply a h1 text based in that *//*
function winner(){
  if (randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = ("<em>DRAW!</em>");
  } else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = ("<em>Player 1 WIN!</em>");
  } else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = ("<em>Player 2 WIN!</em>");
}
}


/******Calling Functions ******/
/*
searchImage1(randomNumber1, randomNumber2);
winner(randomNumber1, randomNumber2);
*/
