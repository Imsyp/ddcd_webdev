/*
function a() {
    console.log('A');
}
*/

var a = function() {
    console.log('A');
}   //익명 함수: 이름 없는 함수

function slowfunc(callback) {
    callback();
}

slowfunc(a);