//배열 선언
var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]);

//배열 요소 접근
var i =0;
while(i < members.length) {
    console.log('array loop', members[i]);
    i++;
}

//객체 선언
var roles = {'programmer': 'egoing',
             'designer': 'k8805',
             'manager': 'hoya'

}
console.log(roles.designer)

//객체 요소 접근
for(var name in roles) {
    console.log('object => ', name, 'value =>', roles[name]);
}