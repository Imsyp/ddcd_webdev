//자바 스크립트에서는 함수를 변수에 저장할 수 있다.
var f = function() {
    console.log(1 + 1);
    console.log(1 + 2);
}

//배열에 함수를 담을 수 있다.
var a = [f];
a[0]();

//객체에 함수를 담을 수 있다.
var o = {
    func:f
}
o.func(); 

