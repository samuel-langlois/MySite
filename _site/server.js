const express = require("express");
const bodyParser = require("body-Parser");
const app = express();
const path = require('path');
// var http = require('http');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function(request, response){
    response.sendFile(__dirname + "/MyPortfolio/templates/main.html");
});

/******************************
*   the next 3 app.gets use the Original URL
*   to get the folder and then the file needed
*   to be sent to the client
*
*
*/
app.get(hi="/css/\*",function(request, response){
    var originalUrlSplit = request.originalUrl.split('/');
    response.sendFile(__dirname + "/MyPortfolio/css/" + originalUrlSplit[originalUrlSplit.length - 1]);
});

app.get("/templates/\*", function(request, response){
    var originalUrlSplit = request.originalUrl.split('/');
    response.sendFile(__dirname + "/MyPortfolio/templates/" + originalUrlSplit[originalUrlSplit.length - 1]);
});

app.get("/scripts/\*", function(request, response){
    var originalUrlSplit = request.originalUrl.split('/');
    console.log(originalUrlSplit[originalUrlSplit.length - 1])
    response.sendFile(__dirname + "/MyPortfolio/scripts/" + originalUrlSplit[originalUrlSplit.length - 1]);
});
/*



*/
const port = 443;
app.listen(port, function(){
    console.log(`server start on port ${port}`);
});


// `${hello} is fString of js`

/* function loadCSS(){
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('link');
    style.href = __dirname + '/css/bodyStyles.css';
    style.type = 'text/css';
    style.rel = 'stylesheet';
    head.append(style);
} */