//�ڹ� ��ũ��Ʈ������ �Լ��� ������ ������ �� �ִ�.
var f = function() {
    console.log(1 + 1);
    console.log(1 + 2);
}

//�迭�� �Լ��� ���� �� �ִ�.
var a = [f];
a[0]();

//��ü�� �Լ��� ���� �� �ִ�.
var o = {
    func:f
}
o.func(); 

