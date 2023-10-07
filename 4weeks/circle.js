const PI = 3.141592; //export : 변수나 함수 선언 앞에 붙이면 해당 값을 모듈에서 내보낼 수 있다.

function getArea(radius){
    return PI * radius * radius;
}

function getCircumference(radius){
    return 2 * PI * radius;
}

export default { //export default를 이용하면 자유롭게 이름을 지정할 수 있음.
    PI, 
    getArea, 
    getCircumference
} ; //한번에 여러 값을 내보낼 때는 export 이것처럼 작성

