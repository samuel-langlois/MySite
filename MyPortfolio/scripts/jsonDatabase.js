const userName = "";
const saveType = "";
const fileName = "";
const filePath = `users/${userName}/$saveType/${fileName}.json`;
var fs = require('fs');

class jsonData{

    constructor(userName, saveType, fileName){
        this.userName = userName;
        this.saveType = saveType;
        this.fileName = fileName;
    }
    readData(){
        var data = JSON.parse(fs.readFileSync(filePath));
        return data;
    }
    saveData(data){
        var saveData = JSON.stringify(data, null, 2);
        fs.writeFile(saveData);
    }
}