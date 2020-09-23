function viewTime() {
    var time = new Date;
    alert("Hello, The time now is " + time.getHours() + ":" + time.getMinutes());
}

var name = " Stranger"

function displayName() {
    name = prompt("What's your name?");
    var username = document.getElementById("username");
    username.innerHTML = name;
}

function changeBackgroundColor() {

    while (true) {
        colorValue = prompt("Choose one of the following by entering its number: 1- black 2- blue 3- white")
        if (colorValue >= 1 && colorValue <= 3) {
            if (colorValue == 1) {
                document.getElementById("main").style.backgroundColor = "black";
            }
            else if (colorValue == 2) {
                document.getElementById("main").style.backgroundColor = "blue";
            }
            else if (colorValue == 3) {
                document.getElementById("main").style.backgroundColor = "white";
            }
            else {
                alert("wrong input");
            }
            break;
        } else {
            alert("Please insert a valid value.")
        }
    }
}

function showImages(number) {
    return "<img = src='Images/nebula (" + number + ").jpg' />"
}

function askUser() {
    var numbers = "";
    while (true) {
        numbers = prompt("How many nebula images you want to see? Please enter a number from 1 to 5 only?")
        if (numbers >= 1 && numbers <= 5) {
            break;
        } else {
            alert("Plese enter a number between 1 and 5 only.");
        }
    }
    var addImagestoHTML = "";
    for (var i = 1; i <= numbers; i++) {
        addImagestoHTML = addImagestoHTML + showImages(i);
    }
    var imageBlock = document.getElementById("displayImages");
    imageBlock.innerHTML = addImagestoHTML;
    document.getElementById("displayImagesTitle").innerHTML = "<h1>New Images to display</h1>";
}

viewTime();
displayName();
changeBackgroundColor();
var x = askUser();
console.log(x); 