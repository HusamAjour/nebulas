var time = new Date;
alert("Hello, The time now is " + time.getHours() + ":" + time.getMinutes()); 

var name = " Stranger"

name = prompt("What's your name?");

var username = document.getElementById("username");

username.innerHTML = name;

colorValue = prompt("Choose one of the following by entering its number: 1- black 2- blue 3- white")

if(colorValue == 1 ){
    document.getElementById("main").style.backgroundColor = "black";
}
else if(colorValue == 2 ){
    document.getElementById("main").style.backgroundColor = "blue";
}
else if(colorValue == 3 ){
    document.getElementById("main").style.backgroundColor = "white";
}
else{
    alert("wrong input");
}