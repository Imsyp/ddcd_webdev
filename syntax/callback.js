/*
function a() {
    console.log('A');
}
*/

var a = function() {
    console.log('A');
}   //�͸� �Լ�: �̸� ���� �Լ�

function slowfunc(callback) {
    callback();
}

slowfunc(a);