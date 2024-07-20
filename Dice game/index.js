var randomNumber1=Math.floor(Math.random()*6)+1;
var a="images/dice"+randomNumber1+".png";
document.getElementById("img1").src=a;

var randomNumber2=Math.floor(Math.random()*6)+1;
var b="images/dice"+randomNumber2+".png";
document.getElementById("img2").src=b;

if(randomNumber1>randomNumber2){
    document.getElementById("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber1<randomNumber2)
    document.getElementById("h1").innerHTML="Player 2 Wins";
else{
    document.getElementById("h1").innerHTML="Draw";
}