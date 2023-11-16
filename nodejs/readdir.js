var testFolder = './data';  //'.': 터미널의 현재 위치 기준 
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist) {
    console.log(filelist);
})