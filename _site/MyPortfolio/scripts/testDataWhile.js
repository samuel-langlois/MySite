/* 
    Tesing While loop to be used as a 
    database then saving Info
*/
let continuePlay = true;
while(continuePlay){
    document.getElementById("hi").innerHTML = "Hello"
    document.getElementById("gameButt").addEventListener("click", function(){
        console.log(document.getElementById("gameButt").getAttribute);
        document.getElementById("gameButt").setAttribute("clicked");
        checkPlay();
        document.getElementById("gameButt").setAttribute("start");
    })
}
function checkPlay(){
// var play = prompt("Would you like to stop?");
var play = document.getElementById("gameConsole").getAttribute;
if(play=="yes"){
    document.getElementById("hi").setAttribute("bye");
    continuePlay = false;
}
}