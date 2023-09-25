//변수수
let age = 25;
console.log(age);

age = 30;
console.log(age);

//var - 이름 중복 가능 -> 가급적 let 사용용
var age1 = 25;
console.log(age1);

var age1 = 30;
console.log(age1);

//상수 - 절대 변하지 않는 값 저장장
const age2 = 25;
console.log(age2);

const birth = "1997.01.07";
//birth = "2022.02.07" --> 상수값이므로 변경 불가
//const age;
//age = 25; --> 상수 선언과 함께 반드시 초기화 해야함.

//명명규칙
//1. 기호사용 - _, $만 사용
let $age = 25;
let human_age = 25;
console.log($age);
console.log(human_age);

const user_name = "이정환";
const $ = "jQuery";

console.log(user_name);
console.log($);

//2. 숫자 사용 규칙 - 숫자로 시작 X(뒤에 위치치)
let year2022 = "good";
console.log(year2022);

//3. 예약어 규칙 - 예약된 단어 사용 X

//4. 대소 문자 구별
let code = 1;
let Code = 2;

console.log(code);
console.log(Code);

//5. 좋은 변수 이름
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
console.log(totalSalesCount);

//변수 표기법
//1. 카멜표기법(Camel-Expression)
// 모든 단어의 첫 글자를 대문자로 표기하는 방법, 처음은 소문자
let totalSalesCout;

//2. 파스칼 표기법(Pascal-Expression)
//모든 단어의 첫 글자가 대문자
let TotalSalesCount = 10;

//3. 스네이크 표기법(Snake-Expression)
// 특수 기호(_)를 단어 사이에 추가가
let total_sales_count = 10;


//자료형
//1. 원시 자료형 - 숫자형, 문자형, 불리언형, null형, Undefined 형
//2. 객체 자료형 - Object형 - 배열, 함수, 정규 표현식

//1. 숫자형 - 소수, 음수, 실수 모두 포함
let age3 = 25;
let tall = 175.9;
let minus = -20;

console.log(1 + 2);
console.log(1 * 2);
console.log(1 - 2);
console.log(1 / 2);
//모듈러 연산 -> 나머지 구하기기
console.log(1 % 2);
//무한대
let inf = Infinity;
let mInf = -Infinity;
//Not a Number - 불가능한 숫자형의 결과 표현현 (숫자*문자자)
let nan = NaN;
//예시
const nan1 = 1 * "hello";
const nan2 = 1 - "hello";
const nan3 = 1 / "hello";
console.log(nan1);
console.log(nan2);
console.log(nan3);

//OUTPUT : Infinity -> 요류 X
console.log(1/0);

//2. 문자형
let name = '이정환';
let welcomeText = '님 반가워요!';
let resultWelcomeText = name + welcomeText;
console.log(resultWelcomeText);

//백틱 - 문자열 사이에 변수 사용 가능!(템플릿 리터럴)
let guestName = "이정환";
let greetingText = `welcome ${guestName}!`;
console.log(greetingText);

let location = "역곡";
let introduce = `${name}은 ${location}에 살고있습니다.`;
console.log(introduce);

//3. 불리언, null, undefined
let isSwitchOn = false;
console.log(isSwitchOn);

let emptyVar = null;
console.log(emptyVar);

let realEmptyVar;
console.log(realEmptyVar);

//형변환
//묵시적 형변환(숫자 -> 문자 로 변경)
let number = 10;
let string = "20";

const result = number + string;
console.log(result);

//명시적 형변환
let strA = "10";
let strB = "10개";

let numA = Number(strA);
let numB = Number(strB);
//문자도 함께 포함된 문자열을 숫자로 변환하고 싶다면
numB = parseInt(strB, 10);

console.log(numA);
console.log(numB); //NaN

//시작을 문자로 하면 NaN
let str = "파이팅 2024";
let num = parseInt(str, 10);
console.log(num);

//문자열로 변환
let num1 = 2022;
let str1 = String(num1);
console.log(str1);

let varA;
let varB = null;
let varC = true;

let stra = String(varA);
let strb = String(varB);
let strc = String(varC);

console.log(stra);
console.log(strb);
console.log(strc);

//불리언으로 변환
varA = "하이"; //true
varB = 0; //false
varC = ""; //false

let boolA = Boolean(varA); 
let boolB = Boolean(varB);
let boolC = Boolean(varC);

console.log(boolA);
console.log(boolB);
console.log(boolC);

//연산자
//1. 대입연산자
numA = 1;
let numC;

numB = numC = numA;
console.log(numA, numB, numC);

//2. 산술 연산자
let numberA = 1;
let numberB = 2;

console.log(numberA + numberB);
console.log(numberA - numberB);
console.log(numberA * numberB);
console.log(numberA / numberB);
console.log(numberA % numberB);

numberA = 1 + 2 * 10;
console.log(numberA);
numberA = (1 + 2) * 10;
console.log(numberA);

//3. 복합대입연산자
number = 10;
number = number + 10;
console.log(number);

number += 10;
console.log(number);

number = 10;

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

//4. 증감 연산자
let a = 1;
a++;
console.log(a);

let b = 1;
b--;
console.log(b);

a = 1;
console.log(a++);
console.log(a);

b = 1;
console.log(b--);
console.log(b);

//전위 연산산
a = 1;
console.log(++a);
console.log(a);

b = 1;
console.log(--b);
console.log(b);

//5. 논리 연산자
// || - or
// && - and
// ! - not
boolA = true;
boolB = false;
console.log(boolA || boolB);
console.log(boolA && boolB);
console.log(!boolA);
console.log(!boolB);

//6. 비교 연산자
numberA = 2;
numberB = 2;
let numberC = '2';

// === - 같다(자료형까지지)
console.log(numberA === numberB);
console.log(numberB === numberC);
// == - 값만 비교(자료형 X)
console.log(numberB == numberC);

// !== - 같지 않다
console.log(numberA !== numberB);
console.log(numberB !== numberC);
// != 값만 다르냐(자료형 X)
console.log(numberB != numberC); 

//대소비교
numberA = 1;
numberB = 2;
numberC = 3;

console.log(numberA < numberB);
console.log(numberA > numberB);
console.log(numberB < numberC);
console.log(numberB > numberC);

//null 병합 연산자
// ??를 사용하면, 값이 확정된 변수를 찾아낼 수 있음
varA = 10;
varB = 20;
varC;

console.log(varA ?? varB);
console.log(varC ?? varB);

//요구사항 : 변수 user에 해당 사용자의 이름이 있다면 이름을, 없다면 닉네임을 저장하시오.
name = null;
let nickname = "winterlood";

let user = name ?? nickname;

console.log(user); //name값이 없으므로 nickname이 반환

name = "이정환";
nickname = "winter lood";
user = name ?? nickname;
console.log(user); //name값이 존재하므로 name값이 반환

//"동적 타이핑"과 typeof 연산자
//변수(숫자 -> 문자) : 오류발생X, 자료형이 동적으로 결정됨
varA = 1;
varA = "이정환";

console.log(++varA); //문자에 증감연산자 -> NaN

//typeof : 자료형 확인
varA = 1;
varA = "이정환";
console.log(typeof varA);

//삼항 조건 연산자 : 3개의 피연산자를 취하는 연산자
// 조건식 ? 참일때 수행 명령어 : 거짓일때 수행 명령어
const var1 = "안녕하세요";

typeof var1 === "string"
    ? console.log("문자 자료형") //문자 자료형이 맞으면
    : console.log("문자 자료형이 아님"); //문자 자료형이 아니면


//삼항 연산자 -> 짝수, 홀수 판별
//1. 
num = 1;
num % 2 === 0 ? console.log("짝수") : console.log("홀수");

//2. 
let result1 = num % 2 === 0 ? "짝수" : "홀수";
console.log(result1);

//조건문
//if 문
num = 5;
if(num >= 10){
    console.log("조건 일치!");
    console.log("num은 10이상입니다.");

} else if(num >= 5) {
    console.log("num은 5 이상입니다.");
} 
else {
    console.log("num은 5미만입니다.");
}

let country = "ko";
if(country === "ko") {
    console.log("한국");
} else if(country === "us") {
    console.log("미국");
}else if (country === "dk") {
    console.log("덴마크");
} else {
    console.log("미분류");
}

//switch 문
let fruit = "apple";

switch (fruit) {
    case "apple" : {
        console.log("사과");
        break;
    }
    case "banana" : {
        console.log("바나나");
        break;
    }
    default : {
        console.log("우리가 찾는 과일이 아님");
    }
}

country = "ko";
switch(country) {
    case "ko" : {
        console.log("한국");
        break;
    }
    case "us" : {
        console.log("미국");
        break;
    }
    case "dk" : {
        console.log("덴마크");
        break;
    }
    case "do" : {
        console.log("도미니카공화국");
        break;
    }
    case "mx" : {
        console.log("멕시코");
        break;
    }
    case "ch" : {
        console.log("스위스");
        break;
    }
    case "es" : {
        console.log("스페인");
        break;
    }
    default : {
        console.log("미분류");
    }
}

//반복문
//for 문
for(let i = 1; i <= 100; i++){
    console.log(i);
}

for(let idx = 1; idx <= 100; idx++){
    console.log(idx);
}

//반복문 강제 종료하기, 건너뛰기
for(let idx = 1; idx <= 100; idx++){
    if(idx > 10){
        console.log("반복문 종료!");
        break;
    }
    console.log(idx);
}

//홀수만 출력하기
for(let idx = 1; idx <= 10; idx++) {
    if(idx % 2 === 0){
        continue;
    }
    console.log(idx);
}

//함수
let width = 10;
let height = 20;
let area = width * height;

console.log("면적 : ", area);

let width1 = 10;
let height1 = 20;
let area1 = width1 * height1;

let width2 = 100;
let height2 = 200;
let area2 = width2 * height2;

console.log("면적: ", area1);
console.log("면적: ", area2);

//함수 선언
//function 함수이름 (매개변수) {
//  함수가 수행하는 명령
//}

function greeting(){
    console.log("안녕하세요!");
}

console.log("함수 시작 전");
greeting();
console.log("함수 종료");

//넓이 구하는 함수
function getArea(){
    let width = 20;
    let height = 10;
    let area = width * height;

    console.log(area);
}
getArea();

//함수의 인수와 매개변수
//인수 : 함수를 호출하면서 넘겨주는 값 ->> 값
//매개변수 : 함수에서 넘겨받은 인수를 저장하는 변수 ->> 변수

function getArea(width, height){
    let area = width * height;
    console.log(area);
}
getArea(10, 20);

//함수 반환
function getArea(width, height){
    let area = width * height;
    return area;
}

let resultArea = getArea(10,20);
console.log("면적 : ", resultArea);

//중첩 함수 : 특정 함수 내부에서 선언된 함수 -> 함수 내에서 서로 역할 분담 -> 중복 코드 방지
function greeting(){
    function greetingWithName(name){
        console.log(`hello! ${name}`);
    }

    let name = "이정환";
    greetingWithName(name);
}

greeting();

//함수와 호이스팅
//호이스팅 : 변수나 함수를 호출하거나 접근하는 코드가 함수 선언 위에 있음에도 불구하고, 마치 선언 코드가 위에 있는 것처럼 동작하는 기능

func(); //먼저 있어도 오류 X -> 준비 단계 : 함수들을 모두 찾아서 미리 생성해둠. -> 함수 선언 코드 호출

function func(){
    console.log("hello");
}

//함수 표현식 : 함수를 생성하고 변수에 값으로 저장하는 방법(함수를 숫자, 문자열처럼 값으로 생각!!!)
//함수 이름 생략 --> 익명함수
let greeting1  = function(){
    console.log("hello");
};

greeting1();

//선언한 함수를 변수에 저장하여 사용하는 예
function greetFunc(){
    console.log("hello");
}

let greeting2 = greetFunc; //함수를 변수에 저장할때에는 함수 호출과 달리 소활호를 명시하지 않습니다.
greeting2(); //이 변수는 함수가 되어버림

//함수 표현식으로 만든 함수는 호이스팅이 되지 않는다.
funcA();
//funcB(); 호이스팅 X

function funcA(){
    console.log("func A");
}

//함수 선언이 아닌 '값'으로 취급하기 때문에
let funcB = function(){
    console.log("func B");
};

//콜백 함수 : 다른 함수를 인수(=값)로도 전달 할수 있음
function parentFunc(callBack){
    console.log("parent");
    callBack();
}

function childFunc(){
    console.log("child");
}

parentFunc(childFunc); //calback에 childFunc 저장됨.



//콜백 함수가 필요한 이유
function repeat(count){
    for(let idx = 0; idx < count; idx++){
        console.log(idx + 1);
    }
}
function repeatDouble(count){
    for(let idx = 0; idx < count; idx++) {
        console.log((idx+1) * 2);
    }
}
repeatDouble(5);


//동일한 기능을 갖더라도 특정 부분이 다름 -> 중복 코드 발생
//콜백 함수 사용!!!!
function repeat(count, callBack){
    for(let idx=0; idx < count; idx++) {
        callBack(idx + 1);
    }
}

function origin(count){
    console.log(count);
}

repeat(5, origin);


//콜백함수 사용!!
function repeat(count, callBack){
    for(let idx = 0; idx < count; idx++){
        callBack(idx + 1);
    }
}

function double(count){
    console.log(count * 2);
}

repeat(5, double); //callBack에 double이 저장됨

//함수 표현식을 이용한 콜백 함수
function repeat1(count, callBack){
    for(let idx = 0; idx < count; idx++){
        callBack(idx + 1);
    }
}

const double1 = function(count){
    console.log(count * 2);
};

repeat1(5, double1); // 변수 double에 저장된 함수를 repeat1의 인수로 전달해 콜백 함수로 사용한다.

//(익명함수를 직접 인수 형태로 전달)
function repeat2(count, callBack){
    for(let idx = 0; idx < count; idx++){
        callBack(idx + 1);
    }
}

repeat(5, function(count){
    console.log(count * 2);
});

//화살표 함수 : 익명 함수를 매우 간결하게 작성하는 함수 표현식의 단축 문법
// let funcA = (매개변수) => 반환값;

greeting = (name) => `hello ${name}`;

const greetingText1 = greeting("이정환");

console.log(greetingText1);


//함수 본문이 여러줄 -> {} -> return 문!!!
greeting = (name) => {
    greetingText = `hello ${name}`;
    return greetingText; 
};

console.log(greeting("이정환"));

//콜백함수 -> 화살표 함수
let isConfirm = true;

function confirm(onYes, onNo){
    if(isConfirm) onYes();
    else onNo();
}

confirm(
    () => console.log("승인"), //첫번째 인수로 콘솔에 '승인'을 출력하는 화살표 함수를 전달. 이 함수는 매개변수 onYes에 저장됨.
    () => console.log("거부") //두번째 인수로 콘솔에 '거부'를 출력하는 화살표 함수를 전달. 이 함수는 매개변수 onNo에 저장됨.
);

//스코프 : 변수나 함수의 제약범위
//변수와 함수는 생성과 동시에 접근하거나 호출할 때 일정한 제약을 가짐

// 전역 스코프 : 해당 변수를 코드 어디서나 접근 가능
// 지역 스코프 : 특정 영역에서만 해당 변수에 접근 가능

a = 1; // 전역 변수 -> 중괄호 내부 X

function foo(){
    console.log(a);
}

function bar(){
    console.log(a);
}

foo();
bar();
console.log(a);

function foo1(){
    let a = 1;
}

//console.log(a); //a는 정의되지 않음!!! -> 지역 변수

//조건문 내 -> 지역 변수
if (true){
    let a = 1;
}

//console.log(a); //a는 정의되지 않음!!!

//반복문 내 -> 지역 변수
for(let i = 0; i < 10; i++) {
    let a = 1;
}

//console.log(a); //a 정의되지 않음
//console.log(i); //i 정의되지 않음

//함수도 스코프를 가짐 --> 전역 함수
function foo2(){
    console.log("foo");
}

function bar(){
    console.log("bar");
}

bar();

// 지역 함수
function foo(){
    console.log("foo");

    //지역 함수!!!
    function bar1(){
        console.log("bar1");
    }
}

// bar1(); --> bar1() 정의되지 않음

//조건문 내부의 함수 -> 지역 함수
if (true){
    function foo10(){
        console.log("bar");
    }
}

foo10(); //foo10()은 정의되지 않음

//반복문 내부의 함수 -> 지역 함수
for(let i = 1; i < 10; i++){
    function barr(){
        console.log("barr");
    }
}

barr(); //barr() 정의 되지 않음!

// 블록스코프 : 블록 내부에서 선언한 변수가 갖는 스코프
    // let, const로 선언한 변수 -> 블록 스코프
// 함수 스코프 : 함수 내부에서만!!!! 선언한 변수가 갖는 스코프
    // var로 선언한 변수 -> 함수 스코프

if (true) {
    var k = 1;
}
console.log(k); //var : 조건문 내부에 선언했지만 외부 접근이 가능(함수가 아니니까) -> 전역 변수

//함수 내부의 var 선언
function food(){
    var p = 1;
}

//console.log(p); //p는 정의되어있지 않음

//객체 : 다양한 값을 담는 자료형

//객체 생성과 프로퍼티
//1. '객체 리터럴'로 객체 생성
let objA = {};
//2. '객체 생성자'로 객체 생성
let objB = new Object();

//3. key와 value로 이루어진 '프로퍼티' 사용
//프로퍼티 : 속성 -> 객체를 설명하는 정보
//key는 반드시 문자형!, 중복되면 마지막으로 선택됨
let person = {
    name : "이정환",
    age : 25,
    "like cat" : true
};

//객체 프로퍼티 다루기
//1. 프로퍼티 접근
const personName = person.name; // 점 표기법
const personAge = person["age"]; // 괄호 표기법

console.log(personName);
console.log(personAge);

//2. 프로퍼티 추가
person.gender = "male"; // 점 표기법 -> key가 고정적일 때
person["nickname"] = "winterlood"; // 괄호 표기법 -> key가 유동적일 때

console.log(person.gender);
console.log(person["nickname"]);

// key와 value가 유동적인 프로퍼티를 괄호 표기법으로 객체에 추가하는 예
function addProperty(job, key, value) {
    obj[key] = value;
}

let obj = {};

addProperty(obj, "a", 1);
addProperty(obj, "b", 2);
addProperty(obj, "c", 3);

console.log(obj);

//프로퍼티 수정
let cat = {
    name : "치삼이",
    age : 4
};

cat.name = "치삼";
cat["age"] = 5;

console.log(cat);

//프로퍼치 삭제
delete cat.name;
delete cat["age"];

console.log(cat);

//상수 객체의 프로퍼티
const objj = {
    a:1,
    b: "text"
};

objj.a = 2;
objj.c = undefined;
delete objj.b;

console.log(objj);

//in 연산자 -> 객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환
let obj1 = {
    a: 1
};

console.log(obj1.b); //b라는 key가 없기 때문에 -> undefined(존재 여부 확인 가능)

let isPropertyExist = obj1.b !== undefined; // undefined가 맞으므로 -> false

console.log(isPropertyExist);

//in 연산자 사용!!!!
person = {
    age : 10
};

let isNameExist = "name" in person; //없으므로 false
console.log(isNameExist);


//메서드 : 객체에서 값(value)이 함수인 프로퍼티
person = {
    name: "이정환",
    //메서드 : value -> 함수
    sayHi : function(){
        console.log("안녕");
    }
};

person.sayHi();


//배열 : 순서가 있는 요소의 집합, 여러개의 항목을 담는 리스트
//배열 선언
let arrA = new Array(); // 배열 생성자
let arrB = []; //배열 리터럴 -> 거의 이방법!!

// 배열 값 -> 모두 가능
let arr = [
    1,
    "1",
    true,
    null,
    undefined,
    () => {},
    function () {
        [1,2,3],
        {a : 1}
    }
];

//배열 인덱스 : 데이터 위치를 접근
food = ['짜장면', '피자', '치킨'];

console.log(food[0]);
console.log(food[1]);
console.log(food[2]);

//인덱스를 사용하여 배열 요소 수정, 추가
food[2] = "파스타";
food[3] = "레몬";

console.log(food);

