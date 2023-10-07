//truthy & falsy : true, false이 아닌 값도 상황에 따라 참, 거짓으로 평가하는 특징
//falsy : undefined, null, 0, -0, NaN, "", 0n
//truthy : falsy를 제외한 나머지

if(!undefined) {
    console.log("undefined는 falsy한 값입니다.");
}
if(!null) {
    console.log("null은 falsy한 값입니다.");
}
if (!0n) {
    console.log("0n은 falsy한 값입니다.");
}
if(!0) {
    console.log("0은 falsy한 값입니다.");
}
if(!-0) {
    console.log("-0은 falsy한 값입니다.");
}
if (!NaN) {
    console.log("NaN은 falsy한 값입니다.");
}
if (!"") {
    console.log('""은 falsy한 값입니다.');
}

//turthy
const num = "false";
if(num) {
    console.log("true");
} else {
    console.log("flase");
}


//truthy & falsy 응용하기
//undefined, null -> 특정 변수에 값이 있는지 없는지 확인하는데 쓰임
let varA; // undefined 값 -> false

if(varA) {
    console.log("값이 있음");
} else {
    console.log("값이 없음");
}

//조건문에서 특정 변숫값 확인
const num1 = -0;

if (num1) {
    console.log("양수이거나 음수입니다.");
} else {
    console.log("0이거나 -0이거나 NaN입니다.");
}

//공백인지 확인
const str = "";

if(str) {
    console.log("공백이 아님");
} else {
    console.log("공백임");
}

//단락 평가 : 하나만 평가해도 결과가 그 하나에 결정되는 것 -> 지름길 평가
//AND 단락 평가 : 첫번째가 false이면 이후는 계산 X
function calcA(){
    console.log("a");
    return false;
}

function calcB(){ //호출되지 않음
    console.log("b");
    return true;
}

console.log(calcA() && calcB); // calcA가 이미 false이므로 calcB는 호출되지 않음!!

//AND 단락 평가로 오류 방지하기
function CalcA(){
    console.log("a");
    return undefined;
}

function CalcB(){
    console.log("b");
    return true;
}

console.log(CalcA() && CalcB); 

function getName(person){
    if(person !== undefined){
        return person.name; 
    } else {
        return "매개변수가 객체가 아닙니다.";
    }
}

let person;
let name = getName(person);

console.log(name);

//getName에 전달하는 인수가 null 일때도 오류 발생
function getName(person){
    if(person !== undefined && person !== null){
        return person.name; 
    } else {
        return "매개변수가 객체가 아닙니다.";
    }
}

person = null;
name = getName(person);

console.log(name);

//복잡한 조건문 해결!
function getName1(person){
    return person && person.name;
}

person = {name : "이정환"};

let name1  = getName1(undefined); //undifined가 falsy값이므로 person.name을 계산할 필요가 없음.
let name2 = getName1(null); // null이 falsy값이므로 person.name을 계산할 필요가 없음.
let name3 = getName1(person);

console.log(name1);
console.log(name2);
console.log(name3);

//OR 단락 평가
// || : 하나라도 참이면 참 반환, 왼쪽이 true이면 오른쪽 검사 X

function calcA(){
    console.log("a");
    return true;
}

function calcB(){
    console.log("b");
    return false;
}

console.log(calcA() || calcB); //calcA가 이미 true이기때문에 calcB를 계산 할 필요가 없음

//OR -> truthy & falsy
const name4 = "이정환" || undefined; //"이정환"은 truthy하므로 두번째를 계산할 필요 없이 name4는 "이정환"!
console.log(name4);

//OR 단락 평가와 null 병합 연산자
const varD = 0;
const varE = "이정환";

const resultA = varD || varE; //varE가 truth하므로
const resultB = varD ?? varB; //첫번째로 확정된 값은 varD이므로 resultB에 저장됨 (?? 확정된 피연산자를 찾음)

console.log(resultA);
console.log(resultB);

// 객체 자료형 자세히 살펴보기
// 객체 자료형 : 원시 자료형을 제외한 모든 자료형

// 배열과 함수가 객체인 이유
// length 프로퍼티 : 배열의 길이
const arr1 = [1,2,3];
console.log(arr1.length);

const arr2 = [1,2,3,4];
console.log(arr2.length);

// 배열 조작을 위한 메소드 : push (원소 추가 메서드)
const arr3 = [1,2,3];
arr3.push(4);

console.log(arr3);

// name 프로퍼티 : 함수의 이름을 정함
function myFunction(){
    console.log("hi");
}

console.log(myFunction.name);

//객체와 참조
// 객체 자료형 : 값이 동적으로 늘어나거나 줄음 -> 일정한 크기 X
// 참조(Reference) : 실제로 값을 저장하는 것이 아니라 값을 저장한 곳의 주소만 저장하는 방식

// 원시 자료형과 객체 자료형의 저장 방식 비교
// 새로운 변수에 객체를 저장하면 "참좃값"이 저장되는 것임!


person = {
    name : "이정환"
};

let man = person;
man.age = 25; //man 과 person이 참조하는 객체가 같기 때문에

console.log(person);
console.log(man);


// 참조에 의한 비교
// 원시 자료형의 비교
numA = 1;
numB = 1;

console.log(numA === numB); // 값이 같으므로 true

//객체 자료형의 비교 -> 참좃값 비교(참조에 의한 비교)
person = {
    name : "이정환"
};

man = {
    name : "이정환"
};

console.log(person === man); // person과 man의 참좃값이 다르므로 false (내부의 속성이 같아도)

// 배열 or 함수의 비교
let arr4 = [1,2,3];
let arr5 = [1,2,3];

console.log(arr4 === arr5); //false

let func1 = () => {
    console.log("func");
};

let func2 = () => {
    console.log("func");
}

console.log(func1 === func2); //false


//반복문 응용하기 -> 반복문 : 배열과 객체에 저장한 값에 쉽게 접근 가능

// 배열과 반복문
// 배열 : 순서대로 데이터를 저장하는 특징 -> 반복문과 결합하여 자주 사용

// 1. 인덱스를 이용한 순회
let arr = [1,2,3,4];

for(let idx = 0; idx < 4; idx++) {
    console.log(arr[idx]);
}

// 배열의 길이 -> length로 지정
const len = arr.length;

console.log(len);

let food = ["짜장면", "피자", "치킨"];

for(let i = 0; i < food.length; i++){
    console.log(food[i]);
}

// for ..of 문을 이용한 순회
for(let item of food) {
    console.log(item);
}

// 객체와 반복문 -> 객체를 순회하는 경우

// 객체에 저장된 프로퍼티를 순회하는 방법
// Object.key를 이용해 key 순회
person = {
    name : "이정환",
    age : 25,
    location : "경기도"
};

const keyArr = Object.keys(person);

console.log(keyArr);

// for ..of로 순회하기

for (let key of keyArr) {
    console.log(key);
}

// value값 불러오기

for(let key of keyArr) {
    let value = person[key];
    console.log(value);
}

// Object.values 를 이용한 value 순회
const valueArr = Object.values(person);

for(let value of valueArr){
    console.log(value);
}

// for .. in문을 이용한 순회 -- > Object.value 보다 훨씬 간단!
for(let key in person) {
    const value = person[key];
    console.log(key, value);
}






















// 구조 분해 할당 : 구조를 분해해 할당하는 문법
// - 배열이나 객체에 요소를 해체해 개별 변수에 그 값을 담을 때 사용

// 배열의 구조 분해 할당
// - 배열에서 값을 하나씩 변수에 할당하는 예
arr = [1,2,3];
let one = arr[0];
let two = arr[1];
let three = arr[2];

console.log(one, two, three);

// !구조분해 할당! 방법 사용! -> 더욱 간결하게 사용 가능!
arr = [1,2,3];
let [one1, two2, three3] = arr;

console.log(one1, two2, three3);


//1.
function getArea(radius){
    const pi = 3.14;

    return radius*radius*pi;
}

console.log(getArea(3));

//2.
let book = {
    "책 이름" : "hi",
    저자 : "author",
    가격 : 12000
};

for(let key in book){
    let values = book[key];
    console.log(values);
}

let date = new Date();
console.log(date.getMonth());