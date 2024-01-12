/**
 * 테스트 및 공부용 TS 파일
 */

function add(...nums: number[]) {
    return nums.reduce((result, num) => result + num, 0);
}

console.log(add(1, 2, 3));

// ----------------------------------------------------------------------------------------------------

interface User {
    name: string;
}

/**
 * Sam 이라는 상수를 User Interface 타입으로 선언 -> 이 객체에 name 속성을 Sam으로 초기화
 */
// const Sam: User = {name: 'Sam'}

// function showName(this:User, age:number, gender:'m'|'f') {
//     console.log(this.name, age, gender)
// }

/**
 * showName 함수의 this를 Sam 객체로 바인딩 -> 그 결과를 새로운 변수 a에 할당 -> 이제 a 함수 호출 시 this는 항상 Sam을 가리킴
 * 
 * 코드 처리 순서 : 인터페이스 정의 -> 객체 초기화 -> 함수 정의 & 바인딩 -> 함수 호출
 */
// const a = showName.bind(Sam);
// a(30, 'm');

// ----------------------------------------------------------------------------------------------------

// Literal Types, Union Types, Intersection Types

const userName01 = "Bob";
let userName02 = "Tom";

// ----------------------------------------------------------------------------------------------------

// 제네릭

interface User {
    name: string;
    age: number;
}

interface Car {
    name: string;
    color: string;
}

interface Book {
    price: number;
}

const user: User = { name: "a", age: 10};
const car: Car = { name: "bmw", color: "red"};
const book: Book = { price: 3000};

function showName<T extends { name: string }>(data: T): string {
    return data.name;
}

showName(user);
showName(car);