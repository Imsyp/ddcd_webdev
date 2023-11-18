var fs = require('fs');

//readFileSync
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');  //순차적으로 실행
console.log(result);
console.log('C');

//readFile
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){ 
    console.log(result);
}); //동작하다가 작업이 끝나면 내부 함수가 호출되면서 다른 코드들과 따로 실행됨
console.log('C');