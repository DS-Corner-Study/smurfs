//개별 불러오기
//import {PI, getArea, getCircumference} from "./circle.js"; //import 문으로 모듈에서 값을 가져옴

//console.log(PI, getArea(1), getCircumference(1));

//전부 불러오기

//import * as circle from "./circle.js";

//console.log(circle.PI, circle.getArea(1), circle.getCircumference(1));

//export default로 받을때
import circle from "./circle.js"; //circle.js의 기본값을 불러와 circle에 저장한다

console.log(circle.PI, circle.getArea(1), circle.getCircumference(1)); 