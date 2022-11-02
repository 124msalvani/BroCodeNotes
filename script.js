//How to accept user input
//Easy Way with a window prompt

/*let username= window.prompt("what's your name");
console.log(username);*/

//Difficult way html textbox
var username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello, " + username;
}
