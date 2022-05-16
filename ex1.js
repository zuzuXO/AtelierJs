var easy=document.querySelector("#easy");
var medium=document.querySelector("#medium");
var hard=document.querySelector("#hard");
easy.addEventListener("click",()=>{
    console.log("hello");
    var randomNumber=Math.floor(Math.random()*10);
    var compteur=0;
    do{
        var guess=prompt("guess the hidden number!");
        compteur+=1;
    }while((compteur<3) && (guess!=randomNumber))
    if (guess==randomNumber) {alert("U WON")}
    else {alert("LOSER")}
})
medium.addEventListener("click",()=>{
    var randomNumber=Math.floor((Math.random()*10)+40);
    var compteur=0;
    do{
        var guess=prompt("guess the hidden number!");
        compteur+=1;
    }while((compteur<5) && (guess!=randomNumber))
    if (guess==randomNumber) {alert("U WON")}
    else {alert("LOSER")};
})
hard.addEventListener("click",()=>{
    var randomNumber=Math.floor(Math.random()*100);
    var compteur=0;
    do{
        var guess=prompt("guess the hidden number!");
        compteur+=1;
    }while((compteur<7) && (guess!=randomNumber))
    if (guess==randomNumber) {alert("U WON")}
    else {alert("LOSER");}
})